
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   All sprites the game makes use of.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Sprite
    {
        /** Sprite 'ninja girl standing right'. */
        public      static      SPRITE_NINJA_GIRL_STANDING_RIGHT            :Array<string>      =
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
        ];

        /** Sprite 'crate'. */
        public      static      SPRITE_CRATE                                :Array<string>      =
        [
            ninjas.Image.IMAGE_BOX,
        ];

        /** Sprite 'item'. */
        public      static      SPRITE_ITEM                                 :Array<string>      =
        [
            ninjas.Image.IMAGE_ITEM,
        ];

        /** Sprite 'tree'. */
        public      static      SPRITE_TREE                                 :Array<string>      =
        [
            ninjas.Image.IMAGE_TREE,
        ];

        // TODO all to SpriteSystem

        /** All image ids this sprite consists of. TODO private */
        public                  imageIds                                    :Array<string>      = null;
        /** Flags if this sprite has only one frame. */
        private                 singleFramed                                :boolean            = false;

        /** The id of the current frame for this sprite. TODO private */
        public                  currentFrame                                :number             = 0;
        /** The width of all images in this sprite. TODO private with getter */
        public                  width                                       :number             = 0;
        /** The height of all images in this sprite. TODO private with getter */
        public                  height                                      :number             = 0;

        /***************************************************************************************************************
        *   Creates a new sprite.
        *
        *   @param imageIds All image ids this sprite consists of.
        ***************************************************************************************************************/
        public constructor( imageIds:Array<string> )
        {
            this.imageIds     = imageIds;
            this.singleFramed = ( this.imageIds.length == 1 );

            this.width  = ninjas.Main.game.imageSystem.getImage( this.imageIds[ 0 ] ).width;
            this.height = ninjas.Main.game.imageSystem.getImage( this.imageIds[ 0 ] ).height;
        }

        /***************************************************************************************************************
        *   Sets the next frame for this sprite.
        *
        *   @return If the frame actually changed.
        ***************************************************************************************************************/
        public nextFrame()
        {
            // no changes for single framed sprites
            if ( this.singleFramed )
            {
                return false;
            }

            // next frame
            ++this.currentFrame;

            // reset frame on reaching upper bound
            if ( this.currentFrame >= this.imageIds.length )
            {
                this.currentFrame = 0;
            }

            return true;
        }
    }
