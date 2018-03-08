
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Specifies if a shape is static or not.
    *   Static shapes have a fixed position and are not affected by gravity or forces.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum StaticShape
    {
        /** Specifies a static shape. */
        YES,
        /** Specifies a non-static shape. */
        NO,
    }

    /*******************************************************************************************************************
    *   Represents the shape of a game object.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
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
        *   @param debugColor  The color for the debug object.
        *   @param isStatic    Specifies that this object has a fixed position.
        *   @param angle       The rotation of this body in degrees.
        *   @param friction    The object's body friction.
        *   @param density     The object's body density.
        *   @param restitution The object's body restitution.
        ***************************************************************************************************************/
        public constructor
        (
            debugColor  :ninjas.DebugColor,
            isStatic    :ninjas.StaticShape,
            angle       :number,
            friction    :ninjas.BodyFriction,
            density     :ninjas.BodyDensity,
            restitution :ninjas.BodyRestitution
        )
        {
            this.options = {
                render:
                {
                    fillStyle:   ( ninjas.SettingDebug.DEBUG_MODE ? debugColor : ninjas.DebugColor.COLOR_TRANSPARENT ),
                    strokeStyle: ( ninjas.SettingDebug.DEBUG_MODE ? debugColor : ninjas.DebugColor.COLOR_TRANSPARENT ),
                    opacity:     1.0,
                    lineWidth:   1.0,
                },
                isStatic:        ( isStatic == ninjas.StaticShape.YES ),
                collisionFilter: ninjas.SettingMatterJs.COLLISION_GROUP_COLLIDING,

                friction:        friction,
                frictionAir:     ninjas.BodyFrictionAir.DEFAULT,
//              frictionStatic:  0.5,

                angle:           ninjas.MathUtil.angleToRad( angle ),
                density:         density,

                restitution:     restitution,

//              slop:            0.0,
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
