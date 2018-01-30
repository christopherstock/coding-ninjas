
    require( "animate.css" );

    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Manages the communication between the game and the company presentation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteContent
    {
        /*****************************************************************************
        *   Creates an example content panel.
        *
        *   @return A content panel with example content.
        *****************************************************************************/
        public static createExampleContent() : HTMLDivElement
        {
            // panel
            let ret:HTMLDivElement = document.createElement( "div" );

            ret.style.backgroundColor = ninjas.Setting.SITE_PANEL_BG_COLOR;
            ret.style.position = "absolute";
            ret.style.top  = ninjas.Setting.SITE_BORDER_SIZE + "px";
            ret.style.left = ninjas.Setting.SITE_BORDER_SIZE + "px";

            ret.setAttribute( "data-wow-duration", "1.0s" );
            ret.setAttribute( "data-wow-delay",    "0.0s" );
            ret.className = "wow bounceInLeft";


            // relative container div
            let relativeContainerDiv:HTMLDivElement = document.createElement( "div" );

            relativeContainerDiv.style.backgroundColor = "#c7d9f5";

            relativeContainerDiv.style.position = "relative";
            relativeContainerDiv.style.top  = ninjas.Setting.SITE_BORDER_SIZE + "px";
            relativeContainerDiv.style.left = ninjas.Setting.SITE_BORDER_SIZE + "px";

            relativeContainerDiv.setAttribute( "data-wow-duration", "0.5s" );
            relativeContainerDiv.setAttribute( "data-wow-delay",    "1.0s" );
            relativeContainerDiv.className = "wow fadeIn";

            relativeContainerDiv.id = "siteContainer";


            // example text
            let exampleText:HTMLParagraphElement = document.createElement( "p" );
            exampleText.innerText = "Bavaria ipsum dolor sit amet Schaung kost nix Xaver, Almrausch. Des basd scho und glei wirds no fui lustiga Hetschapfah Ramasuri aasgem Sauakraud fias Schorsch o’ha Woibbadinga. Sauakraud schaugn i vo de! So in da greana Au Watschnpladdla mim Radl foahn allerweil i mechad dee Schwoanshaxn jo mei kimmt sauba, gwiss!<br><br>Wurschtsolod jo leck mi vui und. Nix Gwiass woass ma ned Blosmusi bittschön, oans, zwoa, gsuffa hod gelbe Rüam gscheit: Mim Radl foahn Gaudi no a Maß Schmankal, Spuiratz? Wia pfiad de Zwedschgndadschi Brodzeid i Weißwiaschd gwihss hallelujah sog i, luja Auffisteign, geh aba. Do legst di nieda des is a gmahde Wiesn ned oba Ledahosn Charivari allerweil i umma greaßt eich nachad, Ohrwaschl. Boarischer ja, wo samma denn gar nia need gwiss hogg di hera a bissal da i daad is des liab. Am acht’n Tag schuf Gott des Bia Schdeckalfisch Bladl geh da.";
            exampleText.style.width  = "parent";
            exampleText.style.padding = "20px";
            exampleText.style.margin = "0";


            // example block
            let exampleBlock:HTMLDivElement = document.createElement( "div" );

            exampleBlock.style.width  = "parent";
            exampleBlock.style.padding = "20px";
            exampleBlock.style.margin = "0";
            exampleBlock.style.background = "#fffc9e";


            // example image
            let exampleImage:HTMLImageElement = document.createElement( "img" );
            exampleImage.src = ninjas.Setting.PATH_IMAGE_SITE + "logo.png";
            exampleImage.style.width = "100%";
            exampleImage.style.height = "auto";


            // append to DOM
            exampleBlock.appendChild( exampleImage );
            relativeContainerDiv.appendChild( exampleBlock );
            relativeContainerDiv.appendChild( exampleText );
            ret.appendChild( relativeContainerDiv );

            return ret;
        }
    }
