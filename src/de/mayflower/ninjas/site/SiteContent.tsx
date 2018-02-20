
    import * as ninjas   from '../ninjas';
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';

    /*******************************************************************************************************************
    *   Specifies the site content for the site panels.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteContent
    {
        /***************************************************************************************************************
        *   Appends example content to the specified container.
        *
        *   @param container The container to append the content to.
        ***************************************************************************************************************/
        public static appendExampleContent( container:HTMLDivElement ) : void
        {
            // pick content component
            let content:JSX.Element = <ninjas.ExampleContent />;

            ReactDOM.render(
                content,
                container
            );
        }
    }
