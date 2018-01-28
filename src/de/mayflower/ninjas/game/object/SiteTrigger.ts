
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';
    import * as site   from '../../../site/site';

    /*******************************************************************************************************************
    *   Represents a non-colliding decoration.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteTrigger extends ninjas.Decoration
    {
        /** Flags if the according popup is currently displayed. */
        private                         popupActive                 = false;

        /***************************************************************************************************************
        *   Creates a new site trigger.
        *
        *   @param shape  The shape for this object.
        *   @param sprite The sprite to use.
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
                y
            );


        }

        /***************************************************************************************************************
        *   Renders this site trigger.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            // check if player collides with this trigger
            if ( this.checkPlayerCollision() )
            {
                if ( !this.popupActive )
                {
                    this.popupActive = true;
                    site.Site.showPopup();
                }
            }
            else
            {
                if ( this.popupActive )
                {
                    this.popupActive = false;
                    site.Site.hidePopup();
                }
            }
        }

        /***************************************************************************************************************
        *   Renders this site trigger.
        ***************************************************************************************************************/
        private checkPlayerCollision() : boolean
        {
            return ( matter.Bounds.overlaps( this.shape.body.bounds, ninjas.Main.game.level.player.shape.body.bounds ) );
        }
    }
