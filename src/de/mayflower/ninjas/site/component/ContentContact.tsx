
    import * as ninjas from '../../ninjas';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'contact' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0
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

                { ninjas.SiteContentFactory.createStepIndicator( 5 ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createHeadline( "Contact Us!" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }

                <div className="card-flip-container">
                    <div className="card-flipper">
                        <div className="card-front">
                            Würzburg
                        </div>
                        <div className="card-back">
                            Mayflower GmbH Würzburg<br />
                            Gneisenaustr. 10|11<br />
                            97074 Würzburg<br />
                            <br />
                            Tel: 0931 35965-1177<br />
                            Fax: 0931 35965-28<br />
                            E-Mail: <a target="_blank" href="mailto:wuerzburg@mayflower.de">wuerzburg@mayflower.de</a>
                        </div>
                    </div>
                </div>

                { ninjas.SiteContentFactory.createSpacerVertical() }

                <div className="card-flip-container">
                    <div className="card-flipper">
                        <div className="card-front">
                            Munich
                        </div>
                        <div className="card-back">
                            Mayflower GmbH Munich<br />
                            Mannhardtstr. 6<br />
                            80538 München<br />
                            <br />
                            Tel: 089 242054-1177<br />
                            Fax: 089 242054-29<br />
                            E-Mail: <a target="_blank" href="mailto:munich@mayflower.de">munich@mayflower.de</a>
                        </div>
                    </div>
                </div>

                { ninjas.SiteContentFactory.createSpacerVertical() }

                <div className="card-flip-container">
                    <div className="card-flipper">
                        <div className="card-front">
                            Berlin
                        </div>
                        <div className="card-back">
                            Mayflower GmbH Berlin<br />
                            Ritterstr. 2a<br />
                            10969 Berlin<br />
                            <br />
                            Tel: 030 123-456<br />
                            Fax: 030 123-457<br />
                            E-Mail: <a target="_blank" href="mailto:berlin@mayflower.de">berlin@mayflower.de</a>
                        </div>
                    </div>
                </div>

            </div>
        }
    }
