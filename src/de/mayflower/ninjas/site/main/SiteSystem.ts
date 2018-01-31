
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
        /** The current site panel. */
        private                 currentPanel                    :HTMLDivElement             = null;

        /** Flags if an animation is currently active. */
        private                 animationInProgress             :boolean                    = null;

        /** Flags if a panel is currently shown. */
        private                 panelPosition                   :ninjas.SitePanelPosition   = ninjas.SitePanelPosition.GONE;

        /*****************************************************************************
        *   Being invoked when a site shall be shown.
        *
        *   @return If showing the site succeeded.
        *****************************************************************************/
        public show( position:ninjas.SitePanelPosition ) : boolean
        {
            ninjas.Debug.site.log( "Showing site panel" );

            if ( this.animationInProgress )
            {
                ninjas.Debug.site.log( "Animation currently running - canceling show" );
                return false;
            }
            this.animationInProgress = true;
            this.panelPosition       = position;

            this.currentPanel = ninjas.SiteContent.createExampleContent();

            if ( this.panelPosition == ninjas.SitePanelPosition.LEFT )
            {
                this.currentPanel.className = "wow bounceInLeft";
            }
            else
            {
                this.currentPanel.className = "wow bounceInRight";
            }

            document.body.appendChild( this.currentPanel );
            this.updatePanelSizeAndPosition();

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

            if ( this.panelPosition == ninjas.SitePanelPosition.LEFT )
            {
                this.currentPanel.className = "wow bounceOutLeft";
            }
            else
            {
                this.currentPanel.className = "wow bounceOutRight";
            }

            ninjas.Main.game.wowSystem.sync();

            window.setTimeout(
                () => {
                    this.currentPanel.remove();
                    this.currentPanel = null;

                    this.animationInProgress = false;
                    this.panelPosition       = ninjas.SitePanelPosition.GONE;
                },
                750
            );

            return true;
        }

        /*****************************************************************************
        *   Being invoked when the panel size should be set according to the current canvas size.
        *****************************************************************************/
        public updatePanelSizeAndPosition()
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

                if ( this.panelPosition == ninjas.SitePanelPosition.LEFT )
                {
                    this.currentPanel.style.left = ninjas.Setting.SITE_BORDER_SIZE + "px";
                }
                else
                {
                    this.currentPanel.style.left = ( ninjas.Main.game.canvasWidth - newPanelWidth - ninjas.Setting.SITE_BORDER_SIZE ) + "px";
                }

                // TODO to own reference in class Site! remove id!
                let siteContainer:HTMLDivElement = document.getElementById( "siteContainer" ) as HTMLDivElement;
                siteContainer.style.width  = ( newPanelWidth - 2 * ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            }
        }

        /*****************************************************************************
        *   Determines if a site panel is currently active.
        *
        *   @return <code>true</code> if a site panel is currently active.
        *****************************************************************************/
        public getFixedCameraTargetX() : number
        {
            switch ( this.panelPosition )
            {
                case ninjas.SitePanelPosition.GONE:
                {
                    return -1;
                }

                case ninjas.SitePanelPosition.LEFT:
                {
                    return ( ninjas.Main.game.canvasWidth  * 0.75 );
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    return ( ninjas.Main.game.canvasWidth  * 0.25 );
                }
            }
        }
    }
