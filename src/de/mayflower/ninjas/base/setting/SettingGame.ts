
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   All adjustments and balancings for the application.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class SettingGame
    {
        /** The application's internal name. */
        public      static  readonly    TITLE                                       :string                     = "Coding Ninjas, (c) 2018 Mayflower GmbH" + ", " + ninjas.Version.CURRENT_VERSION.getVersionDescriptor();

        /** The delay delta between ticks in ms. */
        public      static  readonly    TICK_DELAY_DELTA                            :number                     = 10.0;
        /** The rendering delta between render ticks. */
        public      static  readonly    RENDER_DELTA                                :number                     = 10.0;

        /** The outer border size for the site panel and all HUD elements in px. */
        public      static  readonly    BORDER_SIZE_OUTER                           :number                     = 20;
        /** The inner border size for the inner site panel container. */
        public      static  readonly    BORDER_SIZE_INNER                           :number                     = 50;
        /** The inner border size to the top for the inner site panel container. */
        public      static  readonly    BORDER_SIZE_INNER_TOP                       :number                     = 75;

        /** The player's start position X. */
        public      static  readonly    PLAYER_START_POSITION_X                     :number                     = 880;
        /** The player's start position Y. */
        public      static  readonly    PLAYER_START_POSITION_Y                     :number                     = 4300;

        /** The player's ticks being paralized on being punched back. */
        public      static  readonly    PUNCH_BACK_TICKS                            :number                     = 75;

        /** Enemy ticks for standing phases. */
        public      static  readonly    ENEMY_TICKS_STANDING_DEFAULT                :number                     = 250;

        /** The maximum width for the site panel. */
        public      static  readonly    SITE_PANEL_MAX_WIDTH                        :number                     = 600;
        /** The maximum height for the site panel. */
        public      static  readonly    SITE_PANEL_MAX_HEIGHT                       :number                     = 888;
        /** The duration for showing and hiding the site panel in ms. */
        public      static  readonly    SITE_PANEL_ANIMATION_DURATION               :number                     = 1000;

        /** The number of ticks for the initial blend panel to disappear. */
        public      static  readonly    BLEND_PANEL_TICKS                           :number                     = 250;

        /** The default scale factor for all sprites. */
        public      static  readonly    DEFAULT_SPRITE_SCALE                        :number                     = 1.0;
    }
