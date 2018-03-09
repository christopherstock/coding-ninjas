
    import * as ninjas from '../../ninjas';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'welcome' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0.0
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

                { ninjas.SiteContentFactory.createStepIndicator( ninjas.SiteContent.CONTENT_WELCOME ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createImageFullWidth( ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_LOGO ).src ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }

                <a target="_blank" title="Würzburg Web Week" href="https://wueww.de/">
                    { ninjas.SiteContentFactory.createImageFloating( "right", ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_LOGO_WEBWEEK ).src ) }
                </a>

                {
                    ninjas.SiteContentFactory.createParagraph
                    (
                        "This site serves as an example Node.js project for the "
                        + "<a target=\"_blank\" title=\"Developer Camp 2018\" href=\"https://developercamp.io/\">Developer Camp 2018</a> "
                        + "in the context of the <a target=\"_blank\" title=\"Würzburg Web Week\" href=\"https://wueww.de/\">Würzburg Web Week 2018.</a><br>"
                    )
                }
                { ninjas.SiteContentFactory.createDivider() }

                <a target="_blank" title="Coding Ninjas on GitHub" href="https://github.com/christopherstock/coding-ninjas">
                    { ninjas.SiteContentFactory.createAvatar( "", "github" ) }
                </a>
                {
                    ninjas.SiteContentFactory.createParagraph
                    (
                        "Find the source on <a target=\"_blank\" title=\"Coding Ninjas on GitHub\" href=\"https://github.com/christopherstock/coding-ninjas\">GitHub</a>",
                        "sitePanel defaultParagraph avatarLine"
                    )
                }
                { ninjas.SiteContentFactory.createDivider() }
                {
                    ninjas.SiteContentFactory.createParagraph
                    (
                        "Use the <span style=\"color: #ff6666;\">arrow keys</span> to move and jump around.<br>"
                        + "Use the <span style=\"color: #ff6666;\">space bar</span> to open your parachute while in air.<br>"
                        + "The user interfaces can be operated using <span style=\"color: #ff6666;\">your mouse</span>.<br>"
                        + "Can you find all <span style=\"color: #ff6666;\">six shrines?</span>.<br>"
                    )
                }
                { ninjas.SiteContentFactory.createDivider() }
                {
                    ninjas.SiteContentFactory.createSwitch
                    (
                        "notification",
                        "poweroff",
                        !ninjas.IO.isMac(),
                        ( checked:boolean ) => {

                            ninjas.Debug.sound.log( "Toggle bg music to [" + checked + "]" );

                            ninjas.Main.game.toggleBgMusic( checked );
                        }
                    )
                }
                { ninjas.SiteContentFactory.createParagraph( "Toggle background music" ) }

                { /* ninjas.SiteContentFactory.createDivider()                                   */ }
                { /* ninjas.SiteContentFactory.createParagraph( "Current project progress is:" ) */ }
                { /* ninjas.SiteContentFactory.createSpacerVertical()                            */ }
                { /* ninjas.SiteContentFactory.createProgress( "circle", 100.0 )                 */ }

            </div>
        }
    }
