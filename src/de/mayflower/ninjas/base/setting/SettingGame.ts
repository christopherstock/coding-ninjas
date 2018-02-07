
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   All adjustments and balancings for the application.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SettingGame
    {
        /** The application's internal name. */
        public      static  readonly    TITLE                                       :string                     = "Coding Ninjas, (c) 2018 Mayflower GmbH" + ", " + ninjas.Version.CURRENT_VERSION.getVersionDescriptor();

        /** The delay delta between ticks in ms. */
        public      static  readonly    TICK_DELAY_DELTA                            :number                     = 10.0;
        /** The rendering delta between render ticks. */
        public      static  readonly    RENDER_DELTA                                :number                     = 10.0;

        /** The border size for the site panel and all HUD elements in px. */
        public      static  readonly    BORDER_SIZE                                 :number                     = 20;

        /** The maximum width for the site panel. */
        public      static  readonly    SITE_PANEL_MAX_WIDTH                        :number                     = 600;
        /** The duration for showing and hiding the site panel in ms. */
        public      static  readonly    SITE_PANEL_ANIMATION_DURATION               :number                     = 1000;
    }
