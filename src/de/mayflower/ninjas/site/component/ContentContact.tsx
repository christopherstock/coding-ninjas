
    import * as ninjas from '../../ninjas';
    import * as React  from 'react';
    import * as antd   from 'antd';

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

                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createParagraph( "Find out offices here.." ) }
                { ninjas.SiteContentFactory.createDivider() }

                {
/*
                    ninjas.SiteContentFactory.createButton
                    (
                        "leftBottom",
                        "Trigger a test alert.",
                        "primary",
                        "play-circle",
                        () => { alert( "Button clicked!" ); },
                        "Trigger a test alert"
                    )

                    ninjas.SiteContentFactory.createParagraph( "This site demonstrates the usage of the following primal packages of the NodeJS framework:" )

                    ninjas.SiteContentFactory.createSpacerVertical()

                    <ul className="sitePanel">
                        <li>
                            TypeScript<br />
                            THE transpiler for mastering extensive JavaScript projects with plenty of own sourcecode.
                        </li>
                        <li>
                            Webpack<br />
                            THE web bundler for extensive JavaScript projects with plenty of external libraries.
                        </li>
                        <li>
                            Matter.js<br />
                            A wonderful and easy-to-use 2d physics rendering engine.
                        </li>
                        <li>
                            Ant Design<br />
                            An enterprise Framework for easy-to-use React UI-components.
                        </li>
                    </ul>

                    <antd.Input
                        type="text"
                        prefix={ <antd.Icon type="user" style={ { color: 'rgba( 0, 0, 0, .25 )' } } /> }
                        placeholder="fucker!"
                        maxLength="37"
                        style={ { width: "200px", } }
                    />

                    ninjas.SiteContentFactory.createParagraph( "We offer high quality enterprise and desktop application development." )
                    ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )
                    ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )
                    ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )
                    ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )
                    ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )

                    ninjas.SiteContentFactory.createButtonGroup
                    (
                        "WBG",
                        [
                            "MUC",
                            "BER",
                            "WBG",
                        ],
                        [
                            "Munich",
                            "Berlin",
                            "Würzburg",
                        ],
                        ( e:React.ChangeEvent<any> ) => { console.log( "Changed value to [" + e.target.value + "]" ); }
                    )
*/
                }

            </div>
        }
    }
