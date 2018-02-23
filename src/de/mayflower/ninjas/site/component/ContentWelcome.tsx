
    import * as ninjas from '../../ninjas';
    import * as antd   from 'antd';
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
                { ninjas.SiteContentFactory.createVerticalSpacer() }
                { ninjas.SiteContentFactory.createHeadline( "Welcome to Coding Ninjas!" ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }
                { ninjas.SiteContentFactory.createParagraph( "Bavaria ipsum dolor sit amet Schaung kost nix Xaver, Almrausch. Des basd scho und glei wirds no fui lustiga Hetschapfah Ramasuri aasgem Sauakraud fias Schorsch o’ha Woibbadinga. Sauakraud schaugn i vo de! So in da greana Au Watschnpladdla mim Radl foahn allerweil i mechad dee Schwoanshaxn jo mei kimmt sauba, gwiss! Wurschtsolod jo leck mi vui und." ) }
                { ninjas.SiteContentFactory.createDivider() }
                {
                    ninjas.SiteContentFactory.createSwitch
                    (
                        "notification",
                        "poweroff",
                        true,
                        ( checked:boolean ) => { console.log( "Toggle to checked [" + checked + "]" ); }
                    )
                }

                { ninjas.SiteContentFactory.createDivider() }

                <antd.Tooltip
                    placement="leftBottom"
                    title="Trigger a test alert."
                >
                    <antd.Button
                        type="primary"
                        className="backend"
                        icon="play-circle"
                        loading={ false }
                        onClick={ () => { alert( "Button clicked!" ); } }
                    >
                        Trigger a test alert
                    </antd.Button>
                </antd.Tooltip>

                { ninjas.SiteContentFactory.createDivider() }

            </div>
        }
    }
