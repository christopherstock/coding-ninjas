
    import * as matter   from 'matter-js';
    import * as ninjas   from '../ninjas';

    const wow = require( 'wowjs' );

    require( 'fpsmeter' );

    /*******************************************************************************************************************
    *   Specifies the game logic and all primal components of the game.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Game
    {
        // TODO wrap these four values to class CanvasSystem

        /** The canvas element. */
        public      canvas                  :HTMLCanvasElement              = null;
        /** The canvas rendering context. */
        public      canvasContext           :CanvasRenderingContext2D       = null;
        /** The current width of the canvas. */
        public      canvasWidth             :number                         = 0;
        /** The current height of the canvas. */
        public      canvasHeight            :number                         = 0;

        // TODO wrap these two values to class MatterSystem

        /** The MatterJS engine. */
        public      engine                  :matter.Engine                  = null;
        /** The MatterJS renderer. */
        private     renderer                :matter.Render                  = null;

        /** The custom key system. */
        public      keySystem               :ninjas.KeySystem               = null;
        /** The custom camera. */
        public      camera                  :ninjas.Camera                  = null;
        /** The custom level. */
        public      level                   :ninjas.Level                   = null;

        /** The image system. */
        public      imageSystem             :ninjas.ImageSystem             = null;
        /** The soundSystem system. */
        public      soundSystem             :ninjas.SoundSystem             = null;

        /** The site system. */
        public      siteSystem              :ninjas.SiteSystem              = null;

        /** The FPS counter. */
        private     fpsMeter                :FPSMeter                       = null;
        /** The WOW animation system. */
        public      wowSystem               :any                            = null;

        /***************************************************************************************************************
        *   Inits all components of the game.
        ***************************************************************************************************************/
        public init()
        {
            this.updateCanvasDimensions();
            this.initCanvas();
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
            ninjas.SpriteTemplate.assignAllImageSizes();

            this.initSoundSystem();
        };

        /***************************************************************************************************************
        *   Being invoked when all sounds are loaded.
        ***************************************************************************************************************/
        private onSoundsLoaded=() : void =>
        {
            // init site system
            this.initSiteSystem();

            // init FPS-counter
            this.initFpsCounter();

            // init WOW animations
            this.initWow();

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
            matter.Render.run( this.renderer );

            window.setInterval(
                this.tick,
                ninjas.Setting.RENDER_DELTA
            );
        }

        /***************************************************************************************************************
        *   Updates the dimensions of the canvas according to the browser window.
        ***************************************************************************************************************/
        private updateCanvasDimensions()
        {
            this.canvasWidth  = window.innerWidth;
            this.canvasHeight = window.innerHeight;

            // clip to minimum canvas dimensions
            if ( this.canvasWidth  < ninjas.Setting.MIN_CANVAS_WIDTH  ) this.canvasWidth  = ninjas.Setting.MIN_CANVAS_WIDTH;
            if ( this.canvasHeight < ninjas.Setting.MIN_CANVAS_HEIGHT ) this.canvasHeight = ninjas.Setting.MIN_CANVAS_HEIGHT;

            ninjas.Debug.init.log( "Updated canvas dimensions to [" + this.canvasWidth + "x" + this.canvasHeight + "] " );
        }

        /***************************************************************************************************************
        *   Updates the dimensions of the canvas according to the browser window.
        ***************************************************************************************************************/
        private updateMatterEngineDimensions()
        {
            this.renderer.canvas.width  = this.canvasWidth;
            this.renderer.canvas.height = this.canvasHeight;

            this.renderer.options.width  = this.canvasWidth;
            this.renderer.options.height = this.canvasHeight;

            ninjas.Debug.init.log( "Updated matter.js engine dimensions according to canvas." );
        }

        /***************************************************************************************************************
        *   Inits the 2D canvas by creating and adding it to the document body.
        ***************************************************************************************************************/
        private initCanvas()
        {
            // create
            this.canvas = document.createElement( "canvas" );

            // reference 2d rendering context
            this.canvasContext = this.canvas.getContext( "2d" );

            // set dimensions
            this.canvas.width  = this.canvasWidth;
            this.canvas.height = this.canvasHeight;

            // append to body
            document.body.appendChild( this.canvas );
        }

        /***************************************************************************************************************
        *   Inits the 2D engine.
        ***************************************************************************************************************/
        private initEngine2D()
        {
            ninjas.Debug.init.log( "Initing 2D physics engine" );

            // create engine
            this.engine = matter.Engine.create();
            this.engine.world.gravity = {
                x: 0.0,
                y: ninjas.Setting.DEFAULT_GRAVITY_Y,
                scale: 0.001
            };

            // create renderer
            this.renderer = matter.Render.create(
                {
                    canvas:  this.canvas,
                    engine:  this.engine,
                    options: {
                        hasBounds:          true,
                        wireframes:         false,
                        showCollisions:     true,
                        showAngleIndicator: true,
                        showVelocity:       true,
                        background:         ninjas.Setting.CANVAS_BG,
                        width:              this.canvasWidth,
                        height:             this.canvasHeight,

                        // textures:           ninjas.Image.FILE_NAMES,
                    } as any,
                }
            );

            // disables blurry image drawing!
            this.renderer.context.imageSmoothingEnabled = false;

            // add drawing callback after rendering
            matter.Events.on(
                this.renderer,
                "afterRender",
                ( event ) => {
                    this.paint( this.renderer.context );
                }
            );
        }

        /***************************************************************************************************************
        *   Inits the window resize handler.
        ***************************************************************************************************************/
        private initWindowResizeHandler()
        {
            // TODO oursource function!
            window.onresize = ( event:Event ) => {

                this.updateCanvasDimensions();
                this.updateMatterEngineDimensions();
                this.siteSystem.updatePanelSizeAndPosition();
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
        *   Inits the site system.
        ***************************************************************************************************************/
        private initSiteSystem()
        {
            this.siteSystem = new ninjas.SiteSystem();
        }

        /***************************************************************************************************************
        *   Inits the FPS counter.
        ***************************************************************************************************************/
        private initFpsCounter()
        {
            ninjas.Debug.init.log( "Initing FPS counter" );

            this.fpsMeter = new FPSMeter(
                null,
                {
                    graph:    1,
                    decimals: 1,
                    position: "absolute",
                    zIndex:   10,
                    top:      "auto",
                    right:    ninjas.Setting.SITE_BORDER_SIZE + "px",
                    bottom:   ninjas.Setting.SITE_BORDER_SIZE + "px",
                    left:     "auto",
                    margin:   "0",
                    heat:     1,
                }
            );
        }

        /***************************************************************************************************************
        *   Inits the WOW animation system.
        ***************************************************************************************************************/
        private initWow()
        {
            ninjas.Debug.init.log( "Initing WOW animations" );

            this.wowSystem = new wow.WOW(
                {
                    boxClass:        'wow',              // animated element css class (default is wow)
                    animateClass:    'animated',         // animation css class (default is animated)
                    offset:          0,                  // distance to the element when triggering the animation (default is 0)
                    mobile:          true,               // trigger animations on mobile devices (default is true)
                    scrollContainer: null,               // optional scroll container selector, otherwise use window
                    live:            true,               // act on asynchronously loaded content (default is true)
                    // callback:     function( box ) {}, // the callback is fired every time an animation is started the argument that is passed in is the DOM node being animated
                }
            );
            this.wowSystem.init();
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
            matter.World.clear( this.engine.world, false );

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
                ninjas.Setting.CAMERA_MOVING_MAXIMUM,
                this.level.width,
                this.level.height,
                this.canvasWidth,
                this.canvasHeight
            );
            this.camera.reset();
        }

        /***************************************************************************************************************
        *   Being invoked each tick of the game loop in order to render the game.
        ***************************************************************************************************************/
        private tick=()=>
        {
            this.fpsMeter.tickStart();

            // render the engine
            this.render();

            // update MatterJS 2d engine
            matter.Engine.update( this.engine, ninjas.Setting.RENDER_DELTA );
/*
            let context:CanvasRenderingContext2D = this.canvas.getContext( "2d" );
            context.fillStyle = "#ff0000";
            context.fillRect( 0, 0, 100, 200 );
*/
            this.fpsMeter.tick();
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
                this.siteSystem.getFixedCameraTargetX()
            );
        }

        /***************************************************************************************************************
        *   Paints all overlays after Matter.js completed rendering the scene.
        ***************************************************************************************************************/
        private paint( context:CanvasRenderingContext2D )
        {
            let testHudWidth:number  = 150;
            let testHudHeight:number = 50;

            context.fillStyle = "#ff0000";
            context.fillRect( this.canvasWidth - ninjas.Setting.SITE_BORDER_SIZE - testHudWidth, ninjas.Setting.SITE_BORDER_SIZE, testHudWidth, testHudHeight );
            // context.fillRect( this.canvasWidth - ninjas.Setting.SITE_BORDER_SIZE - testHudWidth, this.canvasHeight - ninjas.Setting.SITE_BORDER_SIZE - testHudHeight, testHudWidth, testHudHeight );
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
