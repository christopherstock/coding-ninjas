
    import * as ninjas from '../ninjas';
    import * as matter from 'matter-js';

    /*******************************************************************************************************************
    *   All adjustments and balancings for the application.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Setting
    {
        /** The global debug switch. */
        public      static  readonly    DEBUG_MODE                                  :boolean                    = true;

        /** The application's internal name. */
        public      static  readonly    TITLE                                       :string                     = "Coding Ninjas, (c) 2018 Mayflower GmbH" + ", " + ninjas.Version.CURRENT_VERSION.getVersionDescriptor();
        /** Disables all sounds. */
        public      static  readonly    MUTE                                        :boolean                    = true;

        /** The delta between render ticks in ms. */
        public      static  readonly    RENDER_DELTA                                :number                     = 16.66;

        /** The minimum canvas2D width. */
        public      static  readonly    MIN_CANVAS_WIDTH                            :number                     = 800;
        /** The minimum canvas2D height. */
        public      static  readonly    MIN_CANVAS_HEIGHT                           :number                     = 600;

        /** The default jump power. */
        public      static  readonly    PLAYER_JUMP_POWER                           :number                     = -15.0;
        /** The player's speed in world coordinate per tick. */
        public      static  readonly    PLAYER_SPEED_MOVE                           :number                     = 7.5;

        /** The default vertical gravity for all levels. */
        public      static  readonly    DEFAULT_GRAVITY_Y                           :number                     = 1.0;

        /** The camera ration for the horizontal axis. TODO prune! > according to panel width! */
        public      static  readonly    CAMERA_RATIO_X                              :number                     = 0.25;
        /** The camera ration for the vertical axis. */
        public      static  readonly    CAMERA_RATIO_Y                              :number                     = 0.5;
        /** The camera moving speed from 0.0 to 1.0. */
        public      static  readonly    CAMERA_MOVING_SPEED                         :number                     = 0.075;
        /** The minimum camera moving speed in px per move. */
        public      static  readonly    CAMERA_MOVING_MINIMUM                       :number                     = 2.0;
        /** The maximum camera moving speed in px per move. */
        public      static  readonly    CAMERA_MOVING_MAXIMUM                       :number                     = 20.0;

        /** The color of the canvas bg. */
        public      static  readonly    CANVAS_BG                                   :string                     = "#000000";

        /** The border size for the site panel and all HUD elements in px. */
        public      static  readonly    SITE_BORDER_SIZE                            :number                     = 20;
        /** The background color of the site panel. */
        public      static  readonly    SITE_PANEL_BG_COLOR                         :string                     = "rgba( 255, 255, 255, 0.25 )";
        /** The maximum width for the site panel. */
        public      static  readonly    SITE_PANEL_MAX_WIDTH                        :number                     = 600;

        /** The opacity for the debug colors. */
        public      static  readonly    COLOR_DEBUG_OPACITY                         :number                     = 1.0;
        /** The line width for debug lines. */
        public      static  readonly    COLOR_DEBUG_LINE_WIDTH                      :number                     = 1.0;
        /** The debug color for the player block. */
        public      static  readonly    COLOR_DEBUG_BORDER                          :string                     = "#ffffff";
        /** The debug color for the player block. */
        public      static  readonly    COLOR_DEBUG_PLAYER                          :string                     = "#7cd1ee";
        /** The debug color for the enemy block. */
        public      static  readonly    COLOR_DEBUG_ENEMY                           :string                     = "#ff7e68";
        /** The debug color for a box. */
        public      static  readonly    COLOR_DEBUG_BOX                             :string                     = "#ffbf54";
        /** The debug color for an obstacle. */
        public      static  readonly    COLOR_DEBUG_OBSTACLE                        :string                     = "#a6a6a6";
        /** The debug color for a sigsaw. */
        public      static  readonly    COLOR_DEBUG_SIGSAW                          :string                     = "#c46c9c";
        /** The debug color for a sigsaw joint. */
        public      static  readonly    COLOR_DEBUG_SIGSAW_JOINT                    :string                     = "#ba3380";
        /** The debug color for a bounce. */
        public      static  readonly    COLOR_DEBUG_BOUNCE                          :string                     = "#d815a9";
        /** The debug color for a bounce joint. */
        public      static  readonly    COLOR_DEBUG_BOUNCE_JOINT                    :string                     = "#e629a2";
        /** The debug color for the item. */
        public      static  readonly    COLOR_DEBUG_ITEM                            :string                     = "#fcff97";
        /** The debug color for a decoration. */
        public      static  readonly    COLOR_DEBUG_DECORATION                      :string                     = "#b2ffbb";
        /** The debug color for a site trigger. */
        public      static  readonly    COLOR_DEBUG_SITE_TRIGGER                    :string                     = "#deffd9";
        /** The debug color for a platform. */
        public      static  readonly    COLOR_DEBUG_PLATFORM                        :string                     = "#d2d2d2";

        /** The relative path from index.html where all background images reside. */
        public      static  readonly    PATH_IMAGE_BG                               :string                     = "res/image/bg/";
        /** The relative path from index.html where all player images reside. */
        public      static  readonly    PATH_IMAGE_PLAYER                           :string                     = "res/image/player/";
        /** The relative path from index.html where all level images reside. */
        public      static  readonly    PATH_IMAGE_LEVEL                            :string                     = "res/image/level/";
        /** The relative path from index.html where all site images reside. */
        public      static  readonly    PATH_IMAGE_SITE                             :string                     = "res/image/site/";
        /** The relative path from index.html where all sounds reside. */
        public      static  readonly    PATH_SOUND                                  :string                     = "res/sound/";

        /** The default collision group for all game objects. */
        public      static  readonly    COLLISION_GROUP_COLLIDING                   :matter.ICollisionFilter    =
        {
                category: 0x0001,
                mask:     0x0002,
                group:    0x0003,
        };

        /** The collision group for all non-colliding items. */
        public      static  readonly    COLLISION_GROUP_NON_COLLIDING_ITEM          :matter.ICollisionFilter    =
        {
                category: 0x0004,
                mask:     0x0005,
                group:    0x0006,
        };

        /** The collision group for all non-colliding decos. */
        public      static  readonly    COLLISION_GROUP_NON_COLLIDING_DECO          :matter.ICollisionFilter    =
        {
                category: 0x0007,
                mask:     0x0008,
                group:    0x0009,
        };

        /** The collision group for all non-colliding dead enemies. */
        public      static  readonly    COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY    :matter.ICollisionFilter    =
        {
                category: 0x0010,
                mask:     0x0011,
                group:    0x0012,
        };
    }
