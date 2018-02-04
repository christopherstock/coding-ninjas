
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Manages the canvas.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class CanvasSystem
    {
        /** The canvas element. */
        private     canvas                  :HTMLCanvasElement              = null;
        /** The canvas rendering context. */
        private     canvasContext           :CanvasRenderingContext2D       = null;
        /** The current width of the canvas. */
        private     canvasWidth             :number                         = 0;
        /** The current height of the canvas. */
        private     canvasHeight            :number                         = 0;

        /***************************************************************************************************************
        *   Constructs a new canvas system.
        ***************************************************************************************************************/
        public constructor()
        {
            // create
            this.canvas = document.createElement( "canvas" );

            // reference 2d rendering context
            this.canvasContext = this.canvas.getContext( "2d" );

            // append to body
            document.body.appendChild( this.canvas );
        }

        /***************************************************************************************************************
        *   Updates the canvas dimensions according to current screen size.
        ***************************************************************************************************************/
        public updateDimensions() : void
        {
            this.canvasWidth  = window.innerWidth;
            this.canvasHeight = window.innerHeight;

            // clip to minimum canvas dimensions
            if ( this.canvasWidth  < ninjas.Setting.MIN_CANVAS_WIDTH  ) this.canvasWidth  = ninjas.Setting.MIN_CANVAS_WIDTH;
            if ( this.canvasHeight < ninjas.Setting.MIN_CANVAS_HEIGHT ) this.canvasHeight = ninjas.Setting.MIN_CANVAS_HEIGHT;

            ninjas.Debug.canvas.log( "Updated canvas dimensions to [" + this.canvasWidth + "x" + this.canvasHeight + "] " );
        }

        /***************************************************************************************************************
        *   Returns the current canvas width.
        *
        *   @return Current canvas width.
        ***************************************************************************************************************/
        public getWidth() : number
        {
            return this.canvasWidth;
        }

        /***************************************************************************************************************
        *   Returns the current canvas height.
        *
        *   @return Current canvas height.
        ***************************************************************************************************************/
        public getHeight() : number
        {
            return this.canvasHeight;
        }

        /***************************************************************************************************************
        *   Returns the current canvas object.
        *
        *   @return The HTML canvas object..
        ***************************************************************************************************************/
        public getCanvas() : HTMLCanvasElement
        {
            return this.canvas;
        }
    }