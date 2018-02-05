
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO Remove timeout and use Engine.events.tick?
    *   TODO Try friction, frictionStatic and frictionAir to Shape!
    *   TODO refactor to class SitePanel. All fields private and reference both container divs !!!
    *   TODO Move site settings (duration etc) to SettingGame or SettingSite.
    *   TODO SiteSystem: inner div to own reference in class Site! remove getElementById!
    *   TODO use density instead of mass/inverseMass
    *   TODO create or remove method updateBody() for all shape classes!
    *   TODO Group different objects in level class!
    *   TODO Revise parallax rendering though different groups in level class.
    *   TODO Refactor: remove getRenderer in MatterJs!
    *   TODO Character.isFalling(): consider bottomContact ? try this on ramps.
    *   TODO simplify sprite-image-system's frame ranges!
    *   TODO Try sound error handling! (Safari etc.)
    *   TODO Add 'attack' action and sprite.
    *
    *   TODO Complete the MVP!
    *
    *   TODO restitution will bounce balls!
    *   TODO Add translucent overlay for blend effects.
    *   TODO Ability to smash crates or destroyables etc.
    *   TODO Particle fx smashed crates etc.
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
    *
    *   TODO Add react for site content creation.
    *   TODO Step-Flow-Meter (progress, navi etc.) in React.
    *   TODO Try ant design (pro?) in front panel.
    *   TODO Add jest tests.
    *   TODO Add cucumber tests.
    *   TODO Credits with top npm packages, staff, colaborators, best tools, free 2d art, primal web references etc,
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
            document.title = ninjas.SettingGame.TITLE;

            // acclaim debug console
            ninjas.Debug.init.log( ninjas.SettingGame.TITLE );
            ninjas.Debug.init.log();

            //init and start the game engine
            Main.game = new ninjas.Game();
            Main.game.init();
        }
    }
