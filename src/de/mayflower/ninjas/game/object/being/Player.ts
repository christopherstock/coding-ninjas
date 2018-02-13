
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents the player being controlled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Player extends ninjas.Character
    {
        /***************************************************************************************************************
        *   Creates a new player instance.
        *
        *   @param shape            The shape for the player.
        *   @param x                Startup position X.
        *   @param y                Startup position Y.
        *   @param lookingDirection The initial looking direction.
        *   @param spriteTemplate   The initial sprite template to use for the player.
        ***************************************************************************************************************/
        public constructor
        (
            shape            :ninjas.Shape,
            x                :number,
            y                :number,
            lookingDirection :ninjas.CharacterLookingDirection,
            spriteTemplate   :ninjas.SpriteTemplate
        )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y,
                lookingDirection,
                ninjas.SettingMatterJs.PLAYER_SPEED_MOVE,
                ninjas.SettingMatterJs.PLAYER_JUMP_POWER
            );
        }

        /***************************************************************************************************************
        *   Renders the current player tick.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            if ( !this.dead )
            {
                this.handleKeys();
                this.checkEnemyKill();

                this.clipToHorizontalLevelBounds();
            }

            this.assignCurrentSprite();
        }

        /***************************************************************************************************************
        *   Checks all pressed player keys and performs according actions.
        ***************************************************************************************************************/
        private handleKeys()
        {
            if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_LEFT ) )
            {
                this.moveLeft();
            }
            else if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_RIGHT ) )
            {
                this.moveRight();
            }

            if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_UP ) )
            {
                ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_UP );

                if ( this.collidesBottom )
                {
                    this.jump();
                }
            }

            if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_SPACE ) )
            {
                ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_SPACE );

                if ( !this.gliding && !this.glidingRequest && !this.collidesBottom )
                {
                    this.requestGliding();
                }
            }
        }

        /***************************************************************************************************************
        *   Assigns the current sprite to the player according to his current state.
        ***************************************************************************************************************/
        private assignCurrentSprite()
        {
            if ( this.isFalling() )
            {
                if ( this.gliding )
                {
                    if ( this.lookingDirection == ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_GLIDE_LEFT );
                    }
                    else
                    {
                        this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_GLIDE_RIGHT );
                    }
                }
                else
                {
                    if ( this.lookingDirection == ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_FALL_LEFT );
                    }
                    else
                    {
                        this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_FALL_RIGHT );
                    }
                }
            }
            else if ( this.isJumping() )
            {
                if ( this.lookingDirection == ninjas.CharacterLookingDirection.LEFT )
                {
                    this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_JUMP_LEFT );
                }
                else
                {
                    this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_JUMP_RIGHT );
                }
            }
            else
            {
                if ( this.movesLeft )
                {
                    this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_WALK_LEFT );
                }
                else if ( this.movesRight )
                {
                    this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_WALK_RIGHT );
                }
                else
                {
                    if ( this.lookingDirection == ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_STAND_LEFT );
                    }
                    else
                    {
                        this.setSprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_STAND_RIGHT );
                    }
                }
            }
        }

        /***************************************************************************************************************
        *   Checks if an enemy is currently killed by the player (by jumping onto the enemie's head.)
        ***************************************************************************************************************/
        private checkEnemyKill()
        {
            // check character landing on enemies
            if ( this.collidesBottom )
            {
                for ( let enemy of ninjas.Main.game.level.enemies )
                {
                    // check intersection of the player and the enemy
                    if ( matter.Bounds.overlaps( this.shape.body.bounds, enemy.shape.body.bounds ) )
                    {
                        ninjas.Debug.enemy.log( "Enemy touched by player" );

                        let playerBottom:number = Math.floor( this.shape.body.position.y  + this.shape.getHeight() / 2 );
                        let enemyTop:number     = Math.floor( enemy.shape.body.position.y - enemy.shape.getHeight() / 2 );

                        ninjas.Debug.enemy.log( " playerBottom [" + playerBottom + "] enemyTop [" + enemyTop + "]" );

                        if ( playerBottom == enemyTop )
                        {
                            ninjas.Debug.enemy.log( " Enemy killed" );

                            // flag enemy as dead
                            enemy.kill();

                            // let enemy fall out of the screen
                            enemy.punchOut();

                            // disable enemy collisions
                            enemy.shape.body.collisionFilter = ninjas.SettingMatterJs.COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY;
                        }
                    }
                }
            }
        }
    }
