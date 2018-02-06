
    require( "animate.css" );

    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents a site panel that shows a site content.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SitePanel
    {
        /** The current site panel. */
        public                  outerAbsoluteContainer          :HTMLDivElement             = null;

        /** The current site panel. */
        public                  innerRelativeContainer          :HTMLDivElement             = null;

        /*****************************************************************************
        *   Creates a new site panel.
        *****************************************************************************/
        public constructor()
        {
            // create containers
            this.createOuterAbsoluteContainer();
            this.createInnerRelativeContainer();

            // add content
            ninjas.SiteContent.appendExampleContent( this.innerRelativeContainer );

            // add inner to outer container
            this.outerAbsoluteContainer.appendChild( this.innerRelativeContainer );
        }

        /*****************************************************************************
        *   Creates the outer container with absolute position.
        *****************************************************************************/
        private createOuterAbsoluteContainer()
        {
            this.outerAbsoluteContainer = document.createElement( "div" );

            this.outerAbsoluteContainer.style.backgroundColor = ninjas.SettingGame.SITE_PANEL_BG_COLOR;
            this.outerAbsoluteContainer.style.position        = "absolute";
            this.outerAbsoluteContainer.style.top             = ninjas.SettingGame.SITE_BORDER_SIZE + "px";

            this.outerAbsoluteContainer.setAttribute( "data-wow-duration", ninjas.SettingGame.SITE_PANEL_SHOW_HIDE_DURATION + "ms" );
            this.outerAbsoluteContainer.setAttribute( "data-wow-delay",    "0ms" );
        }

        /*****************************************************************************
        *   Creates the inner container with relative position.
        *****************************************************************************/
        private createInnerRelativeContainer()
        {
            this.innerRelativeContainer = document.createElement( "div" );

            this.innerRelativeContainer.style.backgroundColor = "#c7d9f5";

            this.innerRelativeContainer.style.position = "relative";
            this.innerRelativeContainer.style.top  = ninjas.SettingGame.SITE_BORDER_SIZE + "px";
            this.innerRelativeContainer.style.left = ninjas.SettingGame.SITE_BORDER_SIZE + "px";

            this.innerRelativeContainer.setAttribute( "data-wow-duration", ninjas.SettingGame.SITE_PANEL_CONTENT_FADE_IN_DURATION + "ms" );
            this.innerRelativeContainer.setAttribute( "data-wow-delay",    ninjas.SettingGame.SITE_PANEL_SHOW_HIDE_DURATION + "ms" );
            this.innerRelativeContainer.className = "wow fadeIn";

            this.innerRelativeContainer.id = "siteContainer";
        }
    }
