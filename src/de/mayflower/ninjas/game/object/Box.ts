
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
        *   @param image    The image URL to use for this object.
        ***************************************************************************************************************/
        public constructor(shape:ninjas.Shape, x:number, y:number, image:string )
        {
            super
            (
                shape,
                x,
                y,
                image
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
