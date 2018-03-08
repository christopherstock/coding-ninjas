
    import * as ninjas from '../../ninjas';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'contact' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0.0
    *******************************************************************************************************************/
    export class ContentContact extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentContact.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( ninjas.SiteContent.CONTENT_CONTACT ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createHeadline( "Contact Us!" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }

                <div className="card-flip-container">
                    <div className="card-flipper">
                        <div className="card-front" style={ { backgroundImage: "url( " + ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_OFFICE_WZBG ).src + " )", } }>
                            <h3>Würzburg</h3>
                        </div>
                        <div className="card-back">
                            Mayflower GmbH Würzburg<br />
                            Gneisenaustr. 10|11<br />
                            97074 Würzburg<br />
                            <br />
                            Tel: 0931 35965-1177<br />
                            Fax: 0931 35965-28<br />
                            E-Mail: <a target="_blank" href="mailto:kontakt@mayflower.de">kontakt@mayflower.de</a>
                        </div>
                    </div>
                </div>

                { ninjas.SiteContentFactory.createSpacerVertical() }

                <div className="card-flip-container">
                    <div className="card-flipper">
                        <div className="card-front" style={ { backgroundImage: "url( " + ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_OFFICE_MUC ).src + " )", } }>
                            <h3>Munich</h3>
                        </div>
                        <div className="card-back">
                            Mayflower GmbH Munich<br />
                            Mannhardtstr. 6<br />
                            80538 München<br />
                            <br />
                            Tel: 089 242054-1177<br />
                            Fax: 089 242054-29<br />
                            E-Mail: <a target="_blank" href="mailto:kontakt@mayflower.de">kontakt@mayflower.de</a>
                        </div>
                    </div>
                </div>

                { ninjas.SiteContentFactory.createSpacerVertical() }

                <div className="card-flip-container">
                    <div className="card-flipper">
                        <div className="card-front" style={ { backgroundImage: "url( " + ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_OFFICE_BER ).src + " )", } }>
                            <h3>Berlin</h3>
                        </div>
                        <div className="card-back">
                            Mayflower GmbH Berlin<br />
                            Ritterstr. 2a<br />
                            10969 Berlin<br />
                            <br />
                            Tel: 030 22470326<br />
                            E-Mail: <a target="_blank" href="mailto:berlin@mayflower.de">berlin@mayflower.de</a>
                        </div>
                    </div>
                </div>

            </div>
        }
    }
