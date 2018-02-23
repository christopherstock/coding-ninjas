
    import * as ninjas from '../../ninjas';
    import * as antd   from 'antd';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'references' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ContentReferences extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentReferences.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( 4 ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createImage( ninjas.SettingEngine.PATH_IMAGE_SITE + "logo.png" ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createHeadline( "Primal References" ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }
                { ninjas.SiteContentFactory.createParagraph( "Our references are ..." ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }



            </div>
        }
    }
