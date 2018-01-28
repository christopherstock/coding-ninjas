
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
        *   @param sprite The sprite for this box.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        ***************************************************************************************************************/
        public constructor
        (
            shape  :ninjas.Shape,
            sprite :ninjas.Sprite,
            x      :number,
            y      :number
        )
        {
            super
            (
                shape,
                sprite,
                x,
                y
            );
        }

        /***************************************************************************************************************
        *   Renders this box.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            this.clipToHorizontalLevelBounds();
        }
    }
