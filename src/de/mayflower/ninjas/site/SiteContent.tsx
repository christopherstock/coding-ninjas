
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


            let logo:HTMLDivElement       = ninjas.SiteContentFactory.createImage( ninjas.SettingEngine.PATH_IMAGE_SITE + "logo.png" );
            let text:HTMLParagraphElement = ninjas.SiteContentFactory.createParagraph( "Bavaria ipsum dolor sit amet Schaung kost nix Xaver, Almrausch. Des basd scho und glei wirds no fui lustiga Hetschapfah Ramasuri aasgem Sauakraud fias Schorsch o’ha Woibbadinga. Sauakraud schaugn i vo de! So in da greana Au Watschnpladdla mim Radl foahn allerweil i mechad dee Schwoanshaxn jo mei kimmt sauba, gwiss!<br><br>Wurschtsolod jo leck mi vui und." );
            let text2:HTMLParagraphElement = ninjas.SiteContentFactory.createParagraph( "Test Paragraph 2" );

            container.appendChild( logo );
            container.appendChild( text );
            container.appendChild( text2 );
        }
    }
