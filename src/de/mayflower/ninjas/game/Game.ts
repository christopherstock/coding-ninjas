
    import * as Matter from 'matter-js';
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   Specifies the game logic and all primal components of the game.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Game
    {
        /** The current width of the canvas. */
        public      CANVAS_WIDTH            :number                 = 0;
        /** The current height of the canvas. */
        public      CANVAS_HEIGHT           :number                 = 0;

        /** The MatterJS engine. */
        public      engine                  :Matter.Engine          = null;
        /** The MatterJS renderer. */
        private     renderer                :Matter.Render          = null;

        /** The custom key system. */
        public      keySystem               :ninjas.KeySystem       = null;
        /** The custom camera. */
        public      camera                  :ninjas.Camera          = null;
        /** The custom level. */
        public      level                   :ninjas.Level           = null;

        /** The image system. */
        public      imageSystem             :ninjas.ImageSystem     = null;
        /** The soundSystem system. */
        public      soundSystem             :ninjas.SoundSystem     = null;

        /***************************************************************************************************************
        *   Inits all components of the game.
        ***************************************************************************************************************/
        public init()
        {
            this.updateWindowDimensions();
            this.initEngine2D();
            this.initWindowResizeHandler();
            this.initKeySystem();
            this.initImageSystem();
        }

        /***************************************************************************************************************
        *   Being invoked when all images are loaded.
        ***************************************************************************************************************/
        private onImagesLoaded=() : void =>
        {
            this.initSoundSystem();
        };

        /***************************************************************************************************************
        *   Being invoked when all sounds are loaded.
        ***************************************************************************************************************/
        private onSoundsLoaded=() : void =>
        {
            // play bg sound
            this.soundSystem.playSound( ninjas.Sound.BG_CHINESE, true );

            // launch initial level
            this.resetAndLaunchLevel( new ninjas.LevelWebsite() );

            // start game loop
            ninjas.Debug.init.log( "Initing game engine completed" );
            ninjas.Debug.init.log();
            this.start();
        };

        /***************************************************************************************************************
        *   Starts the game loop.
        ***************************************************************************************************************/
        private start()
        {
            // render 1st engine tick
            this.tick();

            // start the renderer
            Matter.Render.run( this.renderer );

            window.setInterval(
                this.tick,
                ninjas.Setting.RENDER_DELTA
            );
        }

        /***************************************************************************************************************
        *   Updates the dimensions of the browser window.
        ***************************************************************************************************************/
        private updateWindowDimensions()
        {
            this.CANVAS_WIDTH  = window.innerWidth;
            this.CANVAS_HEIGHT = window.innerHeight;

            // clip to minimum canvas bounds
            if ( this.CANVAS_WIDTH  < ninjas.Setting.MIN_CANVAS_WIDTH  ) this.CANVAS_WIDTH  = ninjas.Setting.MIN_CANVAS_WIDTH;
            if ( this.CANVAS_HEIGHT < ninjas.Setting.MIN_CANVAS_HEIGHT ) this.CANVAS_HEIGHT = ninjas.Setting.MIN_CANVAS_HEIGHT;

            ninjas.Debug.init.log( "Updated window dimensions to [" + this.CANVAS_WIDTH + "x" + this.CANVAS_HEIGHT + "] " );
        }

        /***************************************************************************************************************
        *   Inits the 2D engine.
        ***************************************************************************************************************/
        private initEngine2D()
        {
            ninjas.Debug.init.log( "Initing 2D physics engine" );

            this.engine = Matter.Engine.create();

            let rendererOptions:any =
            {
                hasBounds:          true,
                wireframes:         false,
                showCollisions:     true,
                showAngleIndicator: true,
                showVelocity:       true,

                width:              this.CANVAS_WIDTH,
                height:             this.CANVAS_HEIGHT,

                // TODO enable texture cache?
                // textures:           ninjas.Image.FILE_NAMES,
            };

            this.renderer = Matter.Render.create(
                {
                    element: document.body,

                    engine:  this.engine,
                    options: rendererOptions,
                }
            );

            this.renderer.canvas.width  = this.CANVAS_WIDTH;
            this.renderer.canvas.height = this.CANVAS_HEIGHT;

            this.engine.world.gravity = {
                x: 0.0,
                y: ninjas.Setting.DEFAULT_GRAVITY_Y,
                scale: 0.001
            };
        }

        /***************************************************************************************************************
        *   Inits the window resize handler.
        ***************************************************************************************************************/
        private initWindowResizeHandler()
        {
            window.onresize = ( event:Event ) => {

                ninjas.Debug.init.log( "Image resize event being detected." );

                this.updateWindowDimensions();

                this.renderer.canvas.width  = this.CANVAS_WIDTH;
                this.renderer.canvas.height = this.CANVAS_HEIGHT;

                this.renderer.options.width  = this.CANVAS_WIDTH;
                this.renderer.options.height = this.CANVAS_HEIGHT;

                this.resetCamera();
            };
        }

        /***************************************************************************************************************
        *   Inits the key system.
        ***************************************************************************************************************/
        private initKeySystem()
        {
            ninjas.Debug.init.log( "Initing key system" );

            this.keySystem = new ninjas.KeySystem();
        }

        /***************************************************************************************************************
        *   Inits the image system.
        ***************************************************************************************************************/
        private initImageSystem()
        {
            ninjas.Debug.init.log( "Initing image system" );

            this.imageSystem = new ninjas.ImageSystem( ninjas.Image.FILE_NAMES, this.onImagesLoaded );
            this.imageSystem.loadImages();
        }

        /***************************************************************************************************************
        *   Inits the sound system.
        ***************************************************************************************************************/
        private initSoundSystem()
        {
            ninjas.Debug.init.log( "Initing sound system" );

            this.soundSystem = new ninjas.SoundSystem( ninjas.Sound.FILE_NAMES, this.onSoundsLoaded );
            this.soundSystem.loadSounds();
        }

        /***************************************************************************************************************
        *   Inits the level.
        ***************************************************************************************************************/
        private resetAndLaunchLevel( levelToLaunch:ninjas.Level )
        {
            // clear world
            Matter.World.clear( this.engine.world, false );

            // assign and init level
            this.level = levelToLaunch;
            this.level.init();

            // reset camera
            this.resetCamera();
        }

        /***************************************************************************************************************
        *   Resets the camera.
        ***************************************************************************************************************/
        private resetCamera()
        {
            this.camera = new ninjas.Camera(
                this.renderer,
                ninjas.Setting.CAMERA_RATIO_X,
                ninjas.Setting.CAMERA_RATIO_Y,
                ninjas.Setting.CAMERA_MOVING_SPEED,
                ninjas.Setting.CAMERA_MOVING_MINIMUM,
                this.level.width,
                this.level.height,
                this.CANVAS_WIDTH,
                this.CANVAS_HEIGHT
            );
            this.camera.reset();
        }

        /***************************************************************************************************************
        *   Being invoked each tick of the game loop in order to render the game.
        ***************************************************************************************************************/
        private tick=()=>
        {
            // render the engine
            this.render();

            // update MatterJS 2d engine
            Matter.Engine.update( this.engine, ninjas.Setting.RENDER_DELTA );
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
                this.level.player.collidesBottom
            );
        }

        /***************************************************************************************************************
        *   Handles pressed menu keys.
        ***************************************************************************************************************/
        private handleMenuKey()
        {
            if ( ninjas.Main.game.keySystem.isPressed( ninjas.Key.KEY_1 ) )
            {
                ninjas.Main.game.keySystem.setNeedsRelease( ninjas.Key.KEY_1 );

                ninjas.Debug.init.log( "Switching to level 1" );
                this.resetAndLaunchLevel( new ninjas.LevelWebsite() );
            }

            if ( ninjas.Main.game.keySystem.isPressed( ninjas.Key.KEY_2 ) )
            {
                ninjas.Main.game.keySystem.setNeedsRelease( ninjas.Key.KEY_2 );

                ninjas.Debug.init.log( "Switching to level 2" );
                this.resetAndLaunchLevel( new ninjas.LevelAllElements() );
            }

            if ( ninjas.Main.game.keySystem.isPressed( ninjas.Key.KEY_3 ) )
            {
                ninjas.Main.game.keySystem.setNeedsRelease( ninjas.Key.KEY_3 );

                ninjas.Debug.init.log( "Switching to level 3" );
                this.resetAndLaunchLevel( new ninjas.LevelEnchantedWoods() );
            }
        }
    }
