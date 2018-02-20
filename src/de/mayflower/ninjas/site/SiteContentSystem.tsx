
    import * as ninjas   from '../ninjas';
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';

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

        /***************************************************************************************************************
        *   Inits all site contents.
        ***************************************************************************************************************/
        public initAllContents() : void
        {
            this.contentWelcome = <ninjas.ContentWelcome />;
            this.contentCompany = <ninjas.ContentCompany />;
        }

        /***************************************************************************************************************
        *   Appends a content to the specified container.
        *
        *   @param container The container to append the content to.
        ***************************************************************************************************************/
        public appendExampleContent( container:HTMLDivElement ) : void
        {
            ReactDOM.render(
                this.contentWelcome,
                container
            );
        }
    }
