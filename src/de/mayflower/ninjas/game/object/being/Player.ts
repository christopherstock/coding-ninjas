
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents the player being controlled by the user.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
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
        *   @param initialFloat     Whether to startup with an open parachute.
        ***************************************************************************************************************/
        public constructor
        (
            shape            :ninjas.Shape,
            x                :number,
            y                :number,
            lookingDirection :ninjas.CharacterLookingDirection,
            spriteTemplate   :ninjas.SpriteTemplate,
            initialFloat     :boolean
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

            if ( initialFloat )
            {
                this.openParachute();

                // force gliding sprite on 1st frame
                this.collidesBottom        = false;
                this.shape.body.velocity.y = 0.0001;
            }
        }

        /***************************************************************************************************************
        *   Renders the current player tick.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            if ( this.punchBackTicks == 0 )
            {
                this.handleKeys();
            }

            this.checkEnemyKill();
            this.clipToHorizontalLevelBounds();
            this.assignCurrentSprite();
        }

        /***************************************************************************************************************
        *   Checks all pressed player keys and performs according actions.
        ***************************************************************************************************************/
        private handleKeys()
        {
            if
            (
                    ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_LEFT )
                ||  ninjas.Main.game.engine.pointerSystem.leftCanvasHalfPressed
            )
            {
                this.moveLeft();
            }
            else if
            (
                    ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_RIGHT )
                ||  ninjas.Main.game.engine.pointerSystem.rightCanvasHalfPressed
            )
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

            if ( ninjas.Main.game.engine.pointerSystem.canvasTabbed )
            {
                ninjas.Main.game.engine.pointerSystem.canvasTabbed = false;

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
            // check if player collides on bottom and if he's descending
            if ( this.shape.body.velocity.y > 0.0 )
            {
                // browse all enemies
                for ( let enemy of ninjas.Main.game.level.enemies )
                {
                    // skip dead enemies
                    if ( !enemy.dead && !enemy.dying )
                    {
                        // check intersection of the player and the enemy
                        if ( matter.Bounds.overlaps( this.shape.body.bounds, enemy.shape.body.bounds ) )
                        {
                            ninjas.Debug.enemy.log( "Enemy touched by player" );

                            let playerBottom:number = Math.floor( this.shape.body.position.y  + this.shape.getHeight() / 2 );
                            let enemyTop:number     = Math.floor( enemy.shape.body.position.y - enemy.shape.getHeight() / 2 );

                            ninjas.Debug.enemy.log( " playerBottom [" + playerBottom + "] enemyTop [" + enemyTop + "]" );

                            let MAX_SINK_DELTA:number = 10;
                            if ( Math.abs( playerBottom - enemyTop ) <= MAX_SINK_DELTA )
                            {
                                ninjas.Debug.enemy.log( " Enemy hit by player" );

                                enemy.onHitByPlayer( this.lookingDirection );
                            }
                        }
                    }
                }
            }
        }
    }
