
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Complete level deco.
    *   TODO Create flames for candles.
    *   TODO Create preloader for game initialization.
    *   TODO Restyle site panels according to book.
    *   TODO Mini key tutorial on welcome page.
    *   TODO Complete all site panel contents.
    *   TODO Preload site images via image system ( or assign images via JavaScript?? ).
    *   TODO requestAnimationFrame tryout .. matter.js - try 60 fps as a constant.
    *   TODO Fade book from closed to open and vice-versa (via sprite etc.)?
    *   TODO Parallax Fence in fg - solve parallax machanism for game decos. you must assume that every element has the exact width of the level!! try from middle of the level!
    *   TODO Fixed positioning for camera on first scene (player floating in).
    *   TODO Regenerate TypeDoc.
    *   TODO Add Camera joyride on level startup?
    *   TODO Try sound error handling! (Safari etc.)
    *   TODO Add decoration particle effects on smashing objects / windows etc.
    *   TODO Add card flip effect for tiles: https://desandro.github.io/3dtransforms/docs/card-flip.html
    *   TODO Test in all browsers.
    *
    *   TODO Complete MVP!
    *
    *   TODO Add 'katana strike' action on ground and in air.
    *   TODO Add 'slide' action.
    *   TODO Add items and item sprites.
    *   TODO Create HUD ( for items 1st ).
    *   TODO create class HUD and assign its non-static method paintHud?
    *   TODO Create item pickup HUD effect!
    *   TODO Ability to smash crates or destroyables etc.
    *   TODO Particle fx smashed crates, startup window etc.
    *   TODO Add jest tests.
    *   TODO Add event triggers (obstacle falling down on touching trigger etc.)
    *   TODO Add cucumber tests.
    *   TODO Credits with top npm packages, staff, colaborators, best tools, free 2d art, primal web references etc,
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
            ninjas.Debug.init.log( ninjas.SettingGame.TITLE );
            ninjas.Debug.init.log();

            //init and start the game engine
            Main.game = new ninjas.Game();
            Main.game.init();
        }
    }
