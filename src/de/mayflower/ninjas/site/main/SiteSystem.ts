
    require( "animate.css" );

    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Manages the communication between the game and the company presentation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteSystem
    {
        /** An example site panel. */
        private                 examplePanel                    :HTMLDivElement             = null;

        /** Flags if an animation is currently active. */
        private                 animationInProgress             :boolean                    = null;

        /*****************************************************************************
        *   Being invoked when a site shall be shown.
        *
        *   @return If showing the site succeeded.
        *****************************************************************************/
        public show() : boolean
        {
            ninjas.Debug.site.log( "Site.showPopup() being invoked" );

            if ( this.animationInProgress )
            {
                ninjas.Debug.site.log( "Denied showing site - animation currently running" );
                return false;
            }
            this.animationInProgress = true;

            this.create();
            document.body.appendChild( this.examplePanel );

            ninjas.Main.game.wowSystem.sync();

            window.setTimeout(
                () => {

                    this.animationInProgress = false;
                },
                1000
            );

            return true;
        }

        /*****************************************************************************
        *   Being invoked when a site shall be hidden.
        *
        *   @return If hiding the site succeeded.
        *****************************************************************************/
        public hide() : boolean
        {
            ninjas.Debug.site.log( "Site.hidePopup() being invoked" );

            if ( this.animationInProgress )
            {
                ninjas.Debug.site.log( "Denied hiding site - animation currently running" );
                return false;
            }
            this.animationInProgress = true;

            this.examplePanel.className = "wow bounceOutLeft";
            ninjas.Main.game.wowSystem.sync();

            window.setTimeout(
                () => {
                    this.examplePanel.remove();
                    this.examplePanel = null;

                    this.animationInProgress = false;
                },
                750
            );

            return true;
        }

        /*****************************************************************************
        *   Creates the site.
        *****************************************************************************/
        private create() : void
        {
            // panel
            this.examplePanel = document.createElement( "div" );

            this.examplePanel.style.width  = ( ninjas.Main.game.canvasWidth  / 2 - ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            this.examplePanel.style.height = ( ninjas.Main.game.canvasHeight - 2 * ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            this.examplePanel.style.backgroundColor = ninjas.Setting.SITE_POPUP_BG_COLOR;

            this.examplePanel.style.position = "absolute";
            this.examplePanel.style.top  = ninjas.Setting.SITE_BORDER_SIZE + "px";
            this.examplePanel.style.left = ninjas.Setting.SITE_BORDER_SIZE + "px";

            this.examplePanel.setAttribute( "data-wow-duration", "1.0s" );
            this.examplePanel.setAttribute( "data-wow-delay",    "0.0s" );
            this.examplePanel.className = "wow bounceInLeft";


            // div relative 1
            let exampleDiv:HTMLDivElement = document.createElement( "div" );

            exampleDiv.style.width  = ( ninjas.Main.game.canvasWidth  / 2 - 3 * ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            // exampleDiv.style.height = ( ninjas.Main.game.canvasHeight - 4 * ninjas.Setting.SITE_BORDER_SIZE ) + "px";
            exampleDiv.style.backgroundColor = "#c7d9f5";

            exampleDiv.style.position = "relative";
            exampleDiv.style.top  = ninjas.Setting.SITE_BORDER_SIZE + "px";
            exampleDiv.style.left = ninjas.Setting.SITE_BORDER_SIZE + "px";

            exampleDiv.setAttribute( "data-wow-duration", "0.5s" );
            exampleDiv.setAttribute( "data-wow-delay",    "1.0s" );
            exampleDiv.className = "wow fadeIn";

            this.examplePanel.appendChild( exampleDiv );


            // example text
            let exampleText:HTMLParagraphElement = document.createElement( "p" );

            exampleText.innerText = "Bavaria ipsum dolor sit amet Schaung kost nix Xaver, Almrausch. Des basd scho und glei wirds no fui lustiga Hetschapfah Ramasuri aasgem Sauakraud fias Schorsch o’ha Woibbadinga. Sauakraud schaugn i vo de! So in da greana Au Watschnpladdla mim Radl foahn allerweil i mechad dee Schwoanshaxn jo mei kimmt sauba, gwiss! Wurschtsolod jo leck mi vui und. Nix Gwiass woass ma ned Blosmusi bittschön, oans, zwoa, gsuffa hod gelbe Rüam gscheit: Mim Radl foahn Gaudi no a Maß Schmankal, Spuiratz? Wia pfiad de Zwedschgndadschi Brodzeid i Weißwiaschd gwihss hallelujah sog i, luja Auffisteign, geh aba. Do legst di nieda des is a gmahde Wiesn ned oba Ledahosn Charivari allerweil i umma greaßt eich nachad, Ohrwaschl. Boarischer ja, wo samma denn gar nia need gwiss hogg di hera a bissal da i daad is des liab. Am acht’n Tag schuf Gott des Bia Schdeckalfisch Bladl geh da.";

            // don't do that!
            // exampleText.style.width  = "100%";

            exampleText.style.padding = "20px";
            exampleText.style.margin = "0";

            exampleDiv.appendChild( exampleText );
        }
    }
