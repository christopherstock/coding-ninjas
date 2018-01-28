
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
        /** The number of currently mirrored images. */
        private         mirroredImageCount              :number                         = 0;

        /** All loaded image objects. TODO private! */
        public          originalImages                  :Array<HTMLImageElement>        = [];
        /** All loaded and mirrored image objects. TODO private! */
        public          mirroredImages                  :Array<HTMLImageElement>        = [];

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
            return this.originalImages[ id ];
        }

        /***************************************************************************************************************
        *   Returns the mirrored image with the specified id.
        *
        *   @param id The id of the mirrored image to receive.
        ***************************************************************************************************************/
        public getMirroredImage( id:string ) : HTMLImageElement
        {
            return this.mirroredImages[ id ];
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
                this.originalImages[ this.fileNames[ i ] ]        = new Image();
                this.originalImages[ this.fileNames[ i ] ].src    = this.fileNames[ i ];
                this.originalImages[ this.fileNames[ i ] ].onload = this.onLoadImage;
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
                this.mirroredImages[ this.fileNames[ i ] ] = ninjas.IO.flipImageHorizontal(
                    this.originalImages[ this.fileNames[ i ] ],
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

            if ( ++this.mirroredImageCount == this.fileNames.length )
            {
                ninjas.Debug.image.log( "All [" + this.fileNames.length + "] images mirrored" );

                this.onLoadComplete();
            }
        }
    }
