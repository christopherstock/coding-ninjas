
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
        *   @param onLoadCallack The function to invoke when the target image is mirrored.
        *
        *   @return The newly created but not already loaded mirrored image.
        ***************************************************************************************************************/
        public static flipImageHorizontal( original:HTMLImageElement, onLoadCallack:Function ) : HTMLImageElement
        {
            let canvas:HTMLCanvasElement = document.createElement( "canvas" );
            canvas.width  = original.width;
            canvas.height = original.height;

            let context = canvas.getContext( "2d" );
            context.scale( -1, 1 );
            context.drawImage( original, -original.width, 0 );

            let target:HTMLImageElement = new Image();
            target.src = canvas.toDataURL();
            target.onload = ( event:Event ) => { onLoadCallack(); };

            return target;
        }
    }
