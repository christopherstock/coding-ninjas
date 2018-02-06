
    require( "animate.css" );

    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   Represents a site panel that shows a site content.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SitePanel
    {
        /** The outer container div. */
        private                 outerAbsoluteContainer          :HTMLDivElement             = null;
        /** The inner container div. */
        private                 innerRelativeContainer          :HTMLDivElement             = null;

        /** The position for this panel to show up. */
        private                 position                        :ninjas.SitePanelPosition   = null;

        /*****************************************************************************
        *   Creates a new site panel on the specified position.
        *
        *   @param position The position for this panel to show up.
        *****************************************************************************/
        public constructor( position:ninjas.SitePanelPosition )
        {
            this.position = position;

            // create containers
            this.createOuterAbsoluteContainer();
            this.createInnerRelativeContainer();

            // add content
            ninjas.SiteContent.appendExampleContent( this.innerRelativeContainer );

            // add inner to outer container
            this.outerAbsoluteContainer.appendChild( this.innerRelativeContainer );
        }

        /*****************************************************************************
        *   Appends the outer container to the DOM.
        *****************************************************************************/
        public addToDom() : void
        {
            document.body.appendChild( this.outerAbsoluteContainer );
        }

        /*****************************************************************************
        *   Removed the outer container from the DOM.
        *****************************************************************************/
        public removeFromDom() : void
        {
            this.outerAbsoluteContainer.remove();
        }

        /*****************************************************************************
        *   Updates the position and the location of this site panel.
        *
        *   @param width         New width.
        *   @param height        New height.
        *   @param panelPosition Current panel position.
        *****************************************************************************/
        public updateBounds( width:number, height:number, panelPosition:ninjas.SitePanelPosition ) : void
        {
            this.outerAbsoluteContainer.style.width  = width  + "px";
            this.outerAbsoluteContainer.style.height = height + "px";

            switch ( panelPosition )
            {
                case ninjas.SitePanelPosition.LEFT:
                {
                    this.outerAbsoluteContainer.style.left = ninjas.SettingGame.SITE_BORDER_SIZE + "px";
                    break;
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    this.outerAbsoluteContainer.style.left = ( ninjas.Main.game.engine.canvasSystem.getWidth() - width - ninjas.SettingGame.SITE_BORDER_SIZE ) + "px";
                    break;
                }
            }

            this.innerRelativeContainer.style.width  = ( width - 2 * ninjas.SettingGame.SITE_BORDER_SIZE ) + "px";
        }

        /*****************************************************************************
        *   Creates the outer container with absolute position.
        *****************************************************************************/
        private createOuterAbsoluteContainer() : void
        {
            this.outerAbsoluteContainer = document.createElement( "div" );

            this.outerAbsoluteContainer.style.backgroundColor = ninjas.SettingGame.SITE_PANEL_BG_COLOR;
            this.outerAbsoluteContainer.style.position        = "absolute";
            this.outerAbsoluteContainer.style.top             = ninjas.SettingGame.SITE_BORDER_SIZE + "px";

            this.outerAbsoluteContainer.setAttribute( "data-wow-duration", ninjas.SettingGame.SITE_PANEL_SHOW_HIDE_DURATION + "ms" );
            this.outerAbsoluteContainer.setAttribute( "data-wow-delay",    "0ms" );

            this.animateIn();
        }

        /*****************************************************************************
        *   Sets WOW classes for animating the panel in.
        *****************************************************************************/
        private animateIn() : void
        {
            // set animation class
            switch ( this.position )
            {
                case ninjas.SitePanelPosition.LEFT:
                {
                    this.outerAbsoluteContainer.className = "wow bounceInLeft";
                    break;
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    this.outerAbsoluteContainer.className = "wow bounceInRight";
                    break;
                }
            }
        }

        /*****************************************************************************
        *   Sets WOW classes for animating the panel out.
        *****************************************************************************/
        public animateOut() : void
        {
            // set animation class
            switch ( this.position )
            {
                case ninjas.SitePanelPosition.LEFT:
                {
                    this.outerAbsoluteContainer.className = "wow bounceOutLeft";
                    break;
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    this.outerAbsoluteContainer.className = "wow bounceOutRight";
                    break;
                }
            }
        }

        /*****************************************************************************
        *   Creates the inner container with relative position.
        *****************************************************************************/
        private createInnerRelativeContainer() : void
        {
            this.innerRelativeContainer = document.createElement( "div" );

            this.innerRelativeContainer.style.backgroundColor = "#c7d9f5";

            this.innerRelativeContainer.style.position = "relative";
            this.innerRelativeContainer.style.top  = ninjas.SettingGame.SITE_BORDER_SIZE + "px";
            this.innerRelativeContainer.style.left = ninjas.SettingGame.SITE_BORDER_SIZE + "px";

            this.innerRelativeContainer.setAttribute( "data-wow-duration", ninjas.SettingGame.SITE_PANEL_CONTENT_FADE_IN_DURATION + "ms" );
            this.innerRelativeContainer.setAttribute( "data-wow-delay",    ninjas.SettingGame.SITE_PANEL_SHOW_HIDE_DURATION + "ms" );
            // this.innerRelativeContainer.className = "wow fadeIn";

            this.innerRelativeContainer.id = "siteContainer";
        }
    }
