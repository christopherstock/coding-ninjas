
    import * as React from 'react';

    /*******************************************************************************************************************
    *   Creates content components for the factory.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteContentFactory
    {
        /***************************************************************************************************************
        *   Creates a paragraph JSX element.
        *
        *   @param text The text to be contained in the paragraph.
        ***************************************************************************************************************/
        public static createParagraph( text:string ) : JSX.Element
        {
            return <p className="sitePanel defaultText">{ text }</p>;
        }

        /***************************************************************************************************************
        *   Creates an image container.
        *
        *   @param src The url to the image.
        ***************************************************************************************************************/
        public static createImage( src:string ) : HTMLDivElement
        {
            let imageContainer:HTMLDivElement = document.createElement( "div" );
            imageContainer.className="sitePanel imageContainer";

            let image:HTMLImageElement = document.createElement( "img" );
            image.className="sitePanel defaultImage";
            image.src = src;

            imageContainer.appendChild( image );

            return imageContainer;
        }
    }
