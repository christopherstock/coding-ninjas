
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO wrap all content components to functions!
    *   TODO Remove flickering of antd components on panel reappearing.
    *   TODO Only create site panel contents once. Create initializer method for this.
    *   TODO Turn all (example) content creations to JSX.
    *   TODO Add different contents for site panels.
    *   TODO Open shrine books on entering the trigger!
    *   TODO Preload site images via image system ( or assign images via JavaScript ).
    *   TODO Create bridge obstacle, sprite and water deco sprite.
    *
    *   TODO Complete the MVP!
    *
    *   TODO Ask Lenz: packages 'less' and 'less-loader' for less import and antd theme config?
    *   TODO Theme ant design to pink!
    *   TODO Try ant design (pro?) in front panel.
    *   TODO Parallax Fence in fg - solve parallax machanism for game decos. you must assume that every element has the exact width of the level!! try from middle of the level!
    *   TODO Fixed positioning for camera on first scene (player floating in).
    *   TODO Add decoration particle effects.
    *   TODO Add 'slide' sprite.
    *   TODO Add and assign actions and sprites for 'attack' and 'jump attack'?
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
    *   TODO Add event triggers (obstacle falling down on touching trigger etc.)
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
