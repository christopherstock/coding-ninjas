
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Add FPS counter via npm package.
    *   TODO Check if wowjs is really required .. maybe animate.css is sufficient.
    *
    *   TODO create wow popup on entering a room!
    *   TODO add random method to MathUtil!
    *   TODO Try sound error handling! (Safari etc.)
    *   TODO Create parallax bg images.
    *   TODO import methods for class 'Drawing' from box2d game.
    *   TODO Add react and ant design / ant design pro.
    *   TODO Create and use image ranges for sprite templates?
    *   TODO simplify sprite-image-system's frame ranges!
    *   TODO Move game object classes to appropriate subpackages!
    *   TODO only mirror images where a mirrored SpriteTemplate exists!
    *   TODO class game: outsource all init stuff to separate classes: GameEngine > Game and Engine
    *   TODO Create HUD.
    *   TODO Add popup on
    *   TODO Setting: extract debub settings, engine settings etc. > own package?
    *   TODO Add cucumber tests.
    *   TODO Add jest tests.
    *   TODO Prevent ALL images from being mirrored?
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
            this.game = new ninjas.Game();
            this.game.init();
        }
    }
