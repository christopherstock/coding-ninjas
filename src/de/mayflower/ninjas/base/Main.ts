
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Create sprite for elevated solid ramps.
    *   TODO Create decoration with circular body. (for non-static decos)
    *   TODO Add react for site content creation.
    *   TODO Step-Flow-Meter (progress, navi etc.) in React.
    *   TODO Try ant design (pro?) in front panel.
    *
    *   TODO Complete the MVP!
    *
    *   TODO Parallax Fence in fg - solve parallax machanism for game decos. you must assume that every element has the exact width of the level!! try from middle of the level!
    *   TODO Try to solve the moonwalk prevention? try bottomCollision assignment BEFORE key left/right assignment??
    *   TODO Fixed positioning for camera on first scene (player floating in).
    *   TODO Add decoration particle effects.
    *   TODO Add and assign actions and sprites for 'attack', 'jump attack' and 'slide'sprites?
    *   TODO Try sound error handling! (Safari etc.)
    *   TODO Add items and item sprites.
    *   TODO Create HUD ( for items 1st ).
    *   TODO create class HUD and assign its non-static method paintHud?
    *   TODO Create item pickup HUD effect!
    *   TODO Add tutorial notifiers?
    *   TODO Flip effect for tiles: https://desandro.github.io/3dtransforms/docs/card-flip.html
    *   TODO Add translucent overlay for blend effects.
    *   TODO Ability to smash crates or destroyables etc.
    *   TODO Particle fx smashed crates, startup window etc.
    *   TODO Add jest tests.
    *   TODO Add cucumber tests.
    *   TODO Credits with top npm packages, staff, colaborators, best tools, free 2d art, primal web references etc,
    *   TODO Test in all browsers.
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
