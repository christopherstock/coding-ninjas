
    /*******************************************************************************************************************
    *   Offers additional Input/Output functionality.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class IO
    {
        /***************************************************************************************************************
        *   Flips an image horizontally.
        *
        *   @param original      The image to flip horizontally.
        *   @param onLoadCallack The function to invoke when this image is loaded.
        *
        *   @return The horizontally flipped image.
        ***************************************************************************************************************/
        public static flipImageHorizontal( original:HTMLImageElement, onLoadCallack:Function ) : HTMLImageElement
        {
            let canvas:HTMLCanvasElement = document.createElement( "canvas" );
            canvas.width = original.width;
            canvas.height = original.height;

            let context = canvas.getContext( "2d" );
            context.scale( -1,1 );
            context.drawImage( original, -original.width, 0 );

            let ret:HTMLImageElement = new Image();
            ret.src = canvas.toDataURL();
            ret.onload = ( event:Event ) => { onLoadCallack(); };

            return ret;
        }
    }
