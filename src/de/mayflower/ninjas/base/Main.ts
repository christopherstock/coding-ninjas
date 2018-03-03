
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Mini key tutorial on welcome page and other pages.
    *   TODO Complete all site panel contents.
    *   TODO More rubble to kick around etc. (stone piles ..)
    *   TODO Pre-Render all React components (contents) before showing up?
    *   TODO Create preloader for game initialization.
    *   TODO Links to GitHub, etc. on final content site.
    *   TODO Sound effects for ninja girl and enemies?
    *   TODO Secure player punch back (caused via immediate collision escape!) - disable player collision for x ticks?
    *   TODO requestAnimationFrame tryout .. matter.js - try 60 fps as a constant.
    *   TODO Fade book from closed to open and vice-versa (via sprite etc.)?
    *   TODO Fixed positioning for camera on first scene (player floating in).
    *   TODO Add card flip effect for tiles: https://desandro.github.io/3dtransforms/docs/card-flip.html
    *   TODO Add Camera joyride on level startup?
    *   TODO Regenerate TypeDoc.
    *   TODO Try sound error handling! (Safari etc.)
    *   TODO Add decoration particle effects on smashing objects / windows etc.
    *   TODO Test in all browsers.
    *
    *   TODO Complete MVP!
    *
    *   TODO Ability to smash movables. (except crates etc., introduce property 'destroyable')
    *   TODO Ask Lenz: Add file loader via npm.
    *   TODO Try 'grouce' for visualizing git project.
    *   TODO Add 'katana strike' action on ground and in air.
    *   TODO Parallax Fence in fg - solve parallax machanism for game decos. you must assume that every element has the exact width of the level!! try from middle of the level!
    *   TODO Add 'slide' action.
    *   TODO Add items and item sprites.
    *   TODO Create HUD ( for items 1st ).
    *   TODO create class HUD and assign its non-static method paintHud?
    *   TODO Create item pickup HUD effect!
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
