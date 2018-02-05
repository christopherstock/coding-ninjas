
    import * as ninjas from '../../ninjas';
    import * as matter from 'matter-js';

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
        public      static  readonly    SITE_BORDER_SIZE                            :number                     = 20;
        /** The background color of the site panel. */
        public      static  readonly    SITE_PANEL_BG_COLOR                         :string                     = "rgba( 255, 255, 255, 0.25 )";
        /** The maximum width for the site panel. */
        public      static  readonly    SITE_PANEL_MAX_WIDTH                        :number                     = 600;
    }
