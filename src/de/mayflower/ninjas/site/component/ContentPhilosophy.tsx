
    import * as ninjas from '../../ninjas';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'philosophy' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ContentPhilosophy extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentPhilosophy.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( 2 ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createHeadline( "Our Philosophy" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createParagraph( "Our Philosophy is that .." ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                {
                    ninjas.SiteContentFactory.createAccordion
                    (
                        [
                            "Panel header text 1",
                            "Panel header text 2",
                            "Panel header text 3",
                        ],
                        [
                            <div>
                                <p>{ "Glacht Foidweg Schmankal, nia fensdaln Bradwurschtsemmal pfiad de Graudwiggal Gstanzl g’hupft wia gsprunga. Mechad Breihaus mechad mi a bissal wos gehd ollaweil trihöleridi dijidiholleri, helfgod no hob i an Suri sei nimmds. Radler unbandig Servas Sepp Guglhupf in da greana Au, wea ko, dea ko Foidweg des wiad a Mordsgaudi mim is ma Wuascht. Oachkatzlschwoaf sammawiedaguad middn i bin a woschechta Bayer griasd eich midnand, Kaiwe." }</p>
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                <p>{ "Anbandeln Graudwiggal i mog di fei ned hogg di hera i mechad dee Schwoanshaxn Wiesn a bissal, nix Gwiass woass ma ned: Semmlkneedl is des liab oba, kumm geh: Hob sowos kimmt Weibaleid koa! Sog i kumm geh Freibia, an hoid unbandig iabaroi no a Maß: Fensdaln Lewakaas di Hetschapfah Goaßmaß nomoi wia da Buachbinda Wanninger mechad geh. I Klampfn obandln Maderln blärrd, Breihaus Maibam!" }</p>
                                { ninjas.SiteContentFactory.createTag( "magenta", "eye candy magenta" ) }
                                { ninjas.SiteContentFactory.createTag( "red",     "eye candy red"     ) }
                                { ninjas.SiteContentFactory.createTag( "volcano", "eye candy volcano" ) }
                                { ninjas.SiteContentFactory.createTag( "orange",  "eye candy orange"  ) }
                            </div>,
                            <div>
                                <p>{ "Hetschapfah auffi sei, Leonhardifahrt Maderln Gidarn Klampfn Ewig und drei Dog Schuabladdla. Trachtnhuat Stubn oans, zwoa, gsuffa ghupft wia gsprunga in da greana Au, i waar soweid. No a Maß Watschnbaam Buam, Graudwiggal. Nia need Schaung kost nix trihöleridi dijidiholleri scheans wolpern Broadwurschtbudn Radler Gamsbart Marterl boarischer. Nomoi Fünferl fei gelbe Rüam Maderln Spuiratz gwiss auf der Oim, da gibt’s koa Sünd, Vergeltsgott!" }</p>
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                <p>{ "Charivari Brezn Namidog Landla. Maderln kloan Klampfn wia woaß schüds nei auf der Oim, da gibt’s koa Sünd samma, hoam wos dahoam. Griasnoggalsubbm jo leck mi wui Kuaschwanz, oans hob i an Suri a bissal wos gehd ollaweil jo leck mi Fingahaggln zwoa hoam. Bitt fensdaln des spernzaln, is des liab o’ha hea do mim Radl foahn i hab an. Kummd hinter’m Berg san a no Leit da, wos so gscheckate!" }</p>
                                { ninjas.SiteContentFactory.createTag( "gold",  "eye candy gold"  ) }
                                { ninjas.SiteContentFactory.createTag( "lime",  "eye candy lime"  ) }
                                { ninjas.SiteContentFactory.createTag( "green", "eye candy green" ) }
                                { ninjas.SiteContentFactory.createTag( "cyan",  "eye candy cyan"  ) }
                            </div>,
                            <div>
                                <p>{ "Gamsbart mi i hab an, kumm geh? Nix Gwiass woass ma ned jo mei is des schee a bissal wos gehd ollaweil obandln Breihaus Fünferl, no oamoi Weibaleid. Graudwiggal de hoggd Brodzeid barfuaßat gscheckate Bladl sodala obacht hod! Mim Radl foahn wea nia ausgähd, kummt nia hoam Milli großherzig Zwedschgndadschi, nackata scheans. Glacht gwiss boarischer Ohrwaschl af spernzaln Brodzeid Vergeltsgott, Sauwedda no a Maß. Hinter’m Berg san a no Leit Blosmusi hod a pfiad de Wurscht schüds nei?" }</p>
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                <p>{ "I nois oans no a Maß oa dahoam vui huift vui vui huift vui, i i sog ja nix, i red ja bloß? Resch Bussal Broadwurschtbudn Watschnpladdla Musi, hallelujah sog i, luja es mi? Schneid sauba gscheit hawadere midananda, dahoam Biagadn. I bin a woschechta Bayer mehra Watschnbaam Diandldrahn a Prosit der Gmiadlichkeit Milli, Broadwurschtbudn Lewakaas Weiznglasl." }</p>
                                { ninjas.SiteContentFactory.createTag( "blue",     "eye candy blue"     ) }
                                { ninjas.SiteContentFactory.createTag( "geekblue", "eye candy geekblue" ) }
                                { ninjas.SiteContentFactory.createTag( "purple",   "eye candy purple"   ) }
                            </div>,
                        ]
                    )
                }

            </div>
        }
    }
