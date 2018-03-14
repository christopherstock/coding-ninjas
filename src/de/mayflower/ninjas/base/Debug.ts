
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   Represents a debug group whose logging can be enabled or disabled.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Debug
    {
        /** Debugs the preloading system. */
        public      static      preloader       :Debug              = new Debug( true  );
        /** Debugs the image system. */
        public      static      image           :Debug              = new Debug( false );
        /** Debugs the sound system. */
        public      static      sound           :Debug              = new Debug( true  );
        /** Debugs the key system. */
        public      static      key             :Debug              = new Debug( false );
        /** Debugs the pointer system. */
        public      static      pointer         :Debug              = new Debug( true  );
        /** Debugs the pickable game items. */
        public      static      item            :Debug              = new Debug( true  );
        /** Debugs character events. */
        public      static      character       :Debug              = new Debug( true  );
        /** Debugs enemy events. */
        public      static      enemy           :Debug              = new Debug( true  );
        /** Debugs site events. */
        public      static      site            :Debug              = new Debug( true  );
        /** Debugs canvas events. */
        public      static      canvas          :Debug              = new Debug( true  );
        /** Debugs react events. */
        public      static      react           :Debug              = new Debug( true  );

        /** The flag that enables or disables logging for this debug group. */
        private                 debugEnabled    :boolean            = false;

        /***************************************************************************************************************
        *   Constructs a new debug group.
        *
        *   @param  debugEnabled    Flags if this debug group should log messages.
        ***************************************************************************************************************/
        public constructor( debugEnabled:boolean )
        {
            this.debugEnabled = debugEnabled;
        }

        /***************************************************************************************************************
        *   Logs a line of output to the default console. Will only generate output
        *   if the debug for this debug group is enabled.
        *
        *   @param msg The message to log to the default console.
        ***************************************************************************************************************/
        public log( msg:string = "" ):void
        {
            if ( ninjas.SettingDebug.DEBUG_MODE && this.debugEnabled )
            {
                console.log( '[' + ninjas.String.getDateTimeString() + '] ' + msg );
            }
        }
    }
