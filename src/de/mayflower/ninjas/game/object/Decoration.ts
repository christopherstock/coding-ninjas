
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
        *   @param sprite The sprite to use.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, sprite:ninjas.Sprite, x:number, y:number  )
        {
            super
            (
                shape,
                sprite,
                x,
                y,
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
