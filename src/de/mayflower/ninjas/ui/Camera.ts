
    import * as matter from 'matter-js';
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   Manages the camera that calculates the scrolling amounts.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Camera
    {
        /** The renderer for the MatterJS engine. TODO outsource renderer */
        private     renderer                    :matter.Render          = null;

        /** Camera centering ratio X. */
        private     ratioY                      :number                 = 0.0;

        /** Camera moving speed. */
        private     movingSpeed                 :number                 = 0.0;
        /** Minimum camera moving speed in px. */
        private     minimumCameraMove           :number                 = 0.0;
        /** Maximum camera moving speed in px. */
        private     maximumCameraMove           :number                 = 0.0;

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
        *   @param ratioY            Camera ratio Y for vertical centering of the player.
        *   @param movingSpeed       The moving speed for the camera.
        *   @param minimumCameraMove The minimum camera movement step in px.
        *   @param maximumCameraMove The maximum camera movement step in px.
        *   @param levelWidth        The width of the level.
        *   @param levelHeight       The height of the level.
        *   @param canvasWidth       The width of the canvas.
        *   @param canvasHeight      The height of the canvas.
        ***************************************************************************************************************/
        public constructor
        (
            renderer          :matter.Render,
            ratioY            :number,
            movingSpeed       :number,
            minimumCameraMove :number,
            maximumCameraMove :number,
            levelWidth        :number,
            levelHeight       :number,
            canvasWidth       :number,
            canvasHeight      :number
        )
        {
            this.renderer          = renderer;

            this.ratioY            = ratioY;

            this.movingSpeed       = movingSpeed;
            this.minimumCameraMove = minimumCameraMove;
            this.maximumCameraMove = maximumCameraMove;

            this.levelWidth        = levelWidth;
            this.levelHeight       = levelHeight;

            this.canvasWidth       = canvasWidth;
            this.canvasHeight      = canvasHeight;
        }

        /***************************************************************************************************************
        *   Returns the current camera offset X.
        *
        *   @return Current offset X.
        ***************************************************************************************************************/
        public getOffsetX()
        {
            return this.offsetX;
        }

        /***************************************************************************************************************
        *   Returns the current camera offset Y.
        *
        *   @return Current offset X.
        ***************************************************************************************************************/
        public getOffsetY()
        {
            return this.offsetY;
        }

        /***************************************************************************************************************
        *   Updates the singleton instance of the camera by reassigning
        *   it's horizontal and vertical offset.
        *
        *   @param subjectX     The subject coordinate X to center the camera.
        *   @param subjectY     The subject coordinate Y to center the camera.
        *   @param allowAscendY Allows camera ascending Y.
        *   @param targetX      The camera target X.
        ***************************************************************************************************************/
        public update
        (
            subjectX     :number,
            subjectY     :number,
            allowAscendY :boolean,
            targetX      :number
        )
        {
            this.calculateTargets( subjectX, subjectY, targetX );
            this.calculateOffsets( allowAscendY );
            this.assignOffsetsToRenderer();
        }

        /***************************************************************************************************************
        *   Resets the camera targets and offsets to the current player position without buffering.
        ***************************************************************************************************************/
        public reset()
        {
            // extract level and player access!

            this.calculateTargets
            (
                ninjas.Main.game.level.player.shape.body.position.x,
                ninjas.Main.game.level.player.shape.body.position.y,
                ninjas.Main.game.engine.siteSystem.getCameraTargetX()
            );

            this.offsetX = this.targetX;
            this.offsetY = this.targetY;
        }

        /***************************************************************************************************************
        *   Applies the current camera offsets to the linked renderer. TODO return bounds and make setter in renderer
        ***************************************************************************************************************/
        private assignOffsetsToRenderer()
        {
            // assign current camera offset to renderer
            this.renderer.bounds = matter.Bounds.create(
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
        *   @param subjectX The subject's X to position the camera to.
        *   @param subjectY The subject's Y to position the camera to.
        *   @param targetX  A fixed camera position X.
        ***************************************************************************************************************/
        private calculateTargets
        (
            subjectX :number,
            subjectY :number,
            targetX  :number
        )
        {
            this.targetX = subjectX - targetX;
            this.targetY = subjectY - ( this.canvasHeight * this.ratioY );

            // clip targets X and Y to level bounds
            this.clipTargetsToLevelBounds();
        }

        /***************************************************************************************************************
        *   Clips the camera targets X and Y to the current level bounds.
        ***************************************************************************************************************/
        private clipTargetsToLevelBounds()
        {
            // clip camera target x to level bounds
            if ( this.targetX < 0                                  ) this.targetX = 0;
            if ( this.targetX > this.levelWidth - this.canvasWidth ) this.targetX = this.levelWidth - this.canvasWidth;

            // clip camera target y to level bounds
            if ( this.targetY < 0                                    ) this.targetY = 0;
            if ( this.targetY > this.levelHeight - this.canvasHeight ) this.targetY = this.levelHeight - this.canvasHeight;
        }

        /***************************************************************************************************************
        *   Calculates the new offsets.
        *
        *   @param allowAscendY Specifies if the camera may ascend in this update.
        ***************************************************************************************************************/
        private calculateOffsets( allowAscendY:boolean )
        {
            // move horizontal camera offsets to camera target
            let cameraMoveX:number = 0.0;
            if ( this.offsetX < this.targetX )
            {
                cameraMoveX = ( this.targetX - this.offsetX ) * this.movingSpeed;

                if ( cameraMoveX < this.minimumCameraMove ) cameraMoveX = this.minimumCameraMove;
                if ( cameraMoveX > this.maximumCameraMove ) cameraMoveX = this.maximumCameraMove;

                this.offsetX += cameraMoveX;
                if ( this.offsetX > this.targetX ) this.offsetX = this.targetX;
            }
            else if ( this.offsetX > this.targetX )
            {
                cameraMoveX = ( this.offsetX - this.targetX ) * this.movingSpeed;

                if ( cameraMoveX < this.minimumCameraMove ) cameraMoveX = this.minimumCameraMove;
                if ( cameraMoveX > this.maximumCameraMove ) cameraMoveX = this.maximumCameraMove;

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
                // buffer camera on descending
                cameraMoveY = ( this.targetY - this.offsetY ) * this.movingSpeed;
                if ( cameraMoveY < this.minimumCameraMove ) cameraMoveY = this.minimumCameraMove;
                this.offsetY += cameraMoveY;
                if ( this.offsetY > this.targetY ) this.offsetY = this.targetY;
*/
            }

            // floor offsets (important for renderer bounds! fuzzy drawing problems on images may appear otherwise!)
            this.offsetX = Math.floor( this.offsetX );
            this.offsetY = Math.floor( this.offsetY );
        }
    }
