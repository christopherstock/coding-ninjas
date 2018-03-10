
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   The pointer system that manages all pointer interactions.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class PointerSystem
    {
        /** Indicates if the left canvas half is currently pointer pressed. */
        public              leftCanvasHalfPressed               :boolean            = false;
        /** Indicates if the right canvas half is currently pointer pressed. */
        public              rightCanvasHalfPressed              :boolean            = false;
        /** Indicates a canvas tab. */
        public              canvasTabbed                        :boolean            = false;

        /***************************************************************************************************************
        *   Creates a new key system.
        ***************************************************************************************************************/
        public constructor()
        {
            ninjas.Debug.pointer.log( "Setup pointer system" );

            let canvas:HTMLCanvasElement = ninjas.Main.game.engine.canvasSystem.getCanvas();

            canvas.addEventListener( "onpointermove", this.onPointerMove, false );
            canvas.addEventListener( "onpointerdown", this.onPointerDown, false );
            window.addEventListener( "onpointerup",   this.onPointerUp,   false );

            canvas.addEventListener( "pointermove", this.onPointerMove, false );
            canvas.addEventListener( "pointerdown", this.onPointerDown, false );
            window.addEventListener( "pointerup",   this.onPointerUp,   false );

            canvas.addEventListener( "touchmove",   this.onTouchMove, false );
            canvas.addEventListener( "touchstart",  this.onTouchDown, false );
            window.addEventListener( "touchend",    this.onTouchUp,   false );
        }

        /***************************************************************************************************************
        *   This method is invoked when the pointer is moved.
        *
        *   @param event The system's propagated pointer event.
        ***************************************************************************************************************/
        public onPointerMove=( event:Event )=>
        {
            ninjas.Debug.pointer.log( "pointer move" );

            event.preventDefault();
        };

        /***************************************************************************************************************
        *   This method is invoked when the pointer is pressed.
        *
        *   @param event The system's propagated pointer event.
        ***************************************************************************************************************/
        public onPointerDown=( event:any )=>
        {
            ninjas.Debug.pointer.log( "pointer down" );

            event.preventDefault();

            if ( ninjas.Main.game.level != null )
            {
                let playerCenterX:number = ( ninjas.Main.game.level.player.shape.body.position.x ) - ninjas.Main.game.camera.getOffsetX();

                if ( event.clientX < playerCenterX )
                {
                    this.leftCanvasHalfPressed = true;
                    this.canvasTabbed           = true;
                }
                else
                {
                    this.rightCanvasHalfPressed = true;
                    this.canvasTabbed           = true;
                }
            }
        };

        /***************************************************************************************************************
        *   This method is invoked when the pointer is released.
        *
        *   @param event The system's propagated pointer event.
        ***************************************************************************************************************/
        public onPointerUp=( event:Event )=>
        {
            ninjas.Debug.pointer.log( "pointer up" );

            event.preventDefault();

            this.leftCanvasHalfPressed  = false;
            this.rightCanvasHalfPressed = false;
        };

        /***************************************************************************************************************
        *   This method is invoked when the touch is moved.
        *
        *   @param event The system's propagated touch event.
        ***************************************************************************************************************/
        public onTouchMove=( event:Event )=>
        {
            ninjas.Debug.pointer.log( "touch move" );

            event.preventDefault();
        };

        /***************************************************************************************************************
        *   This method is invoked when the touch is pressed.
        *
        *   @param event The system's propagated touch  event.
        ***************************************************************************************************************/
        public onTouchDown=( event:any )=>
        {
            ninjas.Debug.pointer.log( "touch down" );

            event.preventDefault();

            if ( ninjas.Main.game.level != null )
            {
                let playerCenterX:number = ( ninjas.Main.game.level.player.shape.body.position.x ) - ninjas.Main.game.camera.getOffsetX();

                if ( event.touches[ 0 ].pageX < playerCenterX )
                {
                    this.leftCanvasHalfPressed = true;
                    this.canvasTabbed           = true;
                }
                else
                {
                    this.rightCanvasHalfPressed = true;
                    this.canvasTabbed           = true;
                }
            }
        };

        /***************************************************************************************************************
        *   This method is invoked when the touch  is released.
        *
        *   @param event The system's propagated touch  event.
        ***************************************************************************************************************/
        public onTouchUp=( event:Event )=>
        {
            ninjas.Debug.pointer.log( "touch  up" );

            event.preventDefault();

            this.leftCanvasHalfPressed  = false;
            this.rightCanvasHalfPressed = false;
        };
    }
