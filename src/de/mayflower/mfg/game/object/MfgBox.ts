
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a movable box.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgBox extends mfg.MfgGameObject
    {
        /***************************************************************************************************************
        *   Creates a new box.
        *
        *   @param shape    The shape for this object.
        *   @param x        Startup position X.
        *   @param y        Startup position Y.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgShape, x:number, y:number )
        {
            super
            (
                shape,
                x,
                y,
                mfg.MfgImage.IMAGE_BOX
            );
        }

        /***************************************************************************************************************
        *   Renders this box.
        ***************************************************************************************************************/
        public render()
        {
            this.clipToHorizontalLevelBounds();
        }
    }
