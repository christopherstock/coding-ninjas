
    require( "animate.css" );

    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Contains all possible positions for the site panel.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum SitePanelPosition
    {
        LEFT,
        RIGHT,
    }

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

        /***************************************************************************************************************
        *   Creates a new site panel on the specified position.
        *
        *   @param position The position for this panel to show up.
        ***************************************************************************************************************/
        public constructor( position:ninjas.SitePanelPosition )
        {
            this.position = position;

            this.createOuterAbsoluteContainer();
            this.createInnerRelativeContainer();

            // add inner to outer container
            this.outerAbsoluteContainer.appendChild( this.innerRelativeContainer );

            // add content to inner container
            ninjas.SiteContent.appendExampleContent( this.innerRelativeContainer );
        }

        /***************************************************************************************************************
        *   Appends the outer container to the DOM.
        ***************************************************************************************************************/
        public addToDom() : void
        {
            document.body.appendChild( this.outerAbsoluteContainer );
        }

        /***************************************************************************************************************
        *   Removed the outer container from the DOM.
        ***************************************************************************************************************/
        public removeFromDom() : void
        {
            this.outerAbsoluteContainer.remove();
        }

        /***************************************************************************************************************
        *   Updates the position and the location of this site panel.
        *
        *   @param width  The new panel width.
        *   @param height The new panel height.
        ***************************************************************************************************************/
        public updateSizeAndPosition( width:number, height:number ) : void
        {
            // outer container size
            this.outerAbsoluteContainer.style.width  = width  + "px";
            this.outerAbsoluteContainer.style.height = height + "px";

            // outer container position
            switch ( this.position )
            {
                case ninjas.SitePanelPosition.LEFT:
                {
                    this.outerAbsoluteContainer.style.left = ninjas.SettingGame.BORDER_SIZE + "px";
                    break;
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    this.outerAbsoluteContainer.style.left = ( ninjas.Main.game.engine.canvasSystem.getWidth() - width - ninjas.SettingGame.BORDER_SIZE ) + "px";
                    break;
                }
            }
            this.outerAbsoluteContainer.style.top = ninjas.SettingGame.BORDER_SIZE + "px";

            // inner container size
            this.innerRelativeContainer.style.width  = ( width - 2 * ninjas.SettingGame.BORDER_SIZE ) + "px";

            // inner container position
            this.innerRelativeContainer.style.top  = ninjas.SettingGame.BORDER_SIZE + "px";
            this.innerRelativeContainer.style.left = ninjas.SettingGame.BORDER_SIZE + "px";
        }

        /***************************************************************************************************************
        *   Returns the current panel position.
        *
        *   @return The current position of this panel.
        ***************************************************************************************************************/
        public getPosition() : ninjas.SitePanelPosition
        {
            return this.position;
        }

        /***************************************************************************************************************
        *   Sets WOW classes for animating the panel in.
        ***************************************************************************************************************/
        public animateIn() : void
        {
            // set animation class
            switch ( this.position )
            {
                case ninjas.SitePanelPosition.LEFT:
                {
                    this.outerAbsoluteContainer.className = "sitePanel outerAbsoluteContainer wow bounceInLeft";
                    break;
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    this.outerAbsoluteContainer.className = "sitePanel outerAbsoluteContainer wow bounceInRight";
                    break;
                }
            }
        }

        /***************************************************************************************************************
        *   Sets WOW classes for animating the panel out.
        ***************************************************************************************************************/
        public animateOut() : void
        {
            // set animation class
            switch ( this.position )
            {
                case ninjas.SitePanelPosition.LEFT:
                {
                    this.outerAbsoluteContainer.className = "sitePanel outerAbsoluteContainer wow bounceOutLeft";
                    break;
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    this.outerAbsoluteContainer.className = "sitePanel outerAbsoluteContainer wow bounceOutRight";
                    break;
                }
            }
        }

        /***************************************************************************************************************
        *   Creates the outer container with absolute position.
        ***************************************************************************************************************/
        private createOuterAbsoluteContainer() : void
        {
            this.outerAbsoluteContainer = document.createElement( "div" );

            this.outerAbsoluteContainer.setAttribute( "data-wow-duration", ninjas.SettingGame.SITE_PANEL_ANIMATION_DURATION + "ms" );
            this.outerAbsoluteContainer.setAttribute( "data-wow-delay",    "0ms" );
        }

        /***************************************************************************************************************
        *   Creates the inner container with relative position.
        ***************************************************************************************************************/
        private createInnerRelativeContainer() : void
        {
            this.innerRelativeContainer = document.createElement( "div" );
            this.innerRelativeContainer.className = "sitePanel innerRelativeContainer";

            this.innerRelativeContainer.setAttribute( "data-wow-delay",    ninjas.SettingGame.SITE_PANEL_ANIMATION_DURATION + "ms" );
        }
    }
