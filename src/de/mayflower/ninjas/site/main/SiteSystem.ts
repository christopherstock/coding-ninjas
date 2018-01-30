
    require( "animate.css" );

    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Manages the communication between the game and the company presentation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteSystem
    {
        /** An example site panel. */
        private                 examplePanel                    :HTMLDivElement             = null;
        /** An example site content. */
        private                 exampleContent                  :HTMLDivElement             = null;
        /** Flags if an animation is currently active. */
        private                 animationInProgress             :boolean                    = null;

        /*****************************************************************************
        *   Being invoked when a site shall be shown.
        *
        *   @return If showing the site succeeded.
        *****************************************************************************/
        public show() : boolean
        {
            ninjas.Debug.site.log( "Site.showPopup() being invoked" );

            if ( this.animationInProgress )
            {
                ninjas.Debug.site.log( "Denied showing site - animation currently running" );
                return false;
            }
            this.animationInProgress = true;

            if ( this.examplePanel != null )
            {
                this.examplePanel.remove();
                this.examplePanel = null;
            }

            this.create();

            document.body.appendChild( this.examplePanel );

            ninjas.Main.game.wowSystem.sync();

            window.setTimeout(
                () => {

                    this.animationInProgress = false;
                },
                1000
            );

            return true;
        }

        /*****************************************************************************
        *   Being invoked when a site shall be hidden.
        *
        *   @return If hiding the site succeeded.
        *****************************************************************************/
        public hide() : boolean
        {
            ninjas.Debug.site.log( "Site.hidePopup() being invoked" );

            if ( this.animationInProgress )
            {
                ninjas.Debug.site.log( "Denied hiding site - animation currently running" );
                return false;
            }
            this.animationInProgress = true;

            this.examplePanel.className = "wow bounceOutLeft";
            ninjas.Main.game.wowSystem.sync();

            window.setTimeout(
                () => {
                    this.examplePanel.remove();
                    this.examplePanel = null;

                    this.animationInProgress = false;
                },
                1000
            );

            return true;
        }

        /*****************************************************************************
        *   Creates the site.
        *****************************************************************************/
        private create() : void
        {
            // panel
            this.examplePanel = document.createElement( "div" );

            this.examplePanel.style.width  = ( ninjas.Main.game.canvasWidth  / 2 - ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            this.examplePanel.style.height = ( ninjas.Main.game.canvasHeight - 2 * ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            this.examplePanel.style.backgroundColor = ninjas.Setting.SITE_POPUP_BG_COLOR;

            this.examplePanel.style.position = "absolute";
            this.examplePanel.style.top  = ninjas.Setting.SITE_BORDER_SIZE + "px";
            this.examplePanel.style.left = ninjas.Setting.SITE_BORDER_SIZE + "px";

            this.examplePanel.setAttribute( "data-wow-duration", "1.0s" );
            this.examplePanel.setAttribute( "data-wow-delay",    "0.0s" );
            this.examplePanel.className = "wow bounceInLeft";


            // content
            this.exampleContent = document.createElement( "div" );

            this.exampleContent.style.width  = "200px";
            this.exampleContent.style.height = "100px";
            this.exampleContent.style.backgroundColor = "#c7d9f5";
            this.exampleContent.style.zIndex = "1000";

            this.exampleContent.style.position = "absolute";
            this.exampleContent.style.top  = "20px";
            this.exampleContent.style.left = "20px";

            this.exampleContent.style.margin = "20px 0 0 20px";

            this.exampleContent.className = "wow fadeIn";

            this.exampleContent.setAttribute( "data-wow-duration", "0.5s" );
            this.exampleContent.setAttribute( "data-wow-delay",    "1.0s" );

            this.examplePanel.appendChild( this.exampleContent );
        }
    }
