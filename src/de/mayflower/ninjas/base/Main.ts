
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Create static spriteTemplate creator for single image sprites.
    *   TODO Y location for all creator methods on bottom instead of on top?
    *   TODO Split class 'Setting': extract debub settings, engine settings, matter/physics settings etc. > own package?
    *   TODO Remove timeout and use Enine.events.tick?
    *   TODO refactor to class SitePanel. All fields private and reference both container divs !!!
    *   TODO SiteSystem: inner div to own reference in class Site! remove getElementById!
    *   TODO Add 'attack' action and sprite.
    *   TODO Character.isFalling(): consider bottomContact ? try this on ramps.
    *   TODO simplify sprite-image-system's frame ranges!
    *   TODO create method updateBody() for all shape classes??
    *   TODO Try sound error handling! (Safari etc.)
    *   TODO Prune all levels except LevelWebsite.
    *
    *   TODO Complete the MVP!
    *
    *   TODO Add translucent overlay for blend effects.
    *   TODO create class HUD and assign its non-static method paintHud?
    *   TODO Fix flickering wow effects in all browsers!!
    *   TODO Create and use image ranges for sprite templates? [not possible though single filenames!]
    *   TODO only mirror images where a mirrored SpriteTemplate exists! Prevent ALL images from being mirrored?
    *
    *   TODO Create HUD ( for items 1st ).
    *   TODO Create item pickup HUD effect!
    *   TODO Add tutorial notifiers?
    *   TODO Parallax Fence in fg - solve parallax machanism for game decos. you must assume that every element has the exact width of the level!! try from middle of the level!
    *   TODO Fixed positioning for camera on first scene (floating in).
    *   TODO outsource lib classes to package de.mayflower.lib??
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
