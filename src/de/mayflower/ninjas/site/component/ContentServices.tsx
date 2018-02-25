
    import * as ninjas from '../../ninjas';
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
                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createHeadline( "Our Services" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createParagraph( "Our services are ..." ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                {
                    ninjas.SiteContentFactory.createTabbedPane
                    (
                        0,
                        [
                            <span>{ ninjas.SiteContentFactory.createIcon( "apple"   ) } Tab 1</span>,
                            <span>{ ninjas.SiteContentFactory.createIcon( "android" ) } Tab 2</span>,
                            <span>{ ninjas.SiteContentFactory.createIcon( "github"  ) } Tab 3</span>
                        ],
                        [
                            <div>
                                Tab 1

                                <br />
                                <br />

                                { ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" ) }
                                { ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" ) }
                                { ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" ) }
                                { ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" ) }
                                { ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" ) }

                            </div>,
                            <div>
                                Tab 2

                                <br />
                                <br />
                                { ninjas.SiteContentFactory.createBadge( 25, "white", "red",     ) }
                                <br />
                                <br />
                                { ninjas.SiteContentFactory.createBadge( 4,  "#999",  "#ffffff", ) }
                                <br />
                                <br />
                                { ninjas.SiteContentFactory.createBadge( 25, "white", "#52c41a", ) }

                            </div>,
                            <div>
                                Tab 3
                            </div>,
                        ]
                    )
                }

            </div>
        }
    }
