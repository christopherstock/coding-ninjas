
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents a collidable and solid obstacle.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Obstacle extends ninjas.GameObject
    {
        /** Specifies if the player shall be allowed to jump through this obstacle. */
        private         jumpPassThrough             :boolean                        = false;

        /***************************************************************************************************************
        *   Creates a new obstacle.
        *
        *   @param shape           The shape for this object.
        *   @param x               Startup position X.
        *   @param y               Startup position Y.
        *   @param jumpPassThrough Specifies if the player may jump through this obstacle.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, x:number, y:number, jumpPassThrough:boolean )
        {
            super
            (
                shape,
                null,
                x,
                y
            );

            this.jumpPassThrough = jumpPassThrough;
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            if ( this.jumpPassThrough )
            {
/*
                if
                (
                    ninjas.ninjas.game.level.player.body.velocity.y >= 0.0

//                    ninjas.ninjas.game.level.player.body.position.y + ninjas.ninjas.game.level.player.height / 2
//                    <=  this.body.position.y

                )
                {
                    this.body.collisionFilter = ninjas.ninjasSettings.COLLISION_GROUP_COLLIDING;
                }
                else
                {
                    this.body.collisionFilter = ninjas.ninjasSettings.COLLISION_GROUP_NON_COLLIDING;
                }
*/
            }
        }
    }
