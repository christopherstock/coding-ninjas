
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
        /** The current site panel. TODO wrap to class Site !!! */
        private                 currentPanel                    :HTMLDivElement             = null;

        /** Flags if an animation is currently active. */
        private                 animationInProgress             :boolean                    = null;

        /*****************************************************************************
        *   Being invoked when a site shall be shown.
        *
        *   @return If showing the site succeeded.
        *****************************************************************************/
        public show() : boolean
        {
            ninjas.Debug.site.log( "Showing site panel" );

            if ( this.animationInProgress )
            {
                ninjas.Debug.site.log( "Animation currently running - canceling show" );
                return false;
            }
            this.animationInProgress = true;

            this.currentPanel = ninjas.SiteContent.createExampleContent();
            document.body.appendChild( this.currentPanel );
            this.updatePanelSize();

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
            ninjas.Debug.site.log( "Hiding site panel" );

            if ( this.animationInProgress )
            {
                ninjas.Debug.site.log( "Animation currently running - canceling hide" );
                return false;
            }
            this.animationInProgress = true;

            this.currentPanel.className = "wow bounceOutLeft";
            ninjas.Main.game.wowSystem.sync();

            window.setTimeout(
                () => {
                    this.currentPanel.remove();
                    this.currentPanel = null;

                    this.animationInProgress = false;
                },
                750
            );

            return true;
        }

        /*****************************************************************************
        *   Being invoked when the panel size should be set according to the current canvas size.
        *****************************************************************************/
        public updatePanelSize()
        {
            if ( this.currentPanel != null )
            {
                let newPanelWidth:number = ( ninjas.Main.game.canvasWidth  / 2 - ninjas.Setting.SITE_BORDER_SIZE );

                if ( newPanelWidth > ninjas.Setting.SITE_PANEL_MAX_WIDTH )
                {
                    newPanelWidth = ninjas.Setting.SITE_PANEL_MAX_WIDTH;
                }

                this.currentPanel.style.width  = newPanelWidth + "px";
                this.currentPanel.style.height = ( ninjas.Main.game.canvasHeight - 2 * ninjas.Setting.SITE_BORDER_SIZE ) + "px";

                // TODO to own reference in class Site! remove id!
                let siteContainer:HTMLDivElement = document.getElementById( "siteContainer" ) as HTMLDivElement;
                siteContainer.style.width  = ( newPanelWidth - 2 * ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            }
        }
    }
