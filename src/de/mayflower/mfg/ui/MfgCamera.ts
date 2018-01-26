
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';

    /*******************************************************************************************************************
    *   Manages the camera that calculates the scrolling amounts.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgCamera
    {
        /** The renderer for the MatterJS engine. */
        private     renderer                    :Matter.Render          = null;

        /** Camera centering ratio X. */
        private     ratioX                      :number                 = 0.0;
        /** Camera centering ratio X. */
        private     ratioY                      :number                 = 0.0;

        /** Camera moving speed. */
        private     movingSpeed                 :number                 = 0.0;
        /** Minimum camera moving speed in px. */
        private     minimumCameraMove           :number                 = 0.0;

        /** Current camera target X. */
        private     targetX                     :number                 = 0.0;
        /** Current camera target Y. */
        private     targetY                     :number                 = 0.0;

        /** Current camera offset X. */
        private     offsetX                     :number                 = 0.0;
        /** Current camera offset Y. */
        private     offsetY                     :number                 = 0.0;

        /** The width of the level. */
        private     levelWidth                  :number                 = 0.0;
        /** The height of the level. */
        private     levelHeight                 :number                 = 0.0;

        /** The width of the canvas. */
        private     canvasWidth                 :number                 = 0.0;
        /** The height of the canvas. */
        private     canvasHeight                :number                 = 0.0;

        /***************************************************************************************************************
        *   Constructs a new camera.
        *
        *   @param renderer         The MatterJS renderer to set the viewport to.
        *   @param ratioX            Camera ratio X for horizontal centering of the player.
        *   @param ratioY            Camera ratio Y for vertical centering   of the player.
        *   @param movingSpeed       The moving speed for the camera.
        *   @param minimumCameraMove The minimum camera movement step in px.
        *   @param levelWidth        The width of the level.
        *   @param levelHeight       The height of the level.
        *   @param canvasWidth       The width of the canvas.
        *   @param canvasHeight      The height of the canvas.
        ***************************************************************************************************************/
        public constructor
        (
            renderer:Matter.Render,
            ratioX:number,
            ratioY:number,
            movingSpeed:number,
            minimumCameraMove:number,
            levelWidth:number,
            levelHeight:number,
            canvasWidth:number,
            canvasHeight:number
        )
        {
            this.renderer          = renderer;

            this.ratioX            = ratioX;
            this.ratioY            = ratioY;

            this.movingSpeed       = movingSpeed;
            this.minimumCameraMove = minimumCameraMove;

            this.levelWidth        = levelWidth;
            this.levelHeight       = levelHeight;

            this.canvasWidth       = canvasWidth;
            this.canvasHeight      = canvasHeight;
        }

        /***************************************************************************************************************
        *   Updates the singleton instance of the camera by reassigning
        *   it's horizontal and vertical offset.
        *
        *   @param subjectX         The subject coordinate X to center the camera.
        *   @param subjectY         The subject coordinate Y to center the camera.
        *   @param lookingDirection The current direction the player looks at.
        *   @param allowAscendY     Allows camera ascending Y.
        ***************************************************************************************************************/
        public update
        (
            subjectX:number,
            subjectY:number,
            lookingDirection:mfg.MfgCharacterLookingDirection,
            allowAscendY:boolean
        )
        {
            this.calculateTargets
            (
                lookingDirection,
                subjectX,
                subjectY,
            );

            // move horizontal camera offsets to camera target
            let cameraMoveX:number = 0.0;
            if ( this.offsetX < this.targetX )
            {
                cameraMoveX = ( this.targetX - this.offsetX ) * this.movingSpeed;
                if ( cameraMoveX < this.minimumCameraMove ) cameraMoveX = this.minimumCameraMove;
                this.offsetX += cameraMoveX;
                if ( this.offsetX > this.targetX ) this.offsetX = this.targetX;
            }
            else if ( this.offsetX > this.targetX )
            {
                cameraMoveX = ( this.offsetX - this.targetX ) * this.movingSpeed;
                if ( cameraMoveX < this.minimumCameraMove ) cameraMoveX = this.minimumCameraMove;
                this.offsetX -= cameraMoveX;
                if ( this.offsetX < this.targetX ) this.offsetX = this.targetX;
            }

            // buffer camera on ascending, if allowed
            if ( allowAscendY && this.targetY < this.offsetY )
            {
                if ( this.offsetY > this.targetY )
                {
                    let cameraMoveY:number = ( this.offsetY - this.targetY ) * this.movingSpeed;
                    if ( cameraMoveY < this.minimumCameraMove ) cameraMoveY = this.minimumCameraMove;
                    this.offsetY -= cameraMoveY;
                    if ( this.offsetY < this.targetY ) this.offsetY = this.targetY;
                }
            }

            // direct assignment on falling down
            if ( this.targetY > this.offsetY )
            {
                this.offsetY = this.targetY;
/*
                cameraMoveY = ( this.targetY - this.offsetY ) * this.movingSpeed;
                if ( cameraMoveY < this.minimumCameraMove ) cameraMoveY = this.minimumCameraMove;
                this.offsetY += cameraMoveY;
                if ( this.offsetY > this.targetY ) this.offsetY = this.targetY;
*/
            }

            // assign current camera offset to renderer
            this.renderer.bounds = Matter.Bounds.create(
                [
                    {
                        x: this.offsetX,
                        y: this.offsetY
                    },
                    {
                        x: this.offsetX + this.canvasWidth,
                        y: this.offsetY + this.canvasHeight
                    }
                ]
            );
        }

        /***************************************************************************************************************
        *   Calculates the current camera tarets according to the specified subject.
        *
        *   @param lookingDirection The current direction the subject is looking in.
        *   @param subjectX         The subject's X to position the camera to.
        *   @param subjectY         The subject's Y to position the camera to.
        ***************************************************************************************************************/
        private calculateTargets
        (
            lookingDirection:mfg.MfgCharacterLookingDirection,
            subjectX:number,
            subjectY:number,
        )
        {
            // calculate scroll-offsets so camera is centered to subject
            switch ( lookingDirection )
            {
                case mfg.MfgCharacterLookingDirection.LEFT:
                {
                    this.targetX = subjectX - ( this.canvasWidth  * ( 1.0 - this.ratioX ) );
                    break;
                }

                case mfg.MfgCharacterLookingDirection.RIGHT:
                {
                    this.targetX = subjectX - ( this.canvasWidth  * this.ratioX );
                    break;
                }
            }
            this.targetY = subjectY - ( this.canvasHeight * this.ratioY );

            // refactor to own method!

            // clip camera target x to level bounds
            if ( this.targetX < 0                                  ) this.targetX = 0;
            if ( this.targetX > this.levelWidth - this.canvasWidth ) this.targetX = this.levelWidth - this.canvasWidth;

            // clip camera target y to level bounds
            if ( this.targetY < 0                                    ) this.targetY = 0;
            if ( this.targetY > this.levelHeight - this.canvasHeight ) this.targetY = this.levelHeight - this.canvasHeight;
        }

        /***************************************************************************************************************
        *   Resets the camera targets and offsets to the current player position without buffering.
        ***************************************************************************************************************/
        public reset()
        {
            // extract level and player access!

            this.calculateTargets
            (
                mfg.Mfg.game.level.player.lookingDirection,
                mfg.Mfg.game.level.player.shape.body.position.x,
                mfg.Mfg.game.level.player.shape.body.position.y,
            );

            this.offsetX = this.targetX;
            this.offsetY = this.targetY;
        }
    }
