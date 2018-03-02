
    import * as ninjas   from '../../ninjas';
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';

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
                        "We <span style=\"color: #ff6666;\">&#x2764;</span> programming! And particularly we love to create.."
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
                            <div className="carouselPage">
                                <h3>Web Applications</h3>
                            </div>,
                            <div className="carouselPage">
                                <h3>Websites</h3>
                            </div>,
                            <div className="carouselPage">
                                <h3>Desktop Applications</h3>
                            </div>,
                            <div className="carouselPage">
                                <h3>Mobile Applications</h3>
                            </div>,
                        ]
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

            </div>
        }
    }
