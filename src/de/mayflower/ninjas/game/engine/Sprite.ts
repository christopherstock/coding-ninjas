
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents one game sprite.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Sprite
    {
        /** The sprite template for this sprite. */
        public                  template                                    :ninjas.SpriteTemplate  = null;

        /** The id of the current frame for this sprite. */
        private                 currentFrame                                :number                 = 0;
        /** The current tick since last frame change. */
        private                 currentTick                                 :number                 = 0;

        /***************************************************************************************************************
        *   Creates a new sprite.
        *
        *   @param template The template for this sprite.
        ***************************************************************************************************************/
        public constructor( template:ninjas.SpriteTemplate )
        {
            this.template = template;

            this.currentTick  = 0;

            if ( template.randomStartFrame == ninjas.RandomStartFrame.YES )
            {
                this.currentFrame = ninjas.MathUtil.getRandomInt( 0, ( this.template.imageIds.length - 1 ) );
            }
            else
            {
                this.currentFrame = 0;
            }
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

            // non-looped sprites end on the last frame
            if ( this.template.loop == ninjas.LoopSprite.NO && this.currentFrame == this.template.imageIds.length - 1 )
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
            let imageId:string = this.template.imageIds[ this.currentFrame ];

            if ( this.template.mirrored == ninjas.MirrorImage.YES )
            {
                return ninjas.Main.game.engine.imageSystem.getMirroredImage( imageId ).src;
            }
            else
            {
                return ninjas.Main.game.engine.imageSystem.getImage( imageId ).src;
            }
        }
    }
