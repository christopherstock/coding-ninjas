
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents the shape of a game object.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class Shape
    {
        /** The body rendering options for this shape. */
        public                  options                 :matter.IBodyDefinition         = null;

        /** The shape's body. */
        public                  body                    :matter.Body                    = null;

        /***************************************************************************************************************
        *   Creates a new game object shape.
        *
        *   @param debugColor The color for the debug object.
        *   @param isStatic   Specifies that this object has a fixed position.
        *   @param angle      The rotation of this body in degrees.
        *   @param friction   The object's body friction.
        *   @param density    The object's body density.
        ***************************************************************************************************************/
        public constructor
        (
            debugColor :string,
            isStatic   :boolean,
            angle      :number,
            friction   :number,
            density    :number
        )
        {
            this.options = {
                render:
                {
                    fillStyle:   debugColor,
                    strokeStyle: ninjas.SettingDebug.COLOR_DEBUG_BORDER,
                    opacity:     ninjas.SettingDebug.COLOR_DEBUG_OPACITY,
                    lineWidth:   ninjas.SettingDebug.COLOR_DEBUG_LINE_WIDTH,
                },
                isStatic:        isStatic,
                collisionFilter: ninjas.SettingMatterJs.COLLISION_GROUP_COLLIDING,
                friction:        friction,
                angle:           ninjas.MathUtil.angleToRad( angle ),
                density:         density,
//              isSensor:        isSensor,
//              chamfer:         { radius: [ 5.0, 5.0, 5.0, 5.0 ] },
            };
        }

        /***************************************************************************************************************
        *   Returns the width of this shape's boundaries.
        *
        *   @return The shape's boundaries width.
        ***************************************************************************************************************/
        public abstract getWidth() : number;

        /***************************************************************************************************************
        *   Returns the height of this shape's boundaries.
        *
        *   @return The shape's boundaries height.
        ***************************************************************************************************************/
        public abstract getHeight() : number;

        /***************************************************************************************************************
        *   Creates this shapes body.
        *
        *   @return The body for this shape.
        ***************************************************************************************************************/
        protected abstract createBody() : matter.Body;
    }
