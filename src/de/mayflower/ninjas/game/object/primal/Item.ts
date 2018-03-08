
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents a pickable item.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Item extends ninjas.GameObject
    {
        /** Indicates if this item has been picked. */
        public          picked                      :boolean                        = null;

        /***************************************************************************************************************
        *   Creates a new item.
        *
        *   @param shape          The shape for this object.
        *   @param spriteTemplate The sprite template to use for this object.
        *   @param x              Startup position X.
        *   @param y              Startup position Y.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, spriteTemplate:ninjas.SpriteTemplate, x:number, y:number )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y,
            );

            this.shape.body.collisionFilter = ninjas.SettingMatterJs.COLLISION_GROUP_NON_COLLIDING_ITEM;
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
            ninjas.Main.game.engine.matterJsSystem.removeFromWorld( this.shape.body );
        }
    }
