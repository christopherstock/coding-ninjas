
    import * as ninjas from '../../ninjas';
    const wow = require( 'wowjs' );

    /*******************************************************************************************************************
    *   Specifies the current site panel animation state.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum SitePanelAnimation
    {
        /** Currently idle. */
        NONE,
        /** Currently showing. */
        SHOW,
        /** Currently hiding. */
        HIDE,
    }

    /*******************************************************************************************************************
    *   Manages the communication between the game and the company presentation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteSystem
    {
        /** The active site panel. */
        private             activePanel                     :ninjas.SitePanel               = null;
        /** The current animation of the site panel. */
        private             animationState                  :ninjas.SitePanelAnimation      = ninjas.SitePanelAnimation.NONE;

        /** The current width of the panel. */
        private             panelWidth                      :number                         = 0;
        /** The current width of the panel including border size. */
        private             panelAndBorderWidth             :number                         = 0;

        /** The left camera target X if the border is shown right. */
        private             leftCameraTargetX               :number                         = 0;
        /** The right camera target X if the border is shown left. */
        private             rightCameraTargetX              :number                         = 0;

        /** The WOW animation system. */
        private             wowSystem                       :any                            = null;

        /***************************************************************************************************************
        *   Creates a new site system.
        ***************************************************************************************************************/
        public constructor()
        {
            this.updatePanelSizeAndPosition();
            this.initWowSystem();
        }

        /***************************************************************************************************************
        *   Being invoked when a site shall be shown.
        *
        *   @return If showing the site succeeded.
        ***************************************************************************************************************/
        public show( position:ninjas.SitePanelPosition ) : boolean
        {
            if ( this.activePanel != null || this.animationState != ninjas.SitePanelAnimation.NONE )
            {
                return false;
            }

            ninjas.Debug.site.log( "Showing site panel" );
            this.animationState = ninjas.SitePanelAnimation.SHOW;

            this.activePanel = new ninjas.SitePanel( position );
            this.activePanel.addToDom();
            this.activePanel.animateIn();
            this.updatePanelSizeAndPosition();
            this.wowSystem.sync();

            window.setTimeout(
                () => {

                    this.animationState = ninjas.SitePanelAnimation.NONE;
                },
                ninjas.SettingGame.SITE_PANEL_ANIMATION_DURATION
            );

            return true;
        }

        /***************************************************************************************************************
        *   Being invoked when a site shall be hidden.
        *
        *   @return If hiding the site succeeded.
        ***************************************************************************************************************/
        public hide() : boolean
        {
            if ( this.activePanel == null || this.animationState != ninjas.SitePanelAnimation.NONE )
            {
                return false;
            }

            ninjas.Debug.site.log( "Hiding site panel" );
            this.animationState = ninjas.SitePanelAnimation.HIDE;

            this.activePanel.animateOut();
            this.wowSystem.sync();

            window.setTimeout(
                () => {
                    this.activePanel.removeFromDom();
                    this.activePanel = null;

                    this.animationState = ninjas.SitePanelAnimation.NONE;
                },
                ( ninjas.SettingGame.SITE_PANEL_ANIMATION_DURATION / 2 )
            );

            return true;
        }

        /***************************************************************************************************************
        *   Being invoked when the panel size should be set according to the current canvas size.
        ***************************************************************************************************************/
        public updatePanelSizeAndPosition()
        {
            // calculate panel size
            this.panelWidth = ( ninjas.Main.game.engine.canvasSystem.getWidth() / 2 - ninjas.SettingGame.BORDER_SIZE );
            if ( this.panelWidth > ninjas.SettingGame.SITE_PANEL_MAX_WIDTH )
            {
                this.panelWidth = ninjas.SettingGame.SITE_PANEL_MAX_WIDTH;
            }

            // calculate panel size including border and left and right position
            this.panelAndBorderWidth = this.panelWidth + ninjas.SettingGame.BORDER_SIZE;
            this.leftCameraTargetX   = ( this.panelAndBorderWidth + ( ( ninjas.Main.game.engine.canvasSystem.getWidth() - this.panelAndBorderWidth ) / 2 ) );
            this.rightCameraTargetX  = ( ( ninjas.Main.game.engine.canvasSystem.getWidth() - this.panelAndBorderWidth ) / 2 );

            // update panel size and position
            if ( this.activePanel != null )
            {
                this.activePanel.updateSizeAndPosition
                (
                    this.panelWidth,
                    ( ninjas.Main.game.engine.canvasSystem.getHeight() - 2 * ninjas.SettingGame.BORDER_SIZE )
                );
            }
        }

        /***************************************************************************************************************
        *   Determines if a site panel is currently active.
        *
        *   @return <code>true</code> if a site panel is currently active.
        ***************************************************************************************************************/
        public getCameraTargetX() : number
        {
            if ( this.activePanel == null || this.animationState == ninjas.SitePanelAnimation.HIDE )
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
            }

            switch ( this.activePanel.getPosition() )
            {
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
