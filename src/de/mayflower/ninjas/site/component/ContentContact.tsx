
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
                            Mayflower Würzburg
                        </div>
                    </div>
                </div>

                { ninjas.SiteContentFactory.createSpacerVertical() }

                <div className="card-flip-container">
                    <div className="card-flipper">
                        <div className="card-front">
                            Würzburg
                        </div>
                        <div className="card-back">
                            Mayflower Würzburg
                        </div>
                    </div>
                </div>

                { ninjas.SiteContentFactory.createSpacerVertical() }

                <div className="card-flip-container">
                    <div className="card-flipper">
                        <div className="card-front">
                            Würzburg
                        </div>
                        <div className="card-back">
                            Mayflower Würzburg
                        </div>
                    </div>
                </div>

            </div>
        }
    }
