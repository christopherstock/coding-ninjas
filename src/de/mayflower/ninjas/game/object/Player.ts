
    import * as Matter from 'matter-js';
    import * as ninjas from '../../ninjas';

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
        *   @param x                Startup position X.
        *   @param y                Startup position Y.
        *   @param lookingDirection The initial looking direction.
        ***************************************************************************************************************/
        public constructor( x:number, y:number, lookingDirection:ninjas.CharacterLookingDirection )
        {
            let img:string = ninjas.Image.IMAGE_PLAYER_STAND;

            super
            (
                new ninjas.ShapeRectangle
                (
                    ninjas.Setting.PLAYER_WIDTH,
                    ninjas.Setting.PLAYER_HEIGHT,
                    ninjas.Setting.COLOR_DEBUG_PLAYER,
                    false,
                    0.0,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    ninjas.GameObject.DENSITY_HUMAN
                ),
                x,
                y,
                img,
                lookingDirection,
                ninjas.Setting.PLAYER_SPEED_MOVE,
                ninjas.Character.JUMP_POWER_DEFAULT
            );
        }

        /***************************************************************************************************************
        *   Renders the current player tick.
        ***************************************************************************************************************/
        public render()
        {
            super.render();
/*
            if ( this.collidesBottom || this.ticksWithoutBottomCollision++ < ninjas.Character.MAX_TICKS_WITHOUT_BOTTOM_COLLISION )
            {
                this.shape.body.render.sprite.texture = ninjas.Image.IMAGE_PLAYER_STAND;
            }
            else
            {
                this.shape.body.render.sprite.texture = ninjas.Image.IMAGE_PLAYER_FALL;
            }
*/
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
            if ( ninjas.Main.game.keySystem.isPressed( ninjas.KeySystem.KEY_LEFT ) )
            {
                this.moveLeft();
            }

            if ( ninjas.Main.game.keySystem.isPressed( ninjas.KeySystem.KEY_RIGHT ) )
            {
                this.moveRight();
            }

            if ( ninjas.Main.game.keySystem.isPressed( ninjas.KeySystem.KEY_UP ) )
            {
                ninjas.Main.game.keySystem.setNeedsRelease( ninjas.KeySystem.KEY_UP );

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
                for ( let gameObject of ninjas.Main.game.level.gameObjects )
                {
                    if ( gameObject instanceof ninjas.Enemy )
                    {
                        let enemy:ninjas.Enemy = gameObject;

                        // check intersection of the player and the enemy
                        if ( Matter.Bounds.overlaps( this.shape.body.bounds, enemy.shape.body.bounds ) )
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
                                enemy.shape.body.collisionFilter = ninjas.Setting.COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY;
                            }
                        }
                    }
                }
            }
        }
    }
