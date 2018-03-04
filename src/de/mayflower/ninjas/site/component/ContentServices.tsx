
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

                { ninjas.SiteContentFactory.createStepIndicator( 2 ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createHeadline( "Our Services" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                {
                    ninjas.SiteContentFactory.createParagraph
                    (
                        "We offer our services for the following platforms. Please click on one of the tabs to read more about our skills and experiences:"
                    )
                }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                {
                    ninjas.SiteContentFactory.createTabbedPane
                    (
                        0,
                        [
                            <span>{ ninjas.SiteContentFactory.createIcon( "desktop" ) } Enterprise</span>,
                            <span>{ ninjas.SiteContentFactory.createIcon( "cloud"   ) } Web</span>,
                            <span>{ ninjas.SiteContentFactory.createIcon( "mobile"  ) } Mobile</span>,
                        ],
                        [
                            <div>
                                <h3>Desktop &amp; Enterprise Development</h3>

/*
Originally started as a purely Java development company over 16 years ago, today "Coding Ninjas" maintains the traditions of desktop software development while nurturing experience in the web and mobile application development areas.
We offer platform-specific and cross-platform desktop app development services to help you turn a solid software idea into a market sensation, as well as couple your manufactured devices and equipment with complementary software to gain customer loyalty and outdo competitors.
*/

                                { ninjas.SiteContentFactory.createParagraph( "We offer high quality enterprise and desktop application development." ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }

                                { ninjas.SiteContentFactory.createBadge( 25, "white", "#52c41a", ) }
                                { ninjas.SiteContentFactory.createParagraph( "Java Desktop applications." ) }







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
