
    import * as ninjas from '../../ninjas';
    import * as antd   from 'antd';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'company' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ContentCompany extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentCompany.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( 1 ) }

                <antd.Divider />

                { ninjas.SiteContentFactory.createImage( ninjas.SettingEngine.PATH_IMAGE_SITE + "logo.png" ) }

                <antd.Divider />

                { ninjas.SiteContentFactory.createHeadline( "Our Company" ) }

                { ninjas.SiteContentFactory.createParagraph( "Our company is ..." ) }

            </div>
        }
    }
