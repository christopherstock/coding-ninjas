
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents a non-colliding decoration.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Decoration extends ninjas.GameObject
    {
        /***************************************************************************************************************
        *   Creates a new decoration.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param sprite The sprite to use.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, x:number, y:number, sprite:ninjas.Sprite )
        {
            super
            (
                shape,
                x,
                y,
                sprite
            );

            this.shape.body.collisionFilter = ninjas.Setting.COLLISION_GROUP_NON_COLLIDING_DECO;
        }

        /***************************************************************************************************************
        *   Renders this decoration.
        ***************************************************************************************************************/
        public render()
        {
            super.render();
        }
    }
