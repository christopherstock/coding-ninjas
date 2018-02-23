
    import * as React from 'react';
    import * as antd  from 'antd';

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
            return <p className="sitePanel defaultParagraph">
                { text }
            </p>;
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
        *   Creates a vertical spacer of the default margin height.
        *
        *   @return The created JSX element.
        ***************************************************************************************************************/
        public static createVerticalSpacer() : JSX.Element
        {
            return <div className="sitePanel verticalSpacer" />;
        }
    }
