
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   Possible decisions for looping a sprite.
    *******************************************************************************************************************/
    export enum LoopSprite
    {
        YES,
        NO,
    }

    /*******************************************************************************************************************
    *   The sprite template that specifies images and their meta information.
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
            ninjas.MirrorImage.YES,
            LoopSprite.YES
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
            ninjas.MirrorImage.NO,
            LoopSprite.YES
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
            ninjas.MirrorImage.YES,
            LoopSprite.YES
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
            ninjas.MirrorImage.NO,
            LoopSprite.YES
        );

        /** Sprite 'ninja girl jumping left'. */
        public      static  SPRITE_NINJA_GIRL_JUMPING_LEFT              :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_JUMPING_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_JUMPING_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_JUMPING_RIGHT_FRAME_3,
            ],
            8,
            ninjas.MirrorImage.YES,
            LoopSprite.NO
        );

        /** Sprite 'ninja girl jumping right'. */
        public      static  SPRITE_NINJA_GIRL_JUMPING_RIGHT             :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_JUMPING_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_JUMPING_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_JUMPING_RIGHT_FRAME_3,
            ],
            8,
            ninjas.MirrorImage.NO,
            LoopSprite.NO
        );

        /** Sprite 'ninja girl falling left'. */
        public      static  SPRITE_NINJA_GIRL_FALLING_LEFT              :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_FALLING_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_FALLING_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_FALLING_RIGHT_FRAME_3,
            ],
            10,
            ninjas.MirrorImage.YES,
            LoopSprite.NO
        );

        /** Sprite 'ninja girl falling right'. */
        public      static  SPRITE_NINJA_GIRL_FALLING_RIGHT             :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_FALLING_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_FALLING_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_FALLING_RIGHT_FRAME_3,
            ],
            10,
            ninjas.MirrorImage.NO,
            LoopSprite.NO
        );

        /** A reference over all sprite templates. */
        private     static  ALL_SPRITE_TEMPLATES                        :Array<SpriteTemplate>  =
        [
            SpriteTemplate.SPRITE_NINJA_GIRL_STANDING_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_STANDING_RIGHT,
            SpriteTemplate.SPRITE_NINJA_GIRL_WALKING_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_WALKING_RIGHT,
            SpriteTemplate.SPRITE_NINJA_GIRL_JUMPING_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_JUMPING_RIGHT,
            SpriteTemplate.SPRITE_NINJA_GIRL_FALLING_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_FALLING_RIGHT,
        ];

        /** All image ids this sprite consists of. */
        public                  imageIds                                :Array<string>          = null;
        /** The number of ticks between frame changes. */
        public                  ticksBetweenFrames                      :number                 = 0;
        /** Specifies if all frames in this sprite should be mirrored. */
        public                  mirrored                                :ninjas.MirrorImage     = null;
        /** Specifies if the frame animation should be repeated infinitely. */
        public                  loop                                    :LoopSprite             = null;

        /** Flags if this sprite has only one frame. */
        public                  singleFramed                            :boolean                = false;

        /** The width of all images in this sprite. */
        public                  width                                   :number                 = 0;
        /** The height of all images in this sprite. */
        public                  height                                  :number                 = 0;

        /***************************************************************************************************************
        *   Creates a new sprite.
        *
        *   @param imageIds           All image ids this sprite consists of.
        *   @param ticksBetweenFrames The number of ticks to delay until the frame is changed.
        *   @param mirrored           Specifies if all frames in this sprite should be mirrored.
        *   @param loop               Specifies if the frame animation should be repeated infinitely.
        ***************************************************************************************************************/
        private constructor( imageIds:Array<string>, ticksBetweenFrames:number, mirrored:ninjas.MirrorImage, loop:LoopSprite )
        {
            this.imageIds           = imageIds;
            this.ticksBetweenFrames = ticksBetweenFrames;
            this.mirrored           = mirrored;
            this.loop               = loop;

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
        *   Creates a single framed sprite template of the specified image.
        *
        *   @param imageId The id of the image to use for this sprite.
        ***************************************************************************************************************/
        public static createFromSingleImage( imageId:string )
        {
            return new SpriteTemplate(
                [ imageId ],
                0,
                ninjas.MirrorImage.NO,
                ninjas.LoopSprite.NO
            );
        }

        /***************************************************************************************************************
        *   Assigns the image dimensions of the first frame for this sprite template.
        ***************************************************************************************************************/
        private assignImageSizes()
        {
            this.width  = ninjas.Main.game.engine.imageSystem.getImage( this.imageIds[ 0 ] ).width;
            this.height = ninjas.Main.game.engine.imageSystem.getImage( this.imageIds[ 0 ] ).height;

            // browse all frames and alert on differing dimensions
            for ( let i = 0; i < this.imageIds.length; ++i )
            {
                if (
                       this.width  != ninjas.Main.game.engine.imageSystem.getImage( this.imageIds[ i ] ).width
                    || this.height != ninjas.Main.game.engine.imageSystem.getImage( this.imageIds[ i ] ).height
                )
                {
                    throw new Error( "Differing sprite frame size detected in image id [" + this.imageIds[ i ] + "]" );
                }
            }
        }
    }
