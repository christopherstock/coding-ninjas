
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents a pickable item.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Item extends ninjas.GameObject
    {
        /** Indicates if this item has been picked. */
        public          picked                      :boolean                        = null;

        /***************************************************************************************************************
        *   Creates a new item.
        *
        *   @param shape  The shape for this object.
        *   @param sprite The sprite to use for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, sprite:ninjas.Sprite, x:number, y:number )
        {
            super
            (
                shape,
                sprite,
                x,
                y,
            );

            this.shape.body.collisionFilter = ninjas.Setting.COLLISION_GROUP_NON_COLLIDING_ITEM;
        }

        /***************************************************************************************************************
        *   Renders this item.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            if ( !this.picked )
            {
                this.checkPicked();
            }
        }

        /***************************************************************************************************************
        *   Checks if this item is picked up in this frame.
        ***************************************************************************************************************/
        private checkPicked()
        {
            if ( matter.Bounds.overlaps( this.shape.body.bounds, ninjas.Main.game.level.player.shape.body.bounds ) )
            {
                ninjas.Debug.item.log( "Player picked item" );

                this.pick();
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
            ninjas.Main.game.matterJsSystem.removeFromWorld( this.shape.body );
        }
    }
