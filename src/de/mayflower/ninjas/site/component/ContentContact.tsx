
    import * as ninjas from '../../ninjas';
    import * as antd   from 'antd';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'contact' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ContentContact extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentContact.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( 5 ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createImage( ninjas.SettingEngine.PATH_IMAGE_SITE + "logo.png" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createHeadline( "Contact Us!" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createParagraph( "You find our offices at ..." ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }

                <antd.Radio.Group
                    onChange={ ( e:React.ChangeEvent<any> ) => { console.log( "Changed value to [" + e.target.value + "]" ); } }
                    defaultValue="a"
                >
                    <antd.Radio.Button value="a">Munich</antd.Radio.Button>
                    <antd.Radio.Button value="b">Berlin</antd.Radio.Button>
                    <antd.Radio.Button value="c">Würzburg</antd.Radio.Button>
                </antd.Radio.Group>

                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createParagraph( "Use our contact form to ..." ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }




            </div>
        }
    }
