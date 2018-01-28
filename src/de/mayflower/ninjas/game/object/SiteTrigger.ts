
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
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param sprite The sprite to use.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, x:number, y:number, sprite:ninjas.Sprite )
        {
            super
            (
                shape,
                x,
                y,
                sprite
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
