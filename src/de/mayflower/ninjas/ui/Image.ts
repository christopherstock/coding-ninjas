
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   All images the game makes use of.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Image
    {
        /** Image resource 'player standing'. */
        public      static      IMAGE_PLAYER_STAND                      :string         = ninjas.Setting.PATH_IMAGE_PLAYER + "stand.png";
        /** Image resource 'player falling'. */
        public      static      IMAGE_PLAYER_FALL                       :string         = ninjas.Setting.PATH_IMAGE_PLAYER + "fall.png";

        /** Image resource 'item'. */
        public      static      IMAGE_ITEM                              :string         = ninjas.Setting.PATH_IMAGE_LEVEL + "item.png";
        /** Image resource 'tree'. */
        public      static      IMAGE_TREE                              :string         = ninjas.Setting.PATH_IMAGE_LEVEL + "tree.png";
        /** Image resource 'box'. */
        public      static      IMAGE_BOX                               :string         = ninjas.Setting.PATH_IMAGE_LEVEL + "box.jpg";
    }
