
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents a movable box.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Movable extends ninjas.GameObject
    {
        /***************************************************************************************************************
        *   Creates a new movable.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param sprite The sprite for this box.
        ***************************************************************************************************************/
        public constructor
        (
            shape  :ninjas.Shape,
            x      :number,
            y      :number,
            sprite :ninjas.Sprite
        )
        {
            super
            (
                shape,
                x,
                y,
                sprite
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
