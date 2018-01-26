
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   The key system that manages all pressed keys.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class KeySystem
    {
        /** The keycode that represents the 'ARROW LEFT' key. */
        public      static  KEY_LEFT            :number                         = 37;
        /** The keycode that represents the 'ARROW UP' key. */
        public      static  KEY_UP              :number                         = 38;
        /** The keycode that represents the 'ARROW RIGHT' key. */
        public      static  KEY_RIGHT           :number                         = 39;
        /** The keycode that represents the 'ARROW DOWN' key. */
        public      static  KEY_DOWN            :number                         = 40;

        /** The keycode that represents the '1' key. */
        public      static  KEY_1               :number                         = 49;
        /** The keycode that represents the '1' key. */
        public      static  KEY_2               :number                         = 50;
        /** The keycode that represents the '1' key. */
        public      static  KEY_3               :number                         = 51;
        /** The keycode that represents the '1' key. */
        public      static  KEY_4               :number                         = 52;
        /** The keycode that represents the '1' key. */
        public      static  KEY_5               :number                         = 53;

        /** The keycode that represents the 'ENTER' key. */
        public      static  KEY_ENTER           :number                         = 13;
        /** The keycode that represents the 'ESCAPE' key. */
        public      static  KEY_ESCAPE          :number                         = 27;
        /** The keycode that represents the 'SPACE' key. */
        public      static  KEY_SPACE           :number                         = 32;

        /** All 'pressed' information for all keys. */
        private             keysPressed         :Array<boolean>                 = [];
        /** All 'needs release' information for all keys. */
        private             keysNeedRelease     :Array<boolean>                 = [];

        /***************************************************************************************************************
        *   Creates a new key system.
        ***************************************************************************************************************/
        public constructor()
        {
            //set event listener for keyboard devices - all but IE
            window.addEventListener( "keydown",     this.onKeyDown, false );
            window.addEventListener( "keyup",       this.onKeyUp,   false );

            //set event listener for keyboard devices - IE
            window.addEventListener( "onkeydown",   this.onKeyDown, false );
            window.addEventListener( "onkeyup",     this.onKeyUp,   false );
        }

        /***************************************************************************************************************
        *   This method is always invoked by the system if a key is pressed.
        *
        *   @param evt  The system's propagated key event.
        ***************************************************************************************************************/
        public onKeyDown=( evt:Event )=>
        {
            let keyCode = ( evt as KeyboardEvent ).which;

            if (!this.keysNeedRelease[ keyCode ]) {
                this.keysPressed[ keyCode ] = true;

                ninjas.Debug.key.log( "key pressed ["  + keyCode + "]" );
            }
        };

        /***************************************************************************************************************
        *   This method is always invoked by the system if a key is released.
        *
        *   @param evt  The system's propagated key event.
        ***************************************************************************************************************/
        public onKeyUp=( evt:Event )=>
        {
            let keyCode = ( evt as KeyboardEvent ).which;
            this.keysPressed[ keyCode ] = false;
            this.keysNeedRelease[ keyCode ] = false;

            ninjas.Debug.key.log( "key released ["  + keyCode + "]" );
        };

        /***************************************************************************************************************
        *   Checks if the key with the given keyCode is currently pressed.
        *
        *   @param  keyCode The keyCode of the key to return pressed state.
        *   @return         <code>true</code> if this key is currently pressed.
        *                   Otherwise <code>false</code>.
        ***************************************************************************************************************/
        public isPressed( keyCode:number ):boolean
        {
            return this.keysPressed[ keyCode ];
        }

        /***************************************************************************************************************
        *   Flags that a key needs release before being able to be pressed again.
        *
        *   @param  keyCode The keyCode of the key to mark as 'needs key release'.
        ***************************************************************************************************************/
        public setNeedsRelease( keyCode:number )
        {
            this.keysNeedRelease[ keyCode ] = true;
            this.keysPressed[     keyCode ] = false;
        }
    }
