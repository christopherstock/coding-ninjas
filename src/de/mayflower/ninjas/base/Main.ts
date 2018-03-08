
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Create preloader for game initialization.
    *
    *   TODO new promo badge & OpenGraph promo texts and badges.
    *   TODO Max height for site panel!
    *
    *   TODO Light book bg and black fg.
    *   TODO Let player float into the camera
    *   TODO Fade book from closed to open and vice-versa (via sprite etc.)?
    *   TODO Fixed positioning for camera on first scene (player floating in).
    *   TODO Add card flip effect for tiles: https://desandro.github.io/3dtransforms/docs/card-flip.html
    *   TODO Add decoration particle effects on smashing objects / windows etc.
    *   TODO Add Camera joyride on level startup?
    *
    *   TODO Regenerate TypeDoc.
    *   TODO Try sound error handling! (Safari etc.)
    *   TODO Test in all browsers.
    *   TODO increase player jump speed? (alter frictionAir)
    *   TODO Parallax bg elements
    *   TODO Ditch repository!
    *   TODO Internal @Version number to 1.0.
    *   TODO Complete MVP!
    *
    *   TODO requestAnimationFrame tryout .. matter.js - try 60 fps as a constant.
    *   TODO Sound effects for ninja girl and enemies?
    *   TODO Ability to smash movables. (except crates etc., introduce property 'destroyable')
    *   TODO Ask Lenz: Add file loader via npm.
    *   TODO Try 'grouce' for visualizing git project.
    *   TODO Add 'katana strike' action on ground and in air.
    *   TODO Add 'slide' action.
    *   TODO Add items and item sprites.
    *   TODO Create HUD ( for items 1st ).
    *   TODO create class HUD and assign its non-static method paintHud?
    *   TODO Create item pickup HUD effect!
    *   TODO Particle fx smashed crates, startup window etc.
    *   TODO Add jest tests.
    *   TODO Add event triggers (obstacle falling down on touching trigger etc.)
    *   TODO Add cucumber tests.
    *   TODO Create mobile version .. (minimum panel size and minimum canvas size 400px etc )
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
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
