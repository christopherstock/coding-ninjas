
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Contains all possible positions for the site panel.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum SitePanelPosition
    {
        /** Site panel appearing left. */
        LEFT,
        /** Site panel appearing right. */
        RIGHT,
    }

    /*******************************************************************************************************************
    *   Represents a site panel that shows a site content.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
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
        *   Creates a new site panel.
        ***************************************************************************************************************/
        public constructor()
        {
            this.createOuterAbsoluteContainer();
            this.createInnerRelativeContainer();

            // add inner to outer container
            this.outerAbsoluteContainer.appendChild( this.innerRelativeContainer );
        }

        /***************************************************************************************************************
        *   Sets the position of the panel.
        ***************************************************************************************************************/
        public setPosition( position:ninjas.SitePanelPosition ) : void
        {
            this.position = position;
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

            this.outerAbsoluteContainer.style.backgroundSize  = width  + "px " + height + "px";

            // outer container position
            switch ( this.position )
            {
                case ninjas.SitePanelPosition.LEFT:
                {
                    this.outerAbsoluteContainer.style.left = ninjas.SettingGame.BORDER_SIZE_OUTER + "px";
                    break;
                }

                case ninjas.SitePanelPosition.RIGHT:
                {
                    this.outerAbsoluteContainer.style.left = ( ninjas.Main.game.engine.canvasSystem.getWidth() - width - ninjas.SettingGame.BORDER_SIZE_OUTER ) + "px";
                    break;
                }
            }
            this.outerAbsoluteContainer.style.top = ( ( ninjas.Main.game.engine.canvasSystem.getHeight() - height ) / 2 ) + "px";

            // inner container size
            this.innerRelativeContainer.style.width  = ( width - 2 * ninjas.SettingGame.BORDER_SIZE_INNER ) + "px";

            // inner container position
            this.innerRelativeContainer.style.top  = ninjas.SettingGame.BORDER_SIZE_INNER_TOP + "px";
            this.innerRelativeContainer.style.left = ninjas.SettingGame.BORDER_SIZE_INNER     + "px";
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
        *   Returns the container to remove and add various contents.
        *
        *   @return The inner relative container div.
        ***************************************************************************************************************/
        public getMountPoint() : HTMLDivElement
        {
            return this.innerRelativeContainer;
        }

        /***************************************************************************************************************
        *   Creates the outer container with absolute position.
        ***************************************************************************************************************/
        private createOuterAbsoluteContainer() : void
        {
            this.outerAbsoluteContainer = document.createElement( "div" );

            this.outerAbsoluteContainer.style.backgroundImage = (
                "url( "
                + ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_PANEL_BG ).src
                + ")"
            );

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
