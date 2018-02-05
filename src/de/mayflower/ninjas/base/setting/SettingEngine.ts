
    /*******************************************************************************************************************
    *   All settings for the game engine.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SettingEngine
    {
        /** The minimum canvas2D width. */
        public  static  readonly    CANVAS_MIN_WIDTH                        :number             = 800;
        /** The minimum canvas2D height. */
        public  static  readonly    CANVAS_MIN_HEIGHT                       :number             = 600;
        /** The color of the canvas bg. */
        public  static  readonly    CANVAS_BG                               :string             = "#000000";

        /** The camera ration for the vertical axis. */
        public  static  readonly    CAMERA_RATIO_Y                          :number             = 0.6;
        /** The camera moving speed from 0.0 to 1.0. */
        public  static  readonly    CAMERA_MOVING_SPEED                     :number             = 0.04;
        /** The minimum camera moving speed in px per move. */
        public  static  readonly    CAMERA_MOVING_MINIMUM                   :number             = 2.0;
        /** The maximum camera moving speed in px per move. */
        public  static  readonly    CAMERA_MOVING_MAXIMUM                   :number             = 20.0;

        /** The relative path from index.html where all background images reside. */
        public  static  readonly    PATH_IMAGE_BG                           :string             = "res/image/bg/";
        /** The relative path from index.html where all player images reside. */
        public  static  readonly    PATH_IMAGE_PLAYER                       :string             = "res/image/player/";
        /** The relative path from index.html where all level images reside. */
        public  static  readonly    PATH_IMAGE_LEVEL                        :string             = "res/image/level/";
        /** The relative path from index.html where all site images reside. */
        public  static  readonly    PATH_IMAGE_SITE                         :string             = "res/image/site/";
        /** The relative path from index.html where all sounds reside. */
        public  static  readonly    PATH_SOUND                              :string             = "res/sound/";
    }
