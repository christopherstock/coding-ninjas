
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO class game: outsource all init stuff to separate classes: GameEngine > Game and all Engine functions to Engine!
    *   TODO move creation of Site-PopUp to init method! Turn non-static!
    *   TODO Update site popup size on resizing the screen.
    *   TODO Improve WOW handling for SitePopUp.
    *   TODO Extend afterRender and beforeRender. Move FPS-tickStart methods there!
    *   TODO Move camera to screen quarter on showing popup.
    *   TODO Enable different animations for popup.
    *   TODO animate.css effect on popup show and hide.
    *   TODO Add 'attack' action and sprite.
    *   TODO add random method to MathUtil!
    *   TODO Float popup in from left or right! ( game icons must not appear by level design! :D )
    *   TODO outsource according functions from class Site to SitePopup.
    *   TODO Turn Site to non-static class.
    *   TODO Try sound error handling! (Safari etc.)
    *   TODO Create parallax bg images.
        TODO Character.isFalling(): consider bottomContact ? try this on ramps.
    *   TODO import methods for class 'Drawing' from box2d game.
    *   TODO Add react and ant design / ant design pro.
    *   TODO Create and use image ranges for sprite templates?
    *   TODO Fence in fg.
    *   TODO simplify sprite-image-system's frame ranges!
    *   TODO Move game object classes to appropriate subpackages!
    *   TODO only mirror images where a mirrored SpriteTemplate exists!
    *   TODO Create HUD.
    *   TODO Add popup on
    *   TODO Setting: extract debub settings, engine settings etc. > own package?
    *   TODO Add cucumber tests.
    *   TODO Add jest tests.
    *   TODO enable texture cache for MatterJS game renderer?
    *   TODO create method updateBody() for all shape classes?
    *   TODO Prevent ALL images from being mirrored?
    *   TODO Credits with top npm packages, staff, colaborators, best tools, free 2d art, primal web references etc,
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Main
    {
        /** The singleton instance of the game engine. */
        public      static          game                    :ninjas.Game                    = null;

        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main() : void
        {
            // set webpage title
            document.title = ninjas.Setting.TITLE;

            // acclaim debug console
            ninjas.Debug.init.log( ninjas.Setting.TITLE );
            ninjas.Debug.init.log();

            //init and start the game engine
            Main.game = new ninjas.Game();
            Main.game.init();
        }
    }
