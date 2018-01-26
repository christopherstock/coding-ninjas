
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   All images the game makes use of.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Image
    {
        /** Image resource 'ninja girl standing right frame 1'. */
        public      static      IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_1     :string         = ninjas.Setting.PATH_IMAGE_PLAYER + "standRight/01.png";

        /** Image resource 'player standing'. */
        public      static      IMAGE_PLAYER_STAND                          :string         = ninjas.Setting.PATH_IMAGE_PLAYER + "stand.png";
        /** Image resource 'player falling'. */
        public      static      IMAGE_PLAYER_FALL                           :string         = ninjas.Setting.PATH_IMAGE_PLAYER + "fall.png";

        /** Image resource 'item'. */
        public      static      IMAGE_ITEM                                  :string         = ninjas.Setting.PATH_IMAGE_LEVEL + "item.png";
        /** Image resource 'tree'. */
        public      static      IMAGE_TREE                                  :string         = ninjas.Setting.PATH_IMAGE_LEVEL + "tree.png";
        /** Image resource 'box'. */
        public      static      IMAGE_BOX                                   :string         = ninjas.Setting.PATH_IMAGE_LEVEL + "box.jpg";

        /** An array holding all filenames of all images to load. */
        public      static      FILE_NAMES                                  :Array<string>  =
        [
            Image.IMAGE_NINJA_GIRL_STANDING_RIGHT_FRAME_1,
            Image.IMAGE_PLAYER_STAND,
            Image.IMAGE_PLAYER_FALL,
            Image.IMAGE_ITEM,
            Image.IMAGE_TREE,
            Image.IMAGE_BOX,
        ];
    }
