
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Ask Lenz: Add file loader via npm.
    *   TODO Ask Lenz: Debug value from outside.
    *
    *   TODO requestAnimationFrame tryout .. matter.js - try 60 fps as a constant.
    *   TODO Add jest tests.
    *   TODO Add cucumber tests.
    *
    *   TODO Add destroyable movables.
    *   TODO Add 'katana strike' action on ground and in air.
    *   TODO Particle fx smashed crates, startup window etc.
    *   TODO Add decoration particle effects on smashing objects / windows etc.
    *   TODO Add Camera joyride on level startup?
    *   TODO Add items and item sprites.
    *   TODO increase player jump speed?
    *   TODO Sound effects for ninja girl and enemies?
    *   TODO Add 'slide' action.
    *   TODO Create HUD ( for items etc ).
    *   TODO create class HUD with own paint-method.
    *   TODO Create item pickup HUD effect!
    *   TODO Add event triggers ( for fallinf obstacles etc )
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Main
    {
        /** The singleton instance of the game engine. */
        public      static          game                    :ninjas.Game                    = null;

        /***************************************************************************************************************
        *   This method is invoked when the application starts.
        ***************************************************************************************************************/
        public static main() : void
        {
            // set webpage title
            document.title = ninjas.SettingGame.TITLE;

            // acclaim debug console
            ninjas.Debug.preloader.log( ninjas.SettingGame.TITLE );
            ninjas.Debug.preloader.log();

            //init and start the game engine
            Main.game = new ninjas.Game();
            Main.game.preload();
        }
    }
