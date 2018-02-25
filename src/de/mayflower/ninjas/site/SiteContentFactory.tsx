
    import * as React           from 'react';
    import * as antd            from 'antd';
    import { TooltipPlacement } from "antd/lib/tooltip";
    import { ButtonType       } from "antd/lib/button";
    import { CarouselEffect   } from "antd/lib/carousel";

    /*******************************************************************************************************************
    *   Creates content components for the factory.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteContentFactory
    {
        /***************************************************************************************************************
        *   Creates a step indicator.
        *
        *   @param index The index of the currently active step, zero based.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createStepIndicator( index:number ) : JSX.Element
        {
            return <antd.Steps size="small" current={ index } status="process">
                <antd.Steps.Step title="" description="" />
                <antd.Steps.Step title="" description="" />
                <antd.Steps.Step title="" description="" />
                <antd.Steps.Step title="" description="" />
                <antd.Steps.Step title="" description="" />
                <antd.Steps.Step title="" description="" />
            </antd.Steps>;
        }

        /***************************************************************************************************************
        *   Creates a divider.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createDivider() : JSX.Element
        {
            return <antd.Divider />;
        }

        /***************************************************************************************************************
        *   Creates a vertical spacer of the default distance.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createSpacerVertical() : JSX.Element
        {
            return <div className="sitePanel verticalSpacer" />;
        }

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
        *   @param text         The text to display in the headline.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createHeadline( text:string ) : JSX.Element
        {
            let className:string = "sitePanel defaultHeadline";

            return <h1 className={ className }>
                { text }
            </h1>;
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
            return <p className="sitePanel defaultParagraph" dangerouslySetInnerHTML={ { __html: text, } }>
            </p>;
        }

        /***************************************************************************************************************
        *   Creates a progress bar.
        *
        *   @param type    The type of progress bar to create.
        *   @param percent The current progress value in percent.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createProgress( type:any, percent:number ) : JSX.Element
        {
            return <antd.Progress type={ type } percent={ percent } />;
        }

        /***************************************************************************************************************
        *   Creates a tag.
        *
        *   @param color The color to use for this tag.
        *   @param text  The label text for this tag.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createTag( color:string, text:string ) : JSX.Element
        {
            return <antd.Tag color={ color }>{ text }</antd.Tag>;
        }

        /***************************************************************************************************************
        *   Creates a toggle switch.
        *
        *   @param iconOn         The icon for the 'on'  state.
        *   @param iconOff        The icon for the 'off' state.
        *   @param defaultChecked Flags if the switch shall initially be checked.
        *   @param onChange       The callback being invoked when the switch is changed.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createSwitch
        (
            iconOn         :string,
            iconOff        :string,
            defaultChecked :boolean,
            onChange       :( checked:boolean ) => void
        )
        : JSX.Element
        {
            return <antd.Switch
                checkedChildren={   <antd.Icon type={ iconOn  } /> }
                unCheckedChildren={ <antd.Icon type={ iconOff } /> }
                defaultChecked={    defaultChecked                 }
                onChange={          onChange                       }
            />;
        }

        /***************************************************************************************************************
        *   Creates a button.
        *
        *   @param tooltipPlacement The cardinal point for the tooltip to showup.
        *   @param toolTipTitle     The title for the tooltip.
        *   @param buttonType       The type of button.
        *   @param icon             The icon to use for this button.
        *   @param onClick          The callback being invoked when the button is clicked.
        *   @param caption          The caption for the button.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createButton
        (
            tooltipPlacement :TooltipPlacement,
            toolTipTitle     :string,
            buttonType       :ButtonType,
            icon             :string,
            onClick          :any,
            caption          :string
        )
        : JSX.Element
        {
            return <antd.Tooltip placement={ tooltipPlacement } title={ toolTipTitle }>
                <antd.Button
                    type={    buttonType }
                    icon={    icon }
                    loading={ false }
                    onClick={ onClick }
                >
                    { caption }
                </antd.Button>
            </antd.Tooltip>;
        }

        /***************************************************************************************************************
        *   Creates a carousel.
        *
        *   @param effect        The effect for the next carousel page to showup.
        *   @param autoplay      Specifies if the carousel should automatically change pages.
        *   @param autoplaySpeed The delay speed for automatic page changes.
        *   @param pages         All pages to show up in the carousel.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createCarousel
        (
            effect        :CarouselEffect,
            autoplay      :boolean,
            autoplaySpeed :number,
            pages         :Array<JSX.Element>,
        )
        : JSX.Element
        {
            let contents:Array<JSX.Element> = [];

            for ( let key:number = 0; key < pages.length; ++key )
            {
                contents.push( <div key={ key }>{ pages[ key ] }</div> );
            }

            return <antd.Carousel effect={ effect } autoplay={ true } autoplaySpeed={ 3000 } >
                { contents }
            </antd.Carousel>;
        }

        /***************************************************************************************************************
        *   Creates an accordion.
        *
        *   @param headers All headers for all contents.
        *   @param pages   All contents.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createAccordion
        (
            headers :Array<string>,
            pages   :Array<JSX.Element>,
        )
        : JSX.Element
        {
            let contents:Array<JSX.Element> = [];

            for ( let key:number = 0; key < pages.length; ++key )
            {
                contents.push
                (
                    <antd.Collapse.Panel header={ headers[ key ] } key={ String( key ) }>
                        { pages[ key ] }
                    </antd.Collapse.Panel>
                );
            }

            return <antd.Collapse accordion>
                { contents }
            </antd.Collapse>;
        }
    }
