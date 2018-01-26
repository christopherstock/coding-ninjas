
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a pickable item.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgItem extends mfg.MfgGameObject
    {
        /** Indicates if this item has been picked. */
        public          picked                      :boolean                        = null;

        /***************************************************************************************************************
        *   Creates a new item.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgShape, x:number, y:number )
        {
            super
            (
                shape,
                x,
                y,
                mfg.MfgImage.IMAGE_ITEM
            );

            this.shape.body.collisionFilter = mfg.MfgSettings.COLLISION_GROUP_NON_COLLIDING_ITEM;
        }

        /***************************************************************************************************************
        *   Renders this item.
        ***************************************************************************************************************/
        public render()
        {
            if ( !this.picked )
            {
                if ( Matter.Bounds.overlaps( this.shape.body.bounds, mfg.Mfg.game.level.player.shape.body.bounds ) )
                {
                    mfg.MfgDebug.item.log("Player picked item");

                    this.pick();
                }
            }
        }

        /***************************************************************************************************************
        *   Picks up this item.
        ***************************************************************************************************************/
        private pick()
        {
            // flag as picked
            this.picked = true;

            // remove item body
            Matter.World.remove( mfg.Mfg.game.engine.world, this.shape.body );
        }
    }
