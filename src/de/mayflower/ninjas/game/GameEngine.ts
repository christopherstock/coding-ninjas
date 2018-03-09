
    import * as ninjas from '../ninjas';

    require( 'fpsmeter' );

    /*******************************************************************************************************************
    *   Specifies the game engine and its systems.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
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
        /** The custom pointer system. */
        public      pointerSystem           :ninjas.PointerSystem           = null;
        /** The FPS counter. */
        public      fpsMeter                :FPSMeter                       = null;

        /***************************************************************************************************************
        *   Inits the canvas of the game engine.
        ***************************************************************************************************************/
        public initCanvas()
        {
            ninjas.Debug.preloader.log( "Initing canvas system" );
            this.canvasSystem = new ninjas.CanvasSystem();
            this.canvasSystem.updateDimensions();
        }

        /***************************************************************************************************************
        *   Inits the canvas of the game engine.
        ***************************************************************************************************************/
        public initImageSystem()
        {
            ninjas.Debug.preloader.log( "Initing image system" );
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

            ninjas.Main.game.preloader.setLoadingPercentage( 80 );

            ninjas.Debug.preloader.log( "Initing sound system" );
            this.soundSystem = new ninjas.SoundSystem( ninjas.Sound.FILE_NAMES, this.onSoundsLoaded );
            this.soundSystem.loadSounds();
        };

        /***************************************************************************************************************
        *   Being invoked when all sounds are loaded.
        ***************************************************************************************************************/
        private onSoundsLoaded=() : void =>
        {
            ninjas.Main.game.preloader.setLoadingPercentage( 90 );

            // init matterJS
            this.initMatterJS();

            // init site system
            ninjas.Debug.preloader.log( "Initing site system" );
            this.siteSystem = new ninjas.SiteSystem();

            // init key and pointer system
            ninjas.Debug.preloader.log( "Initing key system" );
            this.keySystem = new ninjas.KeySystem();
            ninjas.Debug.preloader.log( "Initing pointer system" );
            this.pointerSystem = new ninjas.PointerSystem();

            // init window blur handler
            this.initWindowBlurHandler();

            // init FPS-counter
            if ( ninjas.SettingDebug.DEBUG_MODE )
            {
                this.initFpsCounter();
            }

            ninjas.Debug.preloader.log( "Initing game engine completed" );

            ninjas.Main.game.preloader.setLoadingPercentage( 100 );

            // hang on a sec
            window.setTimeout
            (
                ninjas.Main.game.start,
                ( ninjas.SettingDebug.DEBUG_MODE ? 0 : 1000 )
            );
        };

        /***************************************************************************************************************
        *   Inits the 2D engine.
        ***************************************************************************************************************/
        private initMatterJS()
        {
            ninjas.Debug.preloader.log( "Initing 2D physics engine" );

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
        public initWindowResizeHandler()
        {
            ninjas.Debug.preloader.log( "Initing window resize handler" );

            window.onresize = ( event:Event ) => {

                this.canvasSystem.updateDimensions();

                if ( this.matterJsSystem != null )
                {
                    this.matterJsSystem.updateEngineDimensions
                    (
                        this.canvasSystem.getWidth(),
                        this.canvasSystem.getHeight()
                    );
                    this.siteSystem.updatePanelSizeAndPosition();
                    ninjas.Main.game.resetCamera();
                }
            };
        }

        /***************************************************************************************************************
        *   Inits the window blur handler.
        ***************************************************************************************************************/
        private initWindowBlurHandler()
        {
            ninjas.Debug.preloader.log( "Initing window blur handler" );

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
            ninjas.Debug.preloader.log( "Initing FPS counter" );

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
