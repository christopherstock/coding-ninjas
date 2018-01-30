
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Move camera to screen quarter on showing popup.
    *   TODO Enable different animations for popup.
    *   TODO Float popup in from left or right! ( game icons must not appear by level design! :D )
    *
    *   TODO class game: outsource all init stuff to separate classes: GameEngine > Game and all Engine functions to Engine!
    *   TODO Extend afterRender and beforeRender. Move FPS-tickStart methods there!
    *   TODO Add 'attack' action and sprite.
    *   TODO Border padding for FPS counter.
    *   TODO add random method to MathUtil!
    *   TODO Fence in fg.
    *   TODO Create parallax bg images in bg and fg (pick parallex class!).
        TODO Character.isFalling(): consider bottomContact ? try this on ramps.
    *   TODO import methods for class 'Drawing' from box2d game.
    *   TODO Add react and ant design / ant design pro.
    *   TODO Create and use image ranges for sprite templates?
    *   TODO simplify sprite-image-system's frame ranges!
    *   TODO Move game object classes to appropriate subpackages!
    *   TODO only mirror images where a mirrored SpriteTemplate exists!
    *   TODO Create HUD.
    *   TODO Add popup on
    *   TODO Setting: extract debub settings, engine settings etc. > own package?
    *   TODO outsource lib classes to package de.mayflower.lib??
    *   TODO Add cucumber tests.
    *   TODO Add jest tests.
    *   TODO enable texture cache for MatterJS game renderer?
    *   TODO Add react for site content creation.
    *   TODO Add ant design for site contents.
    *   TODO Add responsive behaviour for site contents.
    *   TODO Remove unused package 'Animate.css'?
    *   TODO create method updateBody() for all shape classes?
    *   TODO Prevent ALL images from being mirrored?
    *   TODO Credits with top npm packages, staff, colaborators, best tools, free 2d art, primal web references etc,
    *   TODO Try sound error handling! (Safari etc.)
    *
    *   TODO Add jest tests.
    *   TODO Add cucumber tests.
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
