
    import * as ninjas from '../../ninjas';
    import * as antd   from 'antd';
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
                { ninjas.SiteContentFactory.createImage( ninjas.SettingEngine.PATH_IMAGE_SITE + "logo.png" ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }
                { ninjas.SiteContentFactory.createHeadline( "Our Philosophy" ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }
                { ninjas.SiteContentFactory.createParagraph( "Our Philosophy is that .." ) }
                { ninjas.SiteContentFactory.createVerticalSpacer() }

                <antd.Collapse accordion>
                    <antd.Collapse.Panel header="Panel header text 1" key="1">
                        <p>{ "Glacht Foidweg Schmankal, nia fensdaln Bradwurschtsemmal pfiad de Graudwiggal Gstanzl g’hupft wia gsprunga. Mechad Breihaus mechad mi a bissal wos gehd ollaweil trihöleridi dijidiholleri, helfgod no hob i an Suri sei nimmds. Radler unbandig Servas Sepp Guglhupf in da greana Au, wea ko, dea ko Foidweg des wiad a Mordsgaudi mim is ma Wuascht. Oachkatzlschwoaf sammawiedaguad middn i bin a woschechta Bayer griasd eich midnand, Kaiwe. Anbandeln Graudwiggal i mog di fei ned hogg di hera i mechad dee Schwoanshaxn Wiesn a bissal, nix Gwiass woass ma ned: Semmlkneedl is des liab oba, kumm geh: Hob sowos kimmt Weibaleid koa! Sog i kumm geh Freibia, an hoid unbandig iabaroi no a Maß: Fensdaln Lewakaas di Hetschapfah Goaßmaß nomoi wia da Buachbinda Wanninger mechad geh. I Klampfn obandln Maderln blärrd, Breihaus Maibam!" }</p>
                        <antd.Tag color="magenta">eye candy magenta</antd.Tag>
                        <antd.Tag color="red">eye candy red</antd.Tag>
                        <antd.Tag color="volcano">eye candy volcano</antd.Tag>
                        <antd.Tag color="orange">eye candy orange</antd.Tag>
                    </antd.Collapse.Panel>
                    <antd.Collapse.Panel header="Panel header text 2" key="2">
                        <p>{ "Hetschapfah auffi sei, Leonhardifahrt Maderln Gidarn Klampfn Ewig und drei Dog Schuabladdla. Trachtnhuat Stubn oans, zwoa, gsuffa ghupft wia gsprunga in da greana Au, i waar soweid. No a Maß Watschnbaam Buam, Graudwiggal. Nia need Schaung kost nix trihöleridi dijidiholleri scheans wolpern Broadwurschtbudn Radler Gamsbart Marterl boarischer. Nomoi Fünferl fei gelbe Rüam Maderln Spuiratz gwiss auf der Oim, da gibt’s koa Sünd, Vergeltsgott! Charivari Brezn Namidog Landla. Maderln kloan Klampfn wia woaß schüds nei auf der Oim, da gibt’s koa Sünd samma, hoam wos dahoam. Griasnoggalsubbm jo leck mi wui Kuaschwanz, oans hob i an Suri a bissal wos gehd ollaweil jo leck mi Fingahaggln zwoa hoam. Bitt fensdaln des spernzaln, is des liab o’ha hea do mim Radl foahn i hab an. Kummd hinter’m Berg san a no Leit da, wos so gscheckate!" }</p>
                        <antd.Tag color="gold">eye candy gold</antd.Tag>
                        <antd.Tag color="lime">eye candy lime</antd.Tag>
                        <antd.Tag color="green">eye candy green</antd.Tag>
                        <antd.Tag color="cyan">eye candy cyan</antd.Tag>
                    </antd.Collapse.Panel>
                    <antd.Collapse.Panel header="Panel header text 3" key="3">
                        <p>{ "Gamsbart mi i hab an, kumm geh? Nix Gwiass woass ma ned jo mei is des schee a bissal wos gehd ollaweil obandln Breihaus Fünferl, no oamoi Weibaleid. Graudwiggal de hoggd Brodzeid barfuaßat gscheckate Bladl sodala obacht hod! Mim Radl foahn wea nia ausgähd, kummt nia hoam Milli großherzig Zwedschgndadschi, nackata scheans. Glacht gwiss boarischer Ohrwaschl af spernzaln Brodzeid Vergeltsgott, Sauwedda no a Maß. Hinter’m Berg san a no Leit Blosmusi hod a pfiad de Wurscht schüds nei? I nois oans no a Maß oa dahoam vui huift vui vui huift vui, i i sog ja nix, i red ja bloß? Resch Bussal Broadwurschtbudn Watschnpladdla Musi, hallelujah sog i, luja es mi? Schneid sauba gscheit hawadere midananda, dahoam Biagadn. I bin a woschechta Bayer mehra Watschnbaam Diandldrahn a Prosit der Gmiadlichkeit Milli, Broadwurschtbudn Lewakaas Weiznglasl." }</p>
                        <antd.Tag color="blue">eye candy blue</antd.Tag>
                        <antd.Tag color="geekblue">eye candy geekblue</antd.Tag>
                        <antd.Tag color="purple">eye candy purple</antd.Tag>
                    </antd.Collapse.Panel>
                </antd.Collapse>

            </div>
        }
    }
