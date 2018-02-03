
    import * as ninjas from '../ninjas';

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
            this.imageSystem = new ninjas.ImageSystem( ninjas.Image.FILE_NAMES, this.onImagesLoaded );
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

            // init window resize handler
            this.initWindowResizeHandler();

            // init key system
            ninjas.Debug.init.log( "Initing key system" );
            this.keySystem = new ninjas.KeySystem();

            // init FPS-counter
            this.initFpsCounter();

            // play bg sound
            this.soundSystem.playSound( ninjas.Sound.BG_CHINESE, true );

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
    }
