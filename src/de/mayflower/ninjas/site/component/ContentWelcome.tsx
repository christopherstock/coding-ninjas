
    import * as ninjas from '../../ninjas';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'welcome' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ContentWelcome extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentWelcome.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( 0 ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createImage( ninjas.SettingEngine.PATH_IMAGE_SITE + "logo.png" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                {
                    ninjas.SiteContentFactory.createParagraph
                    (
                        "<span style=\"color: #ff6666;\">Coding Ninjas</span> is a fictional company. This site serves "
                        + "as an example Node.js project for the "
                        + "<a target=\"_blank\" title=\"Developer Camp 2018\" href=\"https://developercamp.io/\">Developer Camp 2018</a> "
                        + "in the context of the <a target=\"_blank\" title=\"Würzburg Web Week\" href=\"https://wueww.de/\">Würzburg Web Week</a>."
                    )
                }
                { ninjas.SiteContentFactory.createDivider() }
                {
                    ninjas.SiteContentFactory.createSwitch
                    (
                        "notification",
                        "poweroff",
                        true,
                        ( checked:boolean ) => {

                            ninjas.Debug.sound.log( "Toggle bg music to [" + checked + "]" );

                            ninjas.Main.game.toggleBgMusic( checked );
                        }
                    )
                }
                { ninjas.SiteContentFactory.createParagraph( "Toggle background music" ) }
                { ninjas.SiteContentFactory.createDivider() }
                {
                    ninjas.SiteContentFactory.createParagraph
                    (
                        "We <span style=\"color: #ff6666;\">&#x2764;</span> programming! And particularly we love to create:"
                    )
                }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                {
                    ninjas.SiteContentFactory.createCarousel
                    (
                        "fade",
                        true,
                        2500,
                        [
                            <div className="carouselPage" style={ { "backgroundImage": "url( " + ninjas.SettingEngine.PATH_IMAGE_SITE + "carouselDesktop.jpg )", } }>
                                <h3>Desktop Applications</h3>
                            </div>,
                            <div className="carouselPage" style={ { "backgroundImage": "url( " + ninjas.SettingEngine.PATH_IMAGE_SITE + "carouselWebsites.jpg )", } }>
                                <h3>Websites</h3>
                            </div>,
                            <div className="carouselPage" style={ { "backgroundImage": "url( " + ninjas.SettingEngine.PATH_IMAGE_SITE + "carouselMobile.jpg )", } }>
                                <h3>Mobile Applications</h3>
                            </div>,
                            <div className="carouselPage" style={ { "backgroundImage": "url( " + ninjas.SettingEngine.PATH_IMAGE_SITE + "carouselWebApps.jpg )", } }>
                                <h3>Web Applications</h3>
                            </div>,
                        ]
                    )
                }

            </div>
        }
    }
