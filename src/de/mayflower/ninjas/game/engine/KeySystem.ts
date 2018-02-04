
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   The key system that manages all pressed keys.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class KeySystem
    {
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
