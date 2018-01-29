
    require( "animate.css" );

    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Manages the communication between the game and the company presentation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Site
    {
        /** An example site popup. */
        private     static              examplePopup                    :HTMLDivElement             = null;

        /*****************************************************************************
        *   Being invoked when a popup shall be shown.
        *****************************************************************************/
        public static showPopup() : void
        {
            ninjas.Debug.site.log( "Site.showPopup() being invoked" );

            if ( Site.examplePopup == null )
            {
                Site.createPopup();
                document.body.appendChild( Site.examplePopup );
            }

            Site.examplePopup.className = "animated bounceInLeft";
        }

        /*****************************************************************************
        *   Being invoked when a popup shall be hidden.
        *****************************************************************************/
        public static hidePopup() : void
        {
            ninjas.Debug.site.log( "Site.hidePopup() being invoked" );

            // document.body.removeChild( Site.examplePopup )

            Site.examplePopup.className = "animated bounceOutLeft";
        }

        /*****************************************************************************
        *   Creates the site popup.
        *****************************************************************************/
        private static createPopup() : void
        {
            Site.examplePopup = document.createElement( "div" );

            Site.examplePopup.style.width  = ( ninjas.Main.game.canvasWidth  / 2 - ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            Site.examplePopup.style.height = ( ninjas.Main.game.canvasHeight - 2 * ninjas.Setting.SITE_BORDER_SIZE ) + "px";

            Site.examplePopup.style.backgroundColor = ninjas.Setting.SITE_POPUP_BG_COLOR;

            Site.examplePopup.style.position = "absolute";
            Site.examplePopup.style.top  = ninjas.Setting.SITE_BORDER_SIZE + "px";
            Site.examplePopup.style.left = ninjas.Setting.SITE_BORDER_SIZE + "px";
        }
    }
