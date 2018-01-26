
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
        *   @param image            The initial image for the player.
        ***************************************************************************************************************/
        public constructor
        (
            x                :number,
            y                :number,
            lookingDirection :ninjas.CharacterLookingDirection,
            image            :HTMLImageElement
        )
        {
            super
            (
                new ninjas.ShapeRectangle
                (
                    image.width,
                    image.height,
                    ninjas.Setting.COLOR_DEBUG_PLAYER,
                    false,
                    0.0,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    ninjas.GameObject.DENSITY_HUMAN
                ),
                x,
                y,
                image,
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

            if ( !this.dead )
            {
                this.handleKeys();
                this.checkEnemyKill();

                this.clipToHorizontalLevelBounds();
            }
        }

        /***************************************************************************************************************
        *   Checks all pressed player keys and performs according actions.
        ***************************************************************************************************************/
        private handleKeys()
        {
            if ( ninjas.Main.game.keySystem.isPressed( ninjas.Key.KEY_LEFT ) )
            {
                this.moveLeft();
            }

            if ( ninjas.Main.game.keySystem.isPressed( ninjas.Key.KEY_RIGHT ) )
            {
                this.moveRight();
            }

            if ( ninjas.Main.game.keySystem.isPressed( ninjas.Key.KEY_UP ) )
            {
                ninjas.Main.game.keySystem.setNeedsRelease( ninjas.Key.KEY_UP );

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
