
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Create parallax bg images in bg and fg (new game object class 'parallex deco' extending deco!).
    *   TODO Parallax Fence in fg. ( parallax machanism for game decos ? )
    *   TODO Craft and complete parallax game objects!
    *
    *   TODO Move game object classes to appropriate subpackages!
    *   TODO move all system classes to package game/engine /io .. ?
    *   TODO GameObjectFactory: All params to SpriteTemplate instead sprite! Check propagation in game object?
    *   TODO refactor to class class SitePanel. All fields private and reference both container divs !!!
    *   TODO Auto-release all keys on losing canvas focus?
    *   TODO Create static spriteTemplate creator for single image sprites.
    *   TODO Remove timeout and use Enine.events.tick?
    *   TODO Add translucent overlay for blend effects.
    *   TODO Y location for all creator methods on bottom instead of on top?
    *   TODO Add 'attack' action and sprite.
    *   TODO SiteSystem: inner div to own reference in class Site! remove getElementById!
    *   TODO Character.isFalling(): consider bottomContact ? try this on ramps.
    *   TODO simplify sprite-image-system's frame ranges!
    *   TODO create class HUD and assign its non-static method paintHud?
    *   TODO Create and use image ranges for sprite templates? [not possible though single filenames!]
    *   TODO Fix flickering wow effects in all browsers.
    *   TODO only mirror images where a mirrored SpriteTemplate exists!
    *   TODO Prevent ALL images from being mirrored?
    *   TODO Create HUD.
    *   TODO Create item pickup HUD effect!
    *   TODO Add tutorial notifiers?
    *   TODO Setting: extract debub settings, engine settings etc. > own package?
    *   TODO outsource lib classes to package de.mayflower.lib??
    *   TODO Fix camera on first scene (floating in).
    *   TODO create method updateBody() for all shape classes??
    *   TODO Try sound error handling! (Safari etc.)
    *
    *   TODO Add react for site content creation.
    *   TODO Try ant design (pro?) in front panel.
    *   TODO Add jest tests.
    *   TODO Add cucumber tests.
    *   TODO Credits with top npm packages, staff, colaborators, best tools, free 2d art, primal web references etc,
    *   TODO Step-Flow-Meter (progress, navi etc.) in React.
    *   TODO Create mobile version .. (minimum panel size and minimum canvas size 400px etc )
    *   TODO Test in all browsers.
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
