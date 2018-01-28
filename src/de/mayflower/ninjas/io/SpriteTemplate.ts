
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The sprite template that specifies images and their meta information.
    *
    *   TODO simplify sprite-image-system's frame ranges!
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SpriteTemplate
    {
        /** Sprite 'ninja girl standing left'. */
        public      static  SPRITE_NINJA_GIRL_STANDING_LEFT             :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_10,
            ],
            5,
            true
        );

        /** Sprite 'ninja girl standing right'. */
        public      static  SPRITE_NINJA_GIRL_STANDING_RIGHT            :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_10,
            ],
            5,
            false
        );

        /** Sprite 'ninja girl walking left'. */
        public      static  SPRITE_NINJA_GIRL_WALKING_LEFT              :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_10,
            ],
            5,
            true
        );

        /** Sprite 'ninja girl walking right'. */
        public      static  SPRITE_NINJA_GIRL_WALKING_RIGHT             :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_WALKING_RIGHT_FRAME_10,
            ],
            5,
            false
        );

        /** Sprite 'crate'. */
        public      static  SPRITE_CRATE                                :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_BOX,
            ],
            10,
            false
        );

        /** Sprite 'item'. */
        public      static  SPRITE_ITEM                                 :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_ITEM,
            ],
            10,
            false
        );

        /** Sprite 'tree'. */
        public      static  SPRITE_TREE                                 :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_TREE,
            ],
            10,
            false
        );

        /** A reference over all sprite templates. */
        private     static  ALL_SPRITE_TEMPLATES                        :Array<SpriteTemplate>  =
        [
            SpriteTemplate.SPRITE_NINJA_GIRL_STANDING_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_STANDING_RIGHT,
            SpriteTemplate.SPRITE_NINJA_GIRL_WALKING_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_WALKING_RIGHT,
            SpriteTemplate.SPRITE_CRATE,
            SpriteTemplate.SPRITE_ITEM,
            SpriteTemplate.SPRITE_TREE,
        ];

        /** All image ids this sprite consists of. TODO private */
        public                  imageIds                                :Array<string>          = null;
        /** The number of ticks between frame changes. */
        public                  ticksBetweenFrames                      :number                 = 0;
        /** Specifies if all frames in this sprite should be mirrored. */
        public                  mirrored                                :boolean                = false;

        /** Flags if this sprite has only one frame. */
        public                  singleFramed                            :boolean                = false;

        /** The width of all images in this sprite. TODO private with getter */
        public                  width                                   :number                 = 0;
        /** The height of all images in this sprite. TODO private with getter */
        public                  height                                  :number                 = 0;

        /***************************************************************************************************************
        *   Creates a new sprite.
        *
        *   @param imageIds           All image ids this sprite consists of.
        *   @param ticksBetweenFrames The number of ticks to delay until the frame is changed.
        *   @param mirrored           Specifies if all frames in this sprite should be mirrored.
        ***************************************************************************************************************/
        public constructor( imageIds:Array<string>, ticksBetweenFrames:number, mirrored:boolean )
        {
            this.imageIds           = imageIds;
            this.ticksBetweenFrames = ticksBetweenFrames;
            this.mirrored           = mirrored;

            this.singleFramed       = ( this.imageIds.length == 1 );

            if ( this.imageIds.length == 0 )
            {
                throw new Error( "Fatal! Trying to construct empty sprite!" );
            }
        }

        /***************************************************************************************************************
        *   Assigns the image dimensions of the first frame to all sprite templates.
        ***************************************************************************************************************/
        public static assignAllImageSizes()
        {
            for ( let i = 0; i < SpriteTemplate.ALL_SPRITE_TEMPLATES.length; ++i )
            {
                SpriteTemplate.ALL_SPRITE_TEMPLATES[ i ].assignImageSizes();
            }
        }

        /***************************************************************************************************************
        *   Assigns the image dimensions of the first frame for this sprite template.
        ***************************************************************************************************************/
        private assignImageSizes()
        {
            this.width  = ninjas.Main.game.imageSystem.getImage( this.imageIds[ 0 ] ).width;
            this.height = ninjas.Main.game.imageSystem.getImage( this.imageIds[ 0 ] ).height;

            console.log( ">> Assigned [" + this.width + "][" + this.height + "]" );

            // browse all frames and alert on differing dimensions
            for ( let i = 0; i < this.imageIds.length; ++i )
            {
                if (
                       this.width  != ninjas.Main.game.imageSystem.getImage( this.imageIds[ i ] ).width
                    || this.height != ninjas.Main.game.imageSystem.getImage( this.imageIds[ i ] ).height
                )
                {
                    throw new Error( "Differing sprite frame size detected in image id [" + this.imageIds[ i ] + "]" );
                }
            }
        }
    }
