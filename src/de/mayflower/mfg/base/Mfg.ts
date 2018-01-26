
    import * as mfg from '../mfg';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO extract lib
    *   TODO rename to 'ninjas'. Remove Mfg prefixes.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Mfg
    {
        /** The singleton instance of the game engine. */
        public      static          game                    :mfg.MfgGame                    = null;

        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            // acclaim debug console and set title
            mfg.MfgDebug.init.log( mfg.MfgSettings.TITLE );
            document.title = mfg.MfgSettings.TITLE;

            //init and start the game engine
            this.game = new mfg.MfgGame();
            this.game.init();
            this.game.start();
        }
    }
