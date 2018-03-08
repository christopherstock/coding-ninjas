
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents the shape of a game object.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class ShapeCircle extends ninjas.Shape
    {
        /** The circle's diameter. */
        public              diameter                :number             = 0.0;

        /***************************************************************************************************************
        *   Creates a new circle shape.
        *
        *   @param diameter    The circle's diameter.
        *   @param debugColor  The color for the debug object.
        *   @param isStatic    Specifies that this object has a fixed position.
        *   @param angle       The rotation of this body in degrees.
        *   @param friction    The object's body friction.
        *   @param density     The object's body density.
        *   @param restitution The object's body restitution.
        ***************************************************************************************************************/
        public constructor
        (
            diameter    :number,
            debugColor  :ninjas.DebugColor,
            isStatic    :ninjas.StaticShape,
            angle       :number,
            friction    :ninjas.BodyFriction,
            density     :ninjas.BodyDensity,
            restitution :ninjas.BodyRestitution
        )
        {
            super( debugColor, isStatic, angle, friction, density, restitution );

            this.diameter = diameter;

            this.body     = this.createBody();
/*
            this.body.torque = 360.0;
*/
        }

        /***************************************************************************************************************
        *   Creates this shapes body.
        *
        *   @return The body for this shape.
        ***************************************************************************************************************/
        protected createBody() : matter.Body
        {
            return matter.Bodies.circle(
                ( this.diameter / 2 ),
                ( this.diameter / 2 ),
                ( this.diameter / 2 ),
                this.options
            );
        }

        /***************************************************************************************************************
        *   Returns the width of this shape's boundaries.
        *
        *   @return The shape's boundaries width.
        ***************************************************************************************************************/
        public getWidth() : number
        {
            return this.diameter;
        }

        /***************************************************************************************************************
        *   Returns the height of this shape's boundaries.
        *
        *   @return The shape's boundaries height.
        ***************************************************************************************************************/
        public getHeight() : number
        {
            return this.diameter;
        }
    }
