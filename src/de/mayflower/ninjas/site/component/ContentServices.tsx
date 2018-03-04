
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
                            <span>{ ninjas.SiteContentFactory.createIcon( "apple"   ) } iOs</span>,
                            <span>{ ninjas.SiteContentFactory.createIcon( "android" ) } Android</span>,
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
