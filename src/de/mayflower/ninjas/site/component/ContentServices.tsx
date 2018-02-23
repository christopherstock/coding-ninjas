
    import * as ninjas from '../../ninjas';
    import * as antd   from 'antd';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'services' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ContentServices extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentServices.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( 3 ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createImage( ninjas.SettingEngine.PATH_IMAGE_SITE + "logo.png" ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }
                { ninjas.SiteContentFactory.createHeadline( "Our Services" ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }
                { ninjas.SiteContentFactory.createParagraph( "Our services are ..." ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }


                <antd.Tabs defaultActiveKey="3">
                    <antd.Tabs.TabPane tab={<span><antd.Icon type="apple" />Tab 1</span>} key="1">
                    Tab 1
                    </antd.Tabs.TabPane>
                    <antd.Tabs.TabPane tab={<span><antd.Icon type="android" />Tab 2</span>} key="2">
                    Tab 2
                    </antd.Tabs.TabPane>
                    <antd.Tabs.TabPane tab={<span><antd.Icon type="github" />Tab 3</span>} key="3">
                    Tab 3
                    </antd.Tabs.TabPane>
                </antd.Tabs>



                <antd.Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    style={ { backgroundColor: '#ff6666', float: "none", } }
                />
                <br />
                <antd.Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    style={ { backgroundColor: '#ff6666', float: "none", } }
                />
                <br />
                <antd.Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    style={ { backgroundColor: '#ff6666', float: "none", } }
                />
                <br />
                <antd.Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    style={ { backgroundColor: '#ff6666', float: "none", } }
                />
                <br />
                <br />



                <antd.Badge count={25} />
                <br />
                <antd.Badge count={4}   style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
                <br />
                <antd.Badge count={109} style={{ backgroundColor: '#52c41a' }} />



            </div>
        }
    }
