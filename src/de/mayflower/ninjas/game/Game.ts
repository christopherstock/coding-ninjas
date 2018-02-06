
    import * as ninjas from '../ninjas';
    import * as matter from 'matter-js';

    require( 'fpsmeter' );

    /*******************************************************************************************************************
    *   Specifies the game logic and all primal components of the game.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Game
    {
        /** The game engine. */
        public      engine                  :ninjas.GameEngine              = null;

        /** The custom camera system. */
        public      camera                  :ninjas.Camera                  = null;

        /** The custom level. */
        public      level                   :ninjas.Level                   = null;

        /***************************************************************************************************************
        *   Inits all components of the game.
        ***************************************************************************************************************/
        public init()
        {
            this.engine = new ninjas.GameEngine();
            this.engine.init();
        }

        /***************************************************************************************************************
        *   Starts the game loop.
        ***************************************************************************************************************/
        public start()
        {
            ninjas.Debug.init.log( "Starting the game loop" );
            ninjas.Debug.init.log();

            // launch initial level
            this.resetAndLaunchLevel( new ninjas.LevelWebsite() );

            // render 1st engine tick
            this.tick();

            // start the renderer
            this.engine.matterJsSystem.startRenderer();

            // invoke engine ticks repeatedly
            window.setInterval(
                this.tick,
                ninjas.SettingGame.TICK_DELAY_DELTA
            );
        }

        /***************************************************************************************************************
        *   Inits the level.
        ***************************************************************************************************************/
        private resetAndLaunchLevel( levelToLaunch:ninjas.Level )
        {
            // clear world
            this.engine.matterJsSystem.resetWorld();

            // assign and init level
            this.level = levelToLaunch;
            this.level.init();

            // reset camera
            this.resetCamera();
        }

        /***************************************************************************************************************
        *   Resets the camera.
        ***************************************************************************************************************/
        public resetCamera()
        {
            this.camera = new ninjas.Camera(
                ninjas.SettingEngine.CAMERA_RATIO_Y,
                ninjas.SettingEngine.CAMERA_MOVING_SPEED,
                ninjas.SettingEngine.CAMERA_MOVING_MINIMUM,
                ninjas.SettingEngine.CAMERA_MOVING_MAXIMUM,
                this.level.width,
                this.level.height,
                this.engine.canvasSystem.getWidth(),
                this.engine.canvasSystem.getHeight()
            );
            this.camera.reset();
        }

        /***************************************************************************************************************
        *   Being invoked each tick of the game loop in order to render the game.
        ***************************************************************************************************************/
        private tick=()=>
        {
            // start fpsMetet tick
            this.engine.fpsMeter.tickStart();

            // render one game tick
            this.render();

            // update MatterJS 2d engine
            this.engine.matterJsSystem.updateEngine( ninjas.SettingGame.RENDER_DELTA );

            // stop fpsMetet tick
            this.engine.fpsMeter.tick();
        };

        /***************************************************************************************************************
        *   Renders all game components.
        ***************************************************************************************************************/
        private render()
        {
            // handle menu key
            this.handleMenuKey();

            // render level
            this.level.render( false );

            // update camera
            let cameraBounds:matter.Bounds = this.camera.update(
                this.level.player.shape.body.position.x,
                this.level.player.shape.body.position.y,
                this.level.player.collidesBottom,
                this.engine.siteSystem.getCameraTargetX()
            );
            this.engine.matterJsSystem.setRenderBounds( cameraBounds );

            // render parallax elements
            this.level.render( true );
        }

        /***************************************************************************************************************
        *   Paints all overlays after Matter.js completed rendering the scene.
        *
        *   @param context The 2D rendering context to draw onto.
        ***************************************************************************************************************/
        public paintHUD( context:CanvasRenderingContext2D )
        {
            let testHudWidth:number  = 150;
            let testHudHeight:number = 50;

            context.fillStyle = "#ff0000";
            context.fillRect( this.engine.canvasSystem.getWidth() - ninjas.SettingGame.SITE_BORDER_SIZE - testHudWidth, ninjas.SettingGame.SITE_BORDER_SIZE, testHudWidth, testHudHeight );
        }

        /***************************************************************************************************************
        *   Handles pressed menu keys.
        ***************************************************************************************************************/
        private handleMenuKey()
        {
            if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_1 ) )
            {
                ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_1 );

                ninjas.Debug.init.log( "Resetting and switching to level 1" );
                this.resetAndLaunchLevel( new ninjas.LevelWebsite() );
            }
/*
            if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_2 ) )
            {
                ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_2 );

                ninjas.Debug.init.log( "Resetting and switching to level 2" );
                this.resetAndLaunchLevel( new ninjas.LevelAllElements() );
            }

            if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_3 ) )
            {
                ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_3 );

                ninjas.Debug.init.log( "Resetting and switching to level 3" );
                this.resetAndLaunchLevel( new ninjas.LevelEnchantedWoods() );
            }
*/
        }
    }
