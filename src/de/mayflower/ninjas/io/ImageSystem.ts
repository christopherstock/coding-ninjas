
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   All images the game makes use of.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class ImageSystem
    {
        /** All image file names to load. TODO private! */
        public          fileNames                       :Array<string>                  = null;
        /** The method to invoke when all images are loaded. */
        private         onLoadComplete                  :Function                       = null;

        /** The number of currently loaded images. */
        private         loadedImageCount                :number                         = 0;
        /** All loaded image objects. TODO private! */
        public          images                          :Array<HTMLImageElement>        = [];

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
            ninjas.Debug.image.log( "Loading [" + this.fileNames.length + "] images" );

            // load all images
            for ( let i = 0; i < this.fileNames.length; i++ )
            {
                this.images[ this.fileNames[ i ] ]        = new Image();
                this.images[ this.fileNames[ i ] ].src    = this.fileNames[ i ];
                this.images[ this.fileNames[ i ] ].onload = this.onLoadImage;
            }
        }

        /***************************************************************************************************************
        *   Mirrors all specified image files in system memory.
        ***************************************************************************************************************/
        public mirrorImages() : void
        {
            ninjas.Debug.image.log( "Mirroring [" + this.fileNames.length + "] images" );

            // mirror all images
            for ( let i = 0; i < this.fileNames.length; i++ )
            {
                this.images[ this.fileNames[ i ] ] = ninjas.IO.flipImageHorizontal(
                    this.images[ this.fileNames[ i ] ],
                    this.onMirrorImage
                );
            }
        }

        /***************************************************************************************************************
        *   Being invoked when one image was loaded completely.
        *
        *   @param event The according image event.
        ***************************************************************************************************************/
        private onLoadImage=( event:Event ) : void =>
        {
            if ( ++this.loadedImageCount == this.fileNames.length )
            {
                ninjas.Debug.image.log( "All [" + this.fileNames.length + "] images loaded" );

                this.mirrorImages();
            }
        };

        /***************************************************************************************************************
        *   Being invoked when one image was mirrored.
        *
        *   @param event The according image event.
        ***************************************************************************************************************/
        private onMirrorImage=( event:Event ) : void =>
        {
            ninjas.Debug.image.log( "Mirrored image completed!" );

            if ( ++this.loadedImageCount == this.fileNames.length * 2 )
            {
                ninjas.Debug.image.log( "All [" + this.fileNames.length + "] images mirrored" );

                this.onLoadComplete();
            }
        }
    }
