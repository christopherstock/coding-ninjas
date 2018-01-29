
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
        /** An example site content. */
        private     static              exampleContent                  :HTMLDivElement             = null;

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
            // popup
            Site.examplePopup = document.createElement( "div" );

            Site.examplePopup.style.width  = ( ninjas.Main.game.canvasWidth  / 2 - ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            Site.examplePopup.style.height = ( ninjas.Main.game.canvasHeight - 2 * ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            Site.examplePopup.style.backgroundColor = ninjas.Setting.SITE_POPUP_BG_COLOR;

            Site.examplePopup.style.position = "absolute";
            Site.examplePopup.style.top  = ninjas.Setting.SITE_BORDER_SIZE + "px";
            Site.examplePopup.style.left = ninjas.Setting.SITE_BORDER_SIZE + "px";





            // content
            Site.exampleContent = document.createElement( "div" );

            Site.exampleContent.style.width  = "200px";
            Site.exampleContent.style.height = "100px";
            Site.exampleContent.style.backgroundColor = "#c7d9f5";
            Site.exampleContent.style.zIndex = "1000";

            Site.exampleContent.style.position = "absolute";
            Site.exampleContent.style.top  = "20px";
            Site.exampleContent.style.left = "20px";

            Site.exampleContent.style.margin = "20px 0 0 20px";

            Site.exampleContent.className = "wow bounceInRight";

            Site.exampleContent.setAttribute( "data-wow-duration", "2s" );
            Site.exampleContent.setAttribute( "data-wow-delay", "2s" );

            document.body.appendChild( Site.exampleContent );

            ninjas.Main.game.wowSystem.sync();
        }
    }
