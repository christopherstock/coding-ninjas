
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents the player being controlled by the user.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgPlayer extends mfg.MfgCharacter
    {
        /***************************************************************************************************************
        *   Creates a new player instance.
        *
        *   @param x                Startup position X.
        *   @param y                Startup position Y.
        *   @param lookingDirection The initial looking direction.
        ***************************************************************************************************************/
        public constructor( x:number, y:number, lookingDirection:mfg.MfgCharacterLookingDirection )
        {
            let img:string = mfg.MfgImage.IMAGE_PLAYER_STAND;

            super
            (
                new mfg.MfgShapeRectangle
                (
                    mfg.MfgSettings.PLAYER_WIDTH,
                    mfg.MfgSettings.PLAYER_HEIGHT,
                    mfg.MfgSettings.COLOR_DEBUG_PLAYER,
                    false,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
                    mfg.MfgGameObject.DENSITY_HUMAN
                ),
                x,
                y,
                img,
                lookingDirection,
                mfg.MfgSettings.PLAYER_SPEED_MOVE,
                mfg.MfgCharacter.JUMP_POWER_DEFAULT
            );
        }

        /***************************************************************************************************************
        *   Renders the current player tick.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            if ( this.collidesBottom || this.ticksWithoutBottomCollision++ < mfg.MfgCharacter.MAX_TICKS_WITHOUT_BOTTOM_COLLISION )
            {
                this.shape.body.render.sprite.texture = mfg.MfgImage.IMAGE_PLAYER_STAND;
            }
            else
            {
                this.shape.body.render.sprite.texture = mfg.MfgImage.IMAGE_PLAYER_FALL;
            }

            if ( !this.dead )
            {
                this.handleKeys();
                this.checkEnemyKill();
            }
        }

        /***************************************************************************************************************
        *   Checks all pressed player keys and performs according actions.
        ***************************************************************************************************************/
        private handleKeys()
        {
            if ( mfg.Mfg.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_LEFT ) )
            {
                this.moveLeft();
            }

            if ( mfg.Mfg.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_RIGHT ) )
            {
                this.moveRight();
            }

            if ( mfg.Mfg.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_UP ) )
            {
                mfg.Mfg.game.keySystem.setNeedsRelease( mfg.MfgKeySystem.KEY_UP );

                this.jump();
            }
        }

        /***************************************************************************************************************
        *   Checks if an enemy is currently killed by jumping on his head.
        ***************************************************************************************************************/
        private checkEnemyKill()
        {
            // check character landing on enemies
            if ( this.collidesBottom )
            {
                for ( let gameObject of mfg.Mfg.game.level.gameObjects )
                {
                    if ( gameObject instanceof mfg.MfgEnemy )
                    {
                        let enemy:mfg.MfgEnemy = gameObject;

                        // check intersection of the player and the enemy
                        if ( Matter.Bounds.overlaps( this.shape.body.bounds, enemy.shape.body.bounds ) )
                        {
                            mfg.MfgDebug.enemy.log( "Enemy touched by player" );

                            let playerBottom:number = Math.floor( this.shape.body.position.y  + this.shape.getHeight() / 2 );
                            let enemyTop:number     = Math.floor( enemy.shape.body.position.y - enemy.shape.getHeight() / 2 );

                            mfg.MfgDebug.enemy.log( " playerBottom [" + playerBottom + "] enemyTop [" + enemyTop + "]" );

                            if ( playerBottom == enemyTop )
                            {
                                mfg.MfgDebug.enemy.log( " Enemy killed" );

                                // flag enemy as dead
                                enemy.kill();

                                // let enemy fall out of the screen
                                enemy.punchOut();

                                // disable enemy collisions
                                enemy.shape.body.collisionFilter = mfg.MfgSettings.COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY;
                            }
                        }
                    }
                }
            }
        }
    }
