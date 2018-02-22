
    import * as ninjas from '../../ninjas';
    import * as antd   from 'antd';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'philosophy' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ContentPhilosophy extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentPhilosophy.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( 2 ) }

                <antd.Divider />

                { ninjas.SiteContentFactory.createHeadline( "Our Philosophy" ) }






            </div>
        }
    }
