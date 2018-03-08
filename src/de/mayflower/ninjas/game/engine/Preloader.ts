
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Handles the whole preloading process for the web app.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Preloader
    {
        /** The callback to invoke when the preloader is set up. */
        private                     onPreloaderSetup                :Function                           = null;

        /**  The colorful preloader image. */
        private                     imageGay                        :HTMLImageElement                   = null;
        /**  The monochrome preloader image. */
        private                     imageMono                       :HTMLImageElement                   = null;
        /**  A counter for the preloaded images. */
        private                     loadedImageCount                :number                             = 0;
        /**  The percentage of all loaded game contents. */
        private                     loadingPercentage               :number                             = 0;
        /**  The handle to the preloader timeout. */
        private                     preloaderIntervalHandle         :number                             = 0;

        /***************************************************************************************************************
        *   Creates a new preloading system.
        *
        *   @param onPreloaderSetup The callback to invoke when the preloading is set up.
        ***************************************************************************************************************/
        public constructor( onPreloaderSetup:Function )
        {
            this.onPreloaderSetup = onPreloaderSetup;
        }

        /***************************************************************************************************************
        *   Shows the preloader and starts preloading all initialization contents.
        ***************************************************************************************************************/
        public preload()
        {
            ninjas.Debug.preloader.log( "Preloading all game components" );

            // bring on the canvas and init the resize handler
            ninjas.Main.game.engine.initCanvas();
            ninjas.Main.game.engine.initWindowResizeHandler();

            // load preloader images
            this.imageGay  = new Image();
            this.imageMono = new Image();

            this.imageGay.src  = ninjas.SettingEngine.PATH_IMAGE_PRELOADER + "preloaderGay.png";
            this.imageMono.src = ninjas.SettingEngine.PATH_IMAGE_PRELOADER + "preloaderMono.png";

            this.imageGay.onload  = this.preloaderImageLoaded;
            this.imageMono.onload = this.preloaderImageLoaded;
        }

        /***************************************************************************************************************
        *   Sets the loading percentage the preloader should draw onto the screen.
        *
        *   @param loadingPercentage The loading percentage to set.
        ***************************************************************************************************************/
        public setLoadingPercentage( loadingPercentage:number )
        {
            this.loadingPercentage = loadingPercentage;

            // force an immediate draw
            this.drawPreloader( ninjas.Main.game.engine.canvasSystem.getCanvasContext() );
        }

        /***************************************************************************************************************
        *   Stops the preloader interval.
        ***************************************************************************************************************/
        public stopThread()
        {
            window.clearInterval( this.preloaderIntervalHandle );
        }

        /***************************************************************************************************************
        *   Being invoked when one preloader image has been loaded.
        ***************************************************************************************************************/
        private preloaderImageLoaded=()=>
        {
            if ( ++this.loadedImageCount == 2 )
            {
                ninjas.Debug.preloader.log( "All preloader images loaded." );

                this.onPreloaderImageLoadComplete();
            }
        };

        /***************************************************************************************************************
        *   Being invoked when all preloader images have been loaded completely.
        ***************************************************************************************************************/
        private onPreloaderImageLoadComplete()
        {
            // start the preloading thread
            this.preloaderIntervalHandle = window.setInterval
            (
                this.tickPreloader,
                ninjas.SettingGame.TICK_DELAY_DELTA
            );

            // notify that the preloader is setup
            this.onPreloaderSetup();
        }

        /***************************************************************************************************************
        *   Performs one tick of the preloading thread.
        ***************************************************************************************************************/
        private tickPreloader=()=>
        {
            this.drawPreloader( ninjas.Main.game.engine.canvasSystem.getCanvasContext() );
        };

        /***************************************************************************************************************
        *   Draws the preloader onto the canvas.
        *
        *   @param ctx The canvas rendering context to draw onto.
        ***************************************************************************************************************/
        private drawPreloader( ctx:CanvasRenderingContext2D )
        {
            // clear canvas
            ninjas.Drawing.fillRect
            (
                ninjas.Main.game.engine.canvasSystem.getCanvasContext(),
                0,
                0,
                ninjas.Main.game.engine.canvasSystem.getWidth(),
                ninjas.Main.game.engine.canvasSystem.getHeight(),
                ninjas.SettingEngine.CANVAS_BG
            );

            // calc image location
            let imageX:number = ( ninjas.Main.game.engine.canvasSystem.getWidth()  - this.imageMono.width  ) / 2;
            let imageY:number = ( ninjas.Main.game.engine.canvasSystem.getHeight() - this.imageMono.height ) / 2;

            // calc image width to draw
            let imageWidthToDraw:number = ( this.imageGay.width * this.loadingPercentage ) / 100;

            // draw mono image
            ninjas.Drawing.drawImage
            (
                ninjas.Main.game.engine.canvasSystem.getCanvasContext(),
                this.imageMono,
                imageX,
                imageY
            );

            // draw gay image clipped
            ninjas.Drawing.drawImageScaledClipped
            (
                ninjas.Main.game.engine.canvasSystem.getCanvasContext(),
                this.imageGay,
                0,
                0,
                imageWidthToDraw,
                this.imageGay.height,
                imageX,
                imageY,
                imageWidthToDraw,
                this.imageGay.height
            );
        }
    }
