
    import * as ninjas from '../../ninjas';
    const wow = require( 'wowjs' );
    require( "animate.css" );

    /*******************************************************************************************************************
    *   Contains all possible positions for the site panel.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum SitePanelPosition
    {
        NONE,
        LEFT,
        RIGHT,
    }

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
        private                 panelPosition                   :ninjas.SitePanelPosition   = ninjas.SitePanelPosition.NONE;
        /** The WOW animation system. */
        private                 wowSystem                       :any                        = null;

        /** The current width of the panel. */
        private                 panelWidth                      :number                     = 0;
        /** The current width of the panel including border size. */
        private                 panelAndBorderWidth             :number                     = 0;
        /** The left camera target X if the border is shown right. */
        private                 leftCameraTargetX               :number                     = 0;
        /** The right camera target X if the border is shown left. */
        private                 rightCameraTargetX              :number                     = 0;

        /*****************************************************************************
        *   Creates a new site system.
        *****************************************************************************/
        public constructor()
        {
            this.initWowSystem();
            this.updatePanelSizeAndPosition();
        }

        /*****************************************************************************
        *   Being invoked when a site shall be shown.
        *
        *   @return If showing the site succeeded.
        *****************************************************************************/
        public show( position:ninjas.SitePanelPosition ) : boolean
        {
            ninjas.Debug.site.log( "Showing site panel" );

            if ( this.panelPosition != ninjas.SitePanelPosition.NONE )
            {
                return false;
            }

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

            this.wowSystem.sync();

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

            if ( this.panelPosition == ninjas.SitePanelPosition.NONE )
            {
                return false;
            }

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

            this.panelPosition = ninjas.SitePanelPosition.NONE;

            this.wowSystem.sync();

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
        public updatePanelSizeAndPosition()
        {
            // calculate panel size
            this.panelWidth = ( ninjas.Main.game.engine.canvasSystem.getWidth() / 2 - ninjas.SettingGame.SITE_BORDER_SIZE );
            if ( this.panelWidth > ninjas.SettingGame.SITE_PANEL_MAX_WIDTH )
            {
                this.panelWidth = ninjas.SettingGame.SITE_PANEL_MAX_WIDTH;
            }

            // calculate panel size including border and left and right position
            this.panelAndBorderWidth = this.panelWidth + ninjas.SettingGame.SITE_BORDER_SIZE;
            this.leftCameraTargetX   = ( this.panelAndBorderWidth + ( ( ninjas.Main.game.engine.canvasSystem.getWidth() - this.panelAndBorderWidth ) / 2 ) );
            this.rightCameraTargetX  = ( ( ninjas.Main.game.engine.canvasSystem.getWidth() - this.panelAndBorderWidth ) / 2 );

            // update panel size and position
            if ( this.currentPanel != null )
            {
                this.currentPanel.style.width  = this.panelWidth + "px";
                this.currentPanel.style.height = ( ninjas.Main.game.engine.canvasSystem.getHeight() - 2 * ninjas.SettingGame.SITE_BORDER_SIZE ) + "px";

                if ( this.panelPosition == ninjas.SitePanelPosition.LEFT )
                {
                    this.currentPanel.style.left = ninjas.SettingGame.SITE_BORDER_SIZE + "px";
                }
                else
                {
                    this.currentPanel.style.left = ( ninjas.Main.game.engine.canvasSystem.getWidth() - this.panelWidth - ninjas.SettingGame.SITE_BORDER_SIZE ) + "px";
                }

                let siteContainer:HTMLDivElement = document.getElementById( "siteContainer" ) as HTMLDivElement;
                siteContainer.style.width  = ( this.panelWidth - 2 * ninjas.SettingGame.SITE_BORDER_SIZE ) + "px";
            }
        }

        /*****************************************************************************
        *   Determines if a site panel is currently active.
        *
        *   @return <code>true</code> if a site panel is currently active.
        *****************************************************************************/
        public getCameraTargetX() : number
        {
            switch ( this.panelPosition )
            {
                case ninjas.SitePanelPosition.NONE:
                {
                    switch ( ninjas.Main.game.level.player.lookingDirection )
                    {
                        case ninjas.CharacterLookingDirection.LEFT:
                        {
                            return this.leftCameraTargetX;
                        }

                        case ninjas.CharacterLookingDirection.RIGHT:
                        {
                            return this.rightCameraTargetX;
                        }
                    }

                    throw new Error( "Camera position not determinable though undefined player looking direction!" );
                }

                case ninjas.SitePanelPosition.LEFT:
                {
                    return this.leftCameraTargetX;
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    return this.rightCameraTargetX;
                }
            }
        }

        /***************************************************************************************************************
        *   Inits the WOW animation system.
        ***************************************************************************************************************/
        private initWowSystem() : void
        {
            ninjas.Debug.init.log( "Initing WOW animations" );

            this.wowSystem = new wow.WOW(
                {
                    boxClass:        'wow',              // animated element css class (default is wow)
                    animateClass:    'animated',         // animation css class (default is animated)
                    offset:          0,                  // distance to the element when triggering the animation (default is 0)
                    mobile:          true,               // trigger animations on mobile devices (default is true)
                    scrollContainer: null,               // optional scroll container selector, otherwise use window
                    live:            true,               // act on asynchronously loaded content (default is true)
                    // callback:     function( box ) {}, // the callback is fired every time an animation is started the argument that is passed in is the DOM node being animated
                }
            );
            this.wowSystem.init();
        }
    }
