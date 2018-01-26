
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

        /** All image ids this sprite consists of. */
        public                  imageIds                                    :Array<string>      = null;

        /** The id of the current frame for this sprite. */
        public                  currentFrame                                :number             = 0;

        /***************************************************************************************************************
        *   Creates a new sprite.
        *
        *   @param imageIds All image ids this sprite consists of.
        ***************************************************************************************************************/
        public constructor( imageIds:Array<string> )
        {
            this.imageIds = imageIds;
        }
    }