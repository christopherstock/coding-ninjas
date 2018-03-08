
    import * as ninjas   from '../ninjas';
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';

    /*******************************************************************************************************************
    *   Specifies all existing site contents.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum SiteContent
    {
        /** The 'welcome' page. */
        CONTENT_WELCOME,
        /** The 'company' page. */
        CONTENT_COMPANY,
        /** The 'services' page. */
        CONTENT_SERVICES,
        /** The 'technology' page. */
        CONTENT_TECHNOLOGY,
        /** The 'timeline' page. */
        CONTENT_TIMELINE,
        /** The 'contact' page. */
        CONTENT_CONTACT,
    }

    /*******************************************************************************************************************
    *   Manages all site contents for the site panel.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class SiteContentSystem
    {
        /** All already discovered contents. */
        public                  discoveredContents          :Array<ninjas.SiteContent>      = [];

        /** The site content for the 'welcome' page. */
        private                 contentWelcome              :JSX.Element                    = null;
        /** The site content for the 'company' page. */
        private                 contentCompany              :JSX.Element                    = null;
        /** The site content for the 'services' page. */
        private                 contentServices             :JSX.Element                    = null;
        /** The site content for the 'technology' page. */
        private                 contentTechnology           :JSX.Element                    = null;
        /** The site content for the 'timeline' page. */
        private                 contentTimeline             :JSX.Element                    = null;
        /** The site content for the 'contact' page. */
        private                 contentContact              :JSX.Element                    = null;

        /***************************************************************************************************************
        *   Inits all site contents.
        ***************************************************************************************************************/
        public initAllContents() : void
        {
            this.contentWelcome    = <ninjas.ContentWelcome    />;
            this.contentCompany    = <ninjas.ContentCompany    />;
            this.contentServices   = <ninjas.ContentServices   />;
            this.contentTechnology = <ninjas.ContentTechnology />;
            this.contentTimeline   = <ninjas.ContentTimeline   />;
            this.contentContact    = <ninjas.ContentContact    />;
        }

        /***************************************************************************************************************
        *   Mounts the specified content to the specified container.
        *
        *   @param content   The site content to mount.
        *   @param container The container to mount the content to.
        ***************************************************************************************************************/
        public mountContent( content:SiteContent, container:HTMLDivElement ) : void
        {
            // unmount existent component if any
            ReactDOM.unmountComponentAtNode(
                container
            );

            // add to discovered contents if not already discovered
            if ( this.discoveredContents.indexOf( content ) == -1 )
            {
                this.discoveredContents.push( content );
            }

            // pick new content to mount
            let elementToMount:JSX.Element = null;
            switch ( content )
            {
                case SiteContent.CONTENT_WELCOME:
                {
                    elementToMount = this.contentWelcome;
                    break;
                }

                case SiteContent.CONTENT_COMPANY:
                {
                    elementToMount = this.contentCompany;
                    break;
                }
                case SiteContent.CONTENT_SERVICES:
                {
                    elementToMount = this.contentServices;
                    break;
                }

                case SiteContent.CONTENT_TECHNOLOGY:
                {
                    elementToMount = this.contentTechnology;
                    break;
                }

                case SiteContent.CONTENT_TIMELINE:
                {
                    elementToMount = this.contentTimeline;
                    break;
                }

                case SiteContent.CONTENT_CONTACT:
                {
                    elementToMount = this.contentContact;
                    break;
                }
            }

            // mount content to DOM node
            ReactDOM.render(
                elementToMount,
                container
            );
        }
    }
