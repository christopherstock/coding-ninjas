
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents a non-colliding decoration.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Decoration extends ninjas.GameObject
    {
        /***************************************************************************************************************
        *   Creates a new decoration.
        *
        *   @param shape          The shape for this object.
        *   @param spriteTemplate The sprite template to use.
        *   @param x              Startup position X.
        *   @param y              Startup position Y.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, spriteTemplate:ninjas.SpriteTemplate, x:number, y:number  )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y,
            );

            this.shape.body.collisionFilter = ninjas.SettingMatterJs.COLLISION_GROUP_NON_COLLIDING_DECO;
        }
    }
