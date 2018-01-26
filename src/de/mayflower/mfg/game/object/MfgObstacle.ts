
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a collidable and solid obstacle.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgObstacle extends mfg.MfgGameObject
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
        public constructor( shape:mfg.MfgShape, x:number, y:number, jumpPassThrough:boolean )
        {
            super
            (
                shape,
                x,
                y,
                null
            );

            this.jumpPassThrough = jumpPassThrough;
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {
            if ( this.jumpPassThrough )
            {
/*
                if
                (
                    mfg.Mfg.game.level.player.body.velocity.y >= 0.0

//                    mfg.Mfg.game.level.player.body.position.y + mfg.Mfg.game.level.player.height / 2
//                    <=  this.body.position.y

                )
                {
                    this.body.collisionFilter = mfg.MfgSettings.COLLISION_GROUP_COLLIDING;
                }
                else
                {
                    this.body.collisionFilter = mfg.MfgSettings.COLLISION_GROUP_NON_COLLIDING;
                }
*/
            }
        }
    }
