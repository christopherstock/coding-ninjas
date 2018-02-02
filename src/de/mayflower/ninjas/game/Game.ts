
    import * as ninjas from '../ninjas';

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
                ninjas.Setting.RENDER_DELTA
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
                this.engine.matterJsSystem.getRenderer(),
                ninjas.Setting.CAMERA_RATIO_X,
                ninjas.Setting.CAMERA_RATIO_Y,
                ninjas.Setting.CAMERA_MOVING_SPEED,
                ninjas.Setting.CAMERA_MOVING_MINIMUM,
                ninjas.Setting.CAMERA_MOVING_MAXIMUM,
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
            this.engine.fpsMeter.tickStart();

            // render the engine
            this.render();

            // update MatterJS 2d engine
            this.engine.matterJsSystem.updateEngine( ninjas.Setting.RENDER_DELTA );

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
            this.level.render();

            // render camera
            this.camera.update(
                this.level.player.shape.body.position.x,
                this.level.player.shape.body.position.y,
                this.level.player.lookingDirection,
                this.level.player.collidesBottom,
                this.engine.siteSystem.getFixedCameraTargetX()
            );
        }

        /***************************************************************************************************************
        *   Paints all overlays after Matter.js completed rendering the scene.
        ***************************************************************************************************************/
        public paint( context:CanvasRenderingContext2D )
        {
            let testHudWidth:number  = 150;
            let testHudHeight:number = 50;

            context.fillStyle = "#ff0000";
            context.fillRect( this.engine.canvasSystem.getWidth() - ninjas.Setting.SITE_BORDER_SIZE - testHudWidth, ninjas.Setting.SITE_BORDER_SIZE, testHudWidth, testHudHeight );
            // context.fillRect( this.canvasWidth - ninjas.Setting.SITE_BORDER_SIZE - testHudWidth, this.canvasHeight - ninjas.Setting.SITE_BORDER_SIZE - testHudHeight, testHudWidth, testHudHeight );
        }

        /***************************************************************************************************************
        *   Handles pressed menu keys.
        ***************************************************************************************************************/
        private handleMenuKey()
        {
            if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_1 ) )
            {
                ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_1 );

                ninjas.Debug.init.log( "Switching to level 1" );
                this.resetAndLaunchLevel( new ninjas.LevelWebsite() );
            }

            if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_2 ) )
            {
                ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_2 );

                ninjas.Debug.init.log( "Switching to level 2" );
                this.resetAndLaunchLevel( new ninjas.LevelAllElements() );
            }

            if ( ninjas.Main.game.engine.keySystem.isPressed( ninjas.Key.KEY_3 ) )
            {
                ninjas.Main.game.engine.keySystem.setNeedsRelease( ninjas.Key.KEY_3 );

                ninjas.Debug.init.log( "Switching to level 3" );
                this.resetAndLaunchLevel( new ninjas.LevelEnchantedWoods() );
            }
        }
    }
