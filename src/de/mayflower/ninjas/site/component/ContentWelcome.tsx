
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
                { ninjas.SiteContentFactory.createHeadline( "Welcome to Coding Ninjas!" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createParagraph( "This is an example Node.js project for the Node.js workshop on the <a target=\"_blank\" title=\"Developer Camp 2018\" href=\"https://developercamp.io/\">Developer Camp 2018</a> in the context of the <a target=\"_blank\" title=\"Würzburg Web Week\" href=\"https://wueww.de/\">Würzburg Web Week</a> that demonstrates the usage of the following primal packages of the NodeJS framework:" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                {
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
                            An enterprise Framework for easy-to-use UI-components.
                        </li>
                    </ul>
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

            </div>
        }
    }
