
    /*******************************************************************************************************************
    *   Offers orthogonal drawing functionality.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Drawing
    {
        /***************************************************************************************************************
        *   Strokes a line with the specified points color and size.
        *
        *   @param  ctx The rendering context.
        *   @param  x1  The start point's x.
        *   @param  y1  The start point's y.
        *   @param  x2  The end point's x.
        *   @param  y2  The end point's y.
        *   @param  col A stroke color.
        ***************************************************************************************************************/
        public static strokeLine( ctx:CanvasRenderingContext2D, x1:number, y1:number, x2:number, y2:number, col:string )
        {
            ctx.strokeStyle = col;
            ctx.lineWidth   = 1.0;

            ctx.beginPath();
            ctx.moveTo( x1, y1 );
            ctx.lineTo( x2, y2 );
            ctx.stroke();
        }

        /***************************************************************************************************************
        *   Draws a rect's stroke with the specified dimensions and color.
        *
        *   @param  ctx        The rendering context.
        *   @param  x          The left  coordinate.
        *   @param  y          The right coordinate.
        *   @param  width      The desired width.
        *   @param  height     The desired height.
        *   @param  col        A stroke color.
        ***************************************************************************************************************/
        public static strokeRect( ctx:CanvasRenderingContext2D, x:number, y:number, width:number, height:number, col:string )
        {
            ctx.strokeStyle = col;
            ctx.lineWidth   = 1.0;

            ctx.strokeRect( x, y, width, height );
        }

        /***************************************************************************************************************
        *   Fills a rect with the specified dimensions and color.
        *
        *   @param  ctx     The rendering context.
        *   @param  x       The left  coordinate.
        *   @param  y       The right coordinate.
        *   @param  width   The desired width.
        *   @param  height  The desired height.
        *   @param  col     A fill color.
        ***************************************************************************************************************/
        public static fillRect( ctx:CanvasRenderingContext2D, x:number, y:number, width:number, height:number, col:string )
        {
            ctx.fillStyle = col;
            ctx.fillRect( x, y, width, height );
        }

        /***************************************************************************************************************
        *   Draws an image at the specified location with a specified anchor.
        *
        *   @param  ctx         The rendering context
        *   @param  img         The image to draw.
        *   @param  x           Drawing position x.
        *   @param  y           Drawing position y.
        ***************************************************************************************************************/
        public static drawImage( ctx:CanvasRenderingContext2D, img:HTMLImageElement, x:number, y:number )
        {
            Drawing.drawImageScaledClipped( ctx, img, 0, 0, img.width, img.height, x, y, img.width, img.height );
        }

        /***************************************************************************************************************
        *   Draws an image at the specified location with a specified anchor
        *   and scales it to the given destiny dimensions.
        *
        *   @param  ctx         The rendering context
        *   @param  img         The image to draw.
        *   @param  srcX        Clipping position x.
        *   @param  srcY        Clipping position y.
        *   @param  srcWidth    Clipping width.
        *   @param  srcHeight   Clipping height.
        *   @param  destX       Drawing position x.
        *   @param  destY       Drawing position y.
        *   @param  destWidth   Destination width.
        *   @param  destHeight  Destination height.
        ***************************************************************************************************************/
        public static drawImageScaledClipped
        (
            ctx         :CanvasRenderingContext2D,
            img         :HTMLImageElement,
            srcX        :number,
            srcY        :number,
            srcWidth    :number,
            srcHeight   :number,
            destX       :number,
            destY       :number,
            destWidth   :number,
            destHeight  :number
        )
        {
            ctx.drawImage( img, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight );
        }
    }
