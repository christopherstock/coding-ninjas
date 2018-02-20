
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
        *   Creates an image container as a JSX element.
        *
        *   @param src The url to the image.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createImage( src:string ) : JSX.Element
        {
            return <div className="sitePanel defaultImageContainer">
                <img
                    className="sitePanel defaultImage"
                    src={ src }
                />
            </div>;
        }

        /***************************************************************************************************************
        *   Creates a site headline.
        *
        *   @param text The text to display in the headline.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createHeadline( text:string ) : JSX.Element
        {
            return <h1 className="sitePanel defaultHeadline">{ text }</h1>;
        }

        /***************************************************************************************************************
        *   Creates a paragraph JSX element.
        *
        *   @param text The text to be contained in the paragraph.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createParagraph( text:string ) : JSX.Element
        {
            return <p className="sitePanel defaultText">{ text }</p>;
        }
    }
