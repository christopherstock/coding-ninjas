
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Change all indexed loops to foreach loops!
    *   TODO Solve jump-through obstacles!
    *   TODO Group different objects in level class!?
    *   TODO Fix physics and turn to feelgood experiences (gounds, boxes, player, ramps)
    *   TODO Character.isFalling(): consider bottomContact ? try this on ramps.
    *   TODO Add and assign actions and sprites for 'attack', 'jump attack', 'slide' and 'float' sprites.
    *   TODO Solve player non-sliding on ramps - Add friction, frictionStatic and frictionAir for Shapes!
    *   TODO Adjust densities for game objects.
    *   TODO restitution will bounce balls - set it for all game objects.
    *   TODO Try sound error handling! (Safari etc.)
    *   TODO Revise parallax rendering though different groups in level class.
    *   TODO Parallax Fence in fg - solve parallax machanism for game decos. you must assume that every element has the exact width of the level!! try from middle of the level!
    *
    *   TODO Complete the MVP!
    *
    *   TODO Create HUD ( for items 1st ).
    *   TODO create class HUD and assign its non-static method paintHud?
    *   TODO Create item pickup HUD effect!
    *   TODO Fixed positioning for camera on first scene (player floating in).
    *   TODO Add tutorial notifiers?
    *   TODO Flip effect for tiles: https://desandro.github.io/3dtransforms/docs/card-flip.html
    *   TODO Add translucent overlay for blend effects.
    *   TODO Ability to smash crates or destroyables etc.
    *   TODO Particle fx smashed crates, startup window etc.
    *
    *   TODO Add react for site content creation.
    *   TODO Step-Flow-Meter (progress, navi etc.) in React.
    *   TODO Try ant design (pro?) in front panel.
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
