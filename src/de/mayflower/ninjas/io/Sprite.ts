
    import * as ninjas from '../ninjas';
    import {SpriteTemplate} from "./SpriteTemplate";

    /*******************************************************************************************************************
    *   Represents one game sprite.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Sprite
    {
        /** The sprite template for this sprite. TODO private */
        public                  template                                    :ninjas.SpriteTemplate  = null;

        /** The id of the current frame for this sprite. TODO private */
        public                  currentFrame                                :number                 = 0;
        /** The current tick since last frame change. */
        public                  currentTick                                 :number                 = 0;

        /** The width of all images in this sprite. TODO private with getter */
        public                  width                                       :number                 = 0;
        /** The height of all images in this sprite. TODO private with getter */
        public                  height                                      :number                 = 0;

        /***************************************************************************************************************
        *   Creates a new sprite.
        *
        *   @param template The template for this sprite.
        ***************************************************************************************************************/
        public constructor( template:SpriteTemplate )
        {
            this.template = template;

            // assign dimensions from 1st frame - TODO commitment is that all frames of a sprite have same size?
            this.width  = ninjas.Main.game.imageSystem.getImage( this.template.imageIds[ 0 ] ).width;
            this.height = ninjas.Main.game.imageSystem.getImage( this.template.imageIds[ 0 ] ).height;
        }

        /***************************************************************************************************************
        *   Resets this sprite to the first frame and resets tick counter.
        ***************************************************************************************************************/
        public reset() : void
        {
            this.currentFrame = 0;
            this.currentTick  = 0;
        }

        /***************************************************************************************************************
        *   Sets the next frame for this sprite.
        *
        *   @return If the frame actually changed.
        ***************************************************************************************************************/
        public render() : boolean
        {
            // no changes for single framed sprites
            if ( this.template.singleFramed )
            {
                return false;
            }

            // increase tick
            ++this.currentTick;

            // check if the delay is reached
            if ( this.currentTick >= this.template.ticksBetweenFrames )
            {
                // reset tick count
                this.currentTick = 0;

                // next frame
                ++this.currentFrame;

                // reset frame on reaching upper bound
                if ( this.currentFrame >= this.template.imageIds.length )
                {
                    this.currentFrame = 0;
                }

                return true;
            }

            return false;
        }

        /***************************************************************************************************************
        *   Returns the image url ( or data url for flipped images ) of the current frame.
        *
        *   @return The image url of the currently active frame.
        ***************************************************************************************************************/
        public getCurrentFrameImageUrl() : string
        {
            return ninjas.Main.game.imageSystem.getImage( this.template.imageIds[ this.currentFrame ] ).src;
        }
    }
