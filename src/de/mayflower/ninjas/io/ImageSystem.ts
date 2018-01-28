
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   All images the game makes use of.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class ImageSystem
    {
        /** All image file names to load. */
        private         fileNames                       :Array<string>                  = null;
        /** The method to invoke when all images are loaded. */
        private         onLoadComplete                  :Function                       = null;

        /** The number of currently loaded images. */
        private         loadedImageCount                :number                         = 0;
        /** All loaded image objects. */
        private         images                          :Array<HTMLImageElement>        = [];

        public          testImage                       :HTMLImageElement               = null;

        /***************************************************************************************************************
        *   Preloads all images into memory.
        *
        *   @param fileNames      The names of all image files to load.
        *   @param onLoadComplete The method to invoke when all image files are loaded.
        ***************************************************************************************************************/
        public constructor( fileNames:Array<string>, onLoadComplete:Function )
        {
            this.fileNames      = fileNames;
            this.onLoadComplete = onLoadComplete;
        }

        /***************************************************************************************************************
        *   Returns the image with the specified id.
        *
        *   @param id The id of the image to receive.
        ***************************************************************************************************************/
        public getImage( id:string ) : HTMLImageElement
        {
            return this.images[ id ];
        }

        /***************************************************************************************************************
        *   Loads all specified image files into system memory.
        ***************************************************************************************************************/
        public loadImages() : void
        {
            ninjas.Debug.image.log( "Preloading [" + this.fileNames.length + "] images" );

            for ( let i = 0; i < this.fileNames.length; i++ )
            {
                this.images[ this.fileNames[ i ] ]        = new Image();
                this.images[ this.fileNames[ i ] ].src    = this.fileNames[ i ];
                this.images[ this.fileNames[ i ] ].onload = this.onLoadImage;
            }
        }

        /***************************************************************************************************************
        *   Being invoked when one image was loaded completely.
        *
        *   @param event The according image event.
        ***************************************************************************************************************/
        private onLoadImage=( event:Event ) : void =>
        {


            ninjas.Debug.bugfix.log( "Image loaded: " + this.images[ this.fileNames[ this.loadedImageCount ] ].width );

            console.log( "Load mirrored image.." );
            this.testImage = ninjas.IO.flipImageHorizontal(
                this.images[ this.fileNames[ this.loadedImageCount ] ],
                () => { console.log( "Mirrored image loaded!" ); }
            );
            console.log( "After loading mirrored image." );




            if ( ++this.loadedImageCount == this.fileNames.length )
            {
                ninjas.Debug.image.log( "All [" + this.fileNames.length + "] images loaded" );

                this.onLoadComplete();
            }
        };
    }
