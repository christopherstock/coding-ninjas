
    import * as ninjas from '../ninjas';

    require( 'fpsmeter' );

    /*******************************************************************************************************************
    *   Specifies the game engine and its systems.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class GameEngine
    {
        /** The canvas element. */
        public      canvasSystem            :ninjas.CanvasSystem            = null;
        /** The image system. */
        public      imageSystem             :ninjas.ImageSystem             = null;
        /** The soundSystem system. */
        public      soundSystem             :ninjas.SoundSystem             = null;
        /** The matterJS engine. */
        public      matterJsSystem          :ninjas.MatterJsSystem          = null;
        /** The site system. */
        public      siteSystem              :ninjas.SiteSystem              = null;
        /** The custom key system. */
        public      keySystem               :ninjas.KeySystem               = null;
        /** The FPS counter. */
        public      fpsMeter                :FPSMeter                       = null;

        /***************************************************************************************************************
        *   Inits all systems of the game engine.
        ***************************************************************************************************************/
        public init()
        {
            ninjas.Debug.init.log( "Initing canvas system" );
            this.canvasSystem = new ninjas.CanvasSystem();
            this.canvasSystem.updateDimensions();

            ninjas.Debug.init.log( "Initing image system" );
            this.imageSystem = new ninjas.ImageSystem
            (
                ninjas.Image.FILE_NAMES,
                ninjas.SpriteTemplate.getAllImagesToMirror(),
                this.onImagesLoaded
            );
            this.imageSystem.loadImages();
        }

        /***************************************************************************************************************
        *   Being invoked when all images are loaded.
        ***************************************************************************************************************/
        private onImagesLoaded=() : void =>
        {
            ninjas.SpriteTemplate.assignAllImageSizes();

            ninjas.Debug.init.log( "Initing sound system" );
            this.soundSystem = new ninjas.SoundSystem( ninjas.Sound.FILE_NAMES, this.onSoundsLoaded );
            this.soundSystem.loadSounds();
        };

        /***************************************************************************************************************
        *   Being invoked when all sounds are loaded.
        ***************************************************************************************************************/
        private onSoundsLoaded=() : void =>
        {
            // init matterJS
            this.initMatterJS();

            // init site system
            ninjas.Debug.init.log( "Initing site system" );
            this.siteSystem = new ninjas.SiteSystem();

            // init key system
            ninjas.Debug.init.log( "Initing key system" );
            this.keySystem = new ninjas.KeySystem();

            // init window resize and blur handler
            this.initWindowResizeHandler();
            this.initWindowBlurHandler();

            // init FPS-counter
            this.initFpsCounter();

            ninjas.Debug.init.log( "Initing game engine completed" );

            ninjas.Main.game.start();
        };

        /***************************************************************************************************************
        *   Inits the 2D engine.
        ***************************************************************************************************************/
        private initMatterJS()
        {
            ninjas.Debug.init.log( "Initing 2D physics engine" );

            this.matterJsSystem = new ninjas.MatterJsSystem
            (
                this.canvasSystem.getCanvas(),
                ( renderContext:CanvasRenderingContext2D ) => { ninjas.Main.game.paintHUD(  renderContext ); },
                this.imageSystem.getAll()
            );
        }

        /***************************************************************************************************************
        *   Inits the window resize handler.
        ***************************************************************************************************************/
        private initWindowResizeHandler()
        {
            ninjas.Debug.init.log( "Initing window resize handler" );

            window.onresize = ( event:Event ) => {

                this.canvasSystem.updateDimensions();
                this.matterJsSystem.updateEngineDimensions
                (
                    this.canvasSystem.getWidth(),
                    this.canvasSystem.getHeight()
                );
                this.siteSystem.updatePanelSizeAndPosition();
                ninjas.Main.game.resetCamera();
            };
        }

        /***************************************************************************************************************
        *   Inits the window blur handler.
        ***************************************************************************************************************/
        private initWindowBlurHandler()
        {
            ninjas.Debug.init.log( "Initing window blur handler" );

            window.onblur = ( event:Event ) => {

                ninjas.Debug.canvas.log( "Detected window focus lost. Releasing all keys." );

                this.keySystem.releaseAllKeys();
            };
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
                    right:    ninjas.SettingGame.BORDER_SIZE_OUTER + "px",
                    bottom:   ninjas.SettingGame.BORDER_SIZE_OUTER + "px",
                    left:     "auto",
                    margin:   "0",
                    heat:     1,
                }
            );
        }
    }
