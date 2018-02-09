
    /*******************************************************************************************************************
    *   All debug settings.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SettingDebug
    {
        /** The global debug switch. */
        public  static  readonly    DEBUG_MODE                              :boolean                    = true;

        /** Disables all sounds. */
        public  static  readonly    MUTE                                    :boolean                    = ( true && SettingDebug.DEBUG_MODE );

        /** Disables all sprites. */
        public  static  readonly    DISABLE_SPRITES                         :boolean                    = ( false && SettingDebug.DEBUG_MODE );

        /** The opacity for the debug colors. */
        public  static  readonly    COLOR_DEBUG_OPACITY                     :number                     = 1.0;
        /** The line width for debug lines. */
        public  static  readonly    COLOR_DEBUG_LINE_WIDTH                  :number                     = 1.0;
        /** The debug color for the player block. */
        public  static  readonly    COLOR_DEBUG_BORDER                      :string                     = "#ffffff";
        /** The debug color for the player block. */
        public  static  readonly    COLOR_DEBUG_PLAYER                      :string                     = "#7cd1ee";
        /** The debug color for the enemy block. */
        public  static  readonly    COLOR_DEBUG_ENEMY                       :string                     = "#ff7e68";
        /** The debug color for a box. */
        public  static  readonly    COLOR_DEBUG_MOVABLE                         :string                     = "#ffbf54";
        /** The debug color for an obstacle. */
        public  static  readonly    COLOR_DEBUG_OBSTACLE                    :string                     = "#a6a6a6";
        /** The debug color for a sigsaw. */
        public  static  readonly    COLOR_DEBUG_SIGSAW                      :string                     = "#c46c9c";
        /** The debug color for a sigsaw joint. */
        public  static  readonly    COLOR_DEBUG_SIGSAW_JOINT                :string                     = "#ba3380";
        /** The debug color for a bounce. */
        public  static  readonly    COLOR_DEBUG_BOUNCE                      :string                     = "#d815a9";
        /** The debug color for a bounce joint. */
        public  static  readonly    COLOR_DEBUG_BOUNCE_JOINT                :string                     = "#e629a2";
        /** The debug color for the item. */
        public  static  readonly    COLOR_DEBUG_ITEM                        :string                     = "#fcff97";
        /** The debug color for a decoration. */
        public  static  readonly    COLOR_DEBUG_DECORATION                  :string                     = "#b5fffd";
        /** The debug color for a site trigger. */
        public  static  readonly    COLOR_DEBUG_SITE_TRIGGER                :string                     = "#deffd9";
        /** The debug color for a platform. */
        public  static  readonly    COLOR_DEBUG_PLATFORM                    :string                     = "#d2d2d2";
    }
