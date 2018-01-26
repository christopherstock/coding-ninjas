
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents a movable box.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Box extends ninjas.GameObject
    {
        /***************************************************************************************************************
        *   Creates a new box.
        *
        *   @param shape    The shape for this object.
        *   @param x        Startup position X.
        *   @param y        Startup position Y.
        ***************************************************************************************************************/
        public constructor(shape:ninjas.Shape, x:number, y:number )
        {
            super
            (
                shape,
                x,
                y,
                ninjas.Image.IMAGE_BOX
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
