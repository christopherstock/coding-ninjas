
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
                { ninjas.SiteContentFactory.createParagraph( "See our timeline of this project evolution:" ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }

                <antd.Timeline>
                    <antd.Timeline.Item color="green">
                        Create a services site 2015-09-01
                    </antd.Timeline.Item>
                    <antd.Timeline.Item color="green">
                        Create a services site 2015-09-01
                    </antd.Timeline.Item>
                    <antd.Timeline.Item color="red">
                        <p>Solve initial network problems 1</p>
                        <p>Solve initial network problems 2</p>
                        <p>Solve initial network problems 3 2015-09-01</p>
                    </antd.Timeline.Item>
                    <antd.Timeline.Item color="#1890ff">
                        <p>Technical testing 1</p>
                        <p>Technical testing 2</p>
                        <p>Technical testing 3 2015-09-01</p>
                    </antd.Timeline.Item>
                </antd.Timeline>

            </div>
        }
    }
