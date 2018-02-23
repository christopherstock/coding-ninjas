
    import * as ninjas   from '../ninjas';
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';

    /*******************************************************************************************************************
    *   Specifies all existing site contents.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum SiteContent
    {
        /** The 'welcome' page. */
        CONTENT_WELCOME,
        /** The 'company' page. */
        CONTENT_COMPANY,
        /** The 'philosophy' page. */
        CONTENT_PHILOSOPHY,
    }

    /*******************************************************************************************************************
    *   Manages all site contents for the site panel.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteContentSystem
    {
        /** The site content for the 'welcome' page. */
        private                 contentWelcome              :JSX.Element            = null;
        /** The site content for the 'company' page. */
        private                 contentCompany              :JSX.Element            = null;
        /** The site content for the 'philosophy' page. */
        private                 contentPhilosophy           :JSX.Element            = null;

        /***************************************************************************************************************
        *   Inits all site contents.
        ***************************************************************************************************************/
        public initAllContents() : void
        {
            this.contentWelcome    = <ninjas.ContentWelcome    />;
            this.contentCompany    = <ninjas.ContentCompany    />;
            this.contentPhilosophy = <ninjas.ContentPhilosophy />;
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

                case SiteContent.CONTENT_PHILOSOPHY:
                {
                    elementToMount = this.contentPhilosophy;
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