
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
                { ninjas.SiteContentFactory.createHeadline( "Welcome to Coding Ninjas!", true, true ) }
                { ninjas.SiteContentFactory.createParagraph( "Bavaria ipsum dolor sit amet Schaung kost nix Xaver, Almrausch. Des basd scho und glei wirds no fui lustiga Hetschapfah Ramasuri aasgem Sauakraud fias Schorsch o’ha Woibbadinga. Sauakraud schaugn i vo de! So in da greana Au Watschnpladdla mim Radl foahn allerweil i mechad dee Schwoanshaxn jo mei kimmt sauba, gwiss! Wurschtsolod jo leck mi vui und." ) }
                { ninjas.SiteContentFactory.createParagraph( "O’ha ghupft wia gsprunga gelbe Rüam, wolln. Ledahosn Auffisteign af no sog i Radi i bin a woschechta Bayer. Fensdaln hogg ma uns zamm kimmt, oamoi damischa: Buam Obazda guad gfreit mi fias Weibaleid großherzig Griasnoggalsubbm Vergeltsgott, sei. Gschicht sauba Lewakaas oa! Hinter’m Berg san a no Leit Bradwurschtsemmal mei do Wiesn Maßkruag. Oba i hob di narrisch gean Xaver Steckerleis a bravs Wiesn unbandig gelbe Rüam wos zünftig. Aba nimma aba allerweil amoi! Hemad heid Oachkatzlschwoaf obandeln resch. Biazelt aasgem eana, singd sog i hob i an Suri weida Biazelt scheans? Boarischer fias luja Gamsbart dahoam Kneedl blärrd hogg di hera nix Gwiass woass ma ned scheans. Hendl amoi Musi is des liab, Greichats." ) }
                { ninjas.SiteContentFactory.createDivider() }

                <antd.Switch
                    checkedChildren={   <antd.Icon type="notification" /> }
                    unCheckedChildren={ <antd.Icon type="poweroff" /> }
                    defaultChecked={ true }
                    onChange={ ( checked:boolean ) => { console.log( "Toggle to checked [" + checked + "]" ); } }
                />

                { ninjas.SiteContentFactory.createDivider() }

                <antd.Tooltip
                    placement="leftBottom"
                    title="Generate and download a new key pair."
                >
                    <antd.Button
                        type="primary"
                        className="backend"
                        icon="key"
                        loading={ false }
                        onClick={ () => { alert( "Button clicked!" ); } }
                    >
                        Generate new RSA 2048 bit key pair
                    </antd.Button>
                </antd.Tooltip>

                { ninjas.SiteContentFactory.createDivider() }

            </div>
        }
    }
