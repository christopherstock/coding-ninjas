
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   Possible decisions for mirroring an image.
    *******************************************************************************************************************/
    export enum MirrorImage
    {
        YES,
        NO,
    }

    /*******************************************************************************************************************
    *   Possible decisions for looping a sprite.
    *******************************************************************************************************************/
    export enum LoopSprite
    {
        /* Yes. */
        YES,
        /* No. */
        NO,
    }

    /*******************************************************************************************************************
    *   Specifies if this template should start with a random frame instead of frame 0.
    *******************************************************************************************************************/
    export enum RandomStartFrame
    {
        /* Yes. */
        YES,
        /* No. */
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
        /** Sprite 'ninja girl stand left'. */
        public      static  SPRITE_NINJA_GIRL_STAND_LEFT                :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.YES,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'ninja girl stand right'. */
        public      static  SPRITE_NINJA_GIRL_STAND_RIGHT               :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_STAND_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'ninja girl walk left'. */
        public      static  SPRITE_NINJA_GIRL_WALK_LEFT                 :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.YES,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'ninja girl walk right'. */
        public      static  SPRITE_NINJA_GIRL_WALK_RIGHT                :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_WALK_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'ninja girl jump left'. */
        public      static  SPRITE_NINJA_GIRL_JUMP_LEFT                 :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_3,
            ],
            8,
            MirrorImage.YES,
            LoopSprite.NO,
            RandomStartFrame.NO
        );

        /** Sprite 'ninja girl jump right'. */
        public      static  SPRITE_NINJA_GIRL_JUMP_RIGHT                :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_JUMP_RIGHT_FRAME_3,
            ],
            8,
            MirrorImage.NO,
            LoopSprite.NO,
            RandomStartFrame.NO
        );

        /** Sprite 'ninja girl fall left'. */
        public      static  SPRITE_NINJA_GIRL_FALL_LEFT                 :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_3,
            ],
            8,
            MirrorImage.YES,
            LoopSprite.NO,
            RandomStartFrame.NO
        );

        /** Sprite 'ninja girl fall right'. */
        public      static  SPRITE_NINJA_GIRL_FALL_RIGHT                :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_FALL_RIGHT_FRAME_3,
            ],
            8,
            MirrorImage.NO,
            LoopSprite.NO,
            RandomStartFrame.NO
        );

        /** Sprite 'ninja girl glide left'. */
        public      static  SPRITE_NINJA_GIRL_GLIDE_LEFT                :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.YES,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'ninja girl glide right'. */
        public      static  SPRITE_NINJA_GIRL_GLIDE_RIGHT               :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_NINJA_GIRL_GLIDE_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'enemy ninja 1 stand left'. */
        public      static  SPRITE_ENEMY_NINJA_1_STAND_LEFT             :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.YES,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'enemy ninja 1 stand right'. */
        public      static  SPRITE_ENEMY_NINJA_1_STAND_RIGHT            :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_STAND_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'enemy ninja 1 walk left'. */
        public      static  SPRITE_ENEMY_NINJA_1_WALK_LEFT              :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.YES,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'enemy ninja 1 walk right'. */
        public      static  SPRITE_ENEMY_NINJA_1_WALK_RIGHT             :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_5,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_6,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_7,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_8,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_9,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_WALK_RIGHT_FRAME_10,
            ],
            8,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'enemy ninja 1 die left'. */
        public      static  SPRITE_ENEMY_NINJA_1_DIE_LEFT               :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_5,
            ],
            16,
            MirrorImage.YES,
            LoopSprite.NO,
            RandomStartFrame.NO
        );

        /** Sprite 'enemy ninja 1 die right'. */
        public      static  SPRITE_ENEMY_NINJA_1_DIE_RIGHT              :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_1,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_2,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_3,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_4,
                ninjas.Image.IMAGE_ENEMY_NINJA_1_DIE_RIGHT_FRAME_5,
            ],
            16,
            MirrorImage.NO,
            LoopSprite.NO,
            RandomStartFrame.NO
        );

        /** Sprite 'water top'. */
        public      static  SPRITE_WATER_TOP                            :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_WATER_TOP_FRAME_1,
                ninjas.Image.IMAGE_WATER_TOP_FRAME_2,
                ninjas.Image.IMAGE_WATER_TOP_FRAME_3,
                ninjas.Image.IMAGE_WATER_TOP_FRAME_4,
                ninjas.Image.IMAGE_WATER_TOP_FRAME_5,
                ninjas.Image.IMAGE_WATER_TOP_FRAME_6,
                ninjas.Image.IMAGE_WATER_TOP_FRAME_7,
                ninjas.Image.IMAGE_WATER_TOP_FRAME_8,
            ],
            12,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.NO
        );

        /** Sprite 'grass 1'. */
        public      static  SPRITE_GRASS_1                              :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_GRASS_1_FRAME_1,
                ninjas.Image.IMAGE_GRASS_1_FRAME_2,
                ninjas.Image.IMAGE_GRASS_1_FRAME_3,
                ninjas.Image.IMAGE_GRASS_1_FRAME_4,
                ninjas.Image.IMAGE_GRASS_1_FRAME_5,
                ninjas.Image.IMAGE_GRASS_1_FRAME_6,
                ninjas.Image.IMAGE_GRASS_1_FRAME_7,
                ninjas.Image.IMAGE_GRASS_1_FRAME_8,
                ninjas.Image.IMAGE_GRASS_1_FRAME_9,
                ninjas.Image.IMAGE_GRASS_1_FRAME_10,
                ninjas.Image.IMAGE_GRASS_1_FRAME_11,
                ninjas.Image.IMAGE_GRASS_1_FRAME_12,
            ],
            12,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.YES
        );

        /** Sprite 'grass 2'. */
        public      static  SPRITE_GRASS_2                              :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_GRASS_2_FRAME_1,
                ninjas.Image.IMAGE_GRASS_2_FRAME_2,
                ninjas.Image.IMAGE_GRASS_2_FRAME_3,
                ninjas.Image.IMAGE_GRASS_2_FRAME_4,
                ninjas.Image.IMAGE_GRASS_2_FRAME_5,
                ninjas.Image.IMAGE_GRASS_2_FRAME_6,
                ninjas.Image.IMAGE_GRASS_2_FRAME_7,
                ninjas.Image.IMAGE_GRASS_2_FRAME_8,
                ninjas.Image.IMAGE_GRASS_2_FRAME_9,
                ninjas.Image.IMAGE_GRASS_2_FRAME_10,
                ninjas.Image.IMAGE_GRASS_2_FRAME_11,
                ninjas.Image.IMAGE_GRASS_2_FRAME_12,
            ],
            12,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.YES
        );


        /** Sprite 'grass 3'. */
        public      static  SPRITE_GRASS_3                              :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_GRASS_3_FRAME_1,
                ninjas.Image.IMAGE_GRASS_3_FRAME_2,
                ninjas.Image.IMAGE_GRASS_3_FRAME_3,
                ninjas.Image.IMAGE_GRASS_3_FRAME_4,
                ninjas.Image.IMAGE_GRASS_3_FRAME_5,
                ninjas.Image.IMAGE_GRASS_3_FRAME_6,
                ninjas.Image.IMAGE_GRASS_3_FRAME_7,
                ninjas.Image.IMAGE_GRASS_3_FRAME_8,
                ninjas.Image.IMAGE_GRASS_3_FRAME_9,
                ninjas.Image.IMAGE_GRASS_3_FRAME_10,
                ninjas.Image.IMAGE_GRASS_3_FRAME_11,
                ninjas.Image.IMAGE_GRASS_3_FRAME_12,
            ],
            12,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.YES
        );

        /** Sprite 'grass 4'. */
        public      static  SPRITE_GRASS_4                              :SpriteTemplate         = new SpriteTemplate
        (
            [
                ninjas.Image.IMAGE_GRASS_4_FRAME_1,
                ninjas.Image.IMAGE_GRASS_4_FRAME_2,
                ninjas.Image.IMAGE_GRASS_4_FRAME_3,
                ninjas.Image.IMAGE_GRASS_4_FRAME_4,
                ninjas.Image.IMAGE_GRASS_4_FRAME_5,
                ninjas.Image.IMAGE_GRASS_4_FRAME_6,
                ninjas.Image.IMAGE_GRASS_4_FRAME_7,
                ninjas.Image.IMAGE_GRASS_4_FRAME_8,
                ninjas.Image.IMAGE_GRASS_4_FRAME_9,
                ninjas.Image.IMAGE_GRASS_4_FRAME_10,
                ninjas.Image.IMAGE_GRASS_4_FRAME_11,
                ninjas.Image.IMAGE_GRASS_4_FRAME_12,
            ],
            12,
            MirrorImage.NO,
            LoopSprite.YES,
            RandomStartFrame.YES
        );

        /** A reference over all sprite templates. */
        private     static  ALL_SPRITE_TEMPLATES                        :Array<SpriteTemplate>  =
        [
            SpriteTemplate.SPRITE_NINJA_GIRL_STAND_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_STAND_RIGHT,
            SpriteTemplate.SPRITE_NINJA_GIRL_WALK_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_WALK_RIGHT,
            SpriteTemplate.SPRITE_NINJA_GIRL_JUMP_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_JUMP_RIGHT,
            SpriteTemplate.SPRITE_NINJA_GIRL_FALL_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_FALL_RIGHT,
            SpriteTemplate.SPRITE_NINJA_GIRL_GLIDE_LEFT,
            SpriteTemplate.SPRITE_NINJA_GIRL_GLIDE_RIGHT,
            SpriteTemplate.SPRITE_ENEMY_NINJA_1_STAND_LEFT,
            SpriteTemplate.SPRITE_ENEMY_NINJA_1_STAND_RIGHT,
            SpriteTemplate.SPRITE_ENEMY_NINJA_1_WALK_LEFT,
            SpriteTemplate.SPRITE_ENEMY_NINJA_1_WALK_RIGHT,
            SpriteTemplate.SPRITE_ENEMY_NINJA_1_DIE_LEFT,
            SpriteTemplate.SPRITE_ENEMY_NINJA_1_DIE_RIGHT,
            SpriteTemplate.SPRITE_WATER_TOP,
            SpriteTemplate.SPRITE_GRASS_1,
            SpriteTemplate.SPRITE_GRASS_2,
            SpriteTemplate.SPRITE_GRASS_3,
            SpriteTemplate.SPRITE_GRASS_4,
        ];

        /** All image ids this sprite consists of. */
        public                  imageIds                                :Array<string>          = null;
        /** The number of ticks between frame changes. */
        public                  ticksBetweenFrames                      :number                 = 0;
        /** Specifies if all frames in this sprite should be mirrored. */
        public                  mirrored                                :MirrorImage            = null;
        /** Specifies if the frame animation should be repeated infinitely. */
        public                  loop                                    :LoopSprite             = null;
        /** Specifies if the first frame should be random instead of frame 0. */
        public                  randomStartFrame                        :RandomStartFrame       = null;

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
        *   @param randomStartFrame   Specifies if this template should start with a random frame instead of frame 0.
        ***************************************************************************************************************/
        private constructor
        (
            imageIds           :Array<string>,
            ticksBetweenFrames :number,
            mirrored           :MirrorImage,
            loop               :LoopSprite,
            randomStartFrame   :RandomStartFrame
        )
        {
            this.imageIds           = imageIds;
            this.ticksBetweenFrames = ticksBetweenFrames;
            this.mirrored           = mirrored;
            this.loop               = loop;
            this.randomStartFrame   = randomStartFrame;

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
            for ( let spriteTemplate of SpriteTemplate.ALL_SPRITE_TEMPLATES )
            {
                spriteTemplate.assignImageSizes();
            }
        }

        /***************************************************************************************************************
        *   Creates a single framed sprite template of the specified image.
        *
        *   @param imageId The id of the image to use for this sprite.
        ***************************************************************************************************************/
        public static createFromSingleImage( imageId:string )
        {
            let spriteTemplate:SpriteTemplate = new SpriteTemplate(
                [ imageId ],
                0,
                MirrorImage.NO,
                LoopSprite.NO,
                RandomStartFrame.NO
            );

            spriteTemplate.width  = ninjas.Main.game.engine.imageSystem.getImage( imageId ).width;
            spriteTemplate.height = ninjas.Main.game.engine.imageSystem.getImage( imageId ).height;

            return spriteTemplate;
        }

        /***************************************************************************************************************
        *   Assigns the image dimensions of the first frame for this sprite template.
        ***************************************************************************************************************/
        private assignImageSizes()
        {
            this.width  = ninjas.Main.game.engine.imageSystem.getImage( this.imageIds[ 0 ] ).width;
            this.height = ninjas.Main.game.engine.imageSystem.getImage( this.imageIds[ 0 ] ).height;

            // browse all frames and alert on differing dimensions
            for ( let imageId of this.imageIds )
            {
                if (
                       this.width  != ninjas.Main.game.engine.imageSystem.getImage( imageId ).width
                    || this.height != ninjas.Main.game.engine.imageSystem.getImage( imageId ).height
                )
                {
                    throw new Error( "Differing sprite frame size detected in image id [" + imageId + "]" );
                }
            }
        }

        /***************************************************************************************************************
        *   Determines and returns an array of filenames for all images that needs to be mirrored.
        *
        *   @return An array with all filenames of images needing to be mirrored.
        ***************************************************************************************************************/
        public static getAllImagesToMirror() : Array<string>
        {
            let ret:Array<string> = [];

            for ( let spriteTemplate of SpriteTemplate.ALL_SPRITE_TEMPLATES )
            {
                if ( spriteTemplate.mirrored == MirrorImage.YES )
                {
                    for ( let image of spriteTemplate.imageIds )
                    {
                        ret.push( image );
                    }
                }
            }

            return ret;
        }
    }
