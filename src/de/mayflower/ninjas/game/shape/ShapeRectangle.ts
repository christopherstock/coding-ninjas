
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents the shape of a game object.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class ShapeRectangle extends ninjas.Shape
    {
        /** The rectangle's width. */
        public              width           :number                 = 0.0;
        /** The rectangle's height. */
        public              height          :number                 = 0.0;

        /***************************************************************************************************************
        *   Creates a new rectangle shape.
        *
        *   @param width      The rectangle's width.
        *   @param height     The rectangle's height.
        *   @param debugColor The color for the debug object.
        *   @param isStatic   Specifies that this object has a fixed position.
        *   @param angle      The rotation of this body in degrees.
        *   @param friction   The object's body friction.
        *   @param density    The object's body density.
        ***************************************************************************************************************/
        public constructor
        (
            width      :number,
            height     :number,
            debugColor :string,
            isStatic   :boolean,
            angle      :number,
            friction   :number,
            density    :number
        )
        {
            super( debugColor, isStatic, angle, friction, density );

            this.width  = width;
            this.height = height;

            this.body   = this.createBody();
        }

        /***************************************************************************************************************
        *   Creates this shapes body.
        *
        *   @return The body for this shape.
        ***************************************************************************************************************/
        public createBody() : matter.Body
        {
            return matter.Bodies.rectangle(
                ( this.width  / 2 ),
                ( this.height / 2 ),
                this.width,
                this.height,
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
            return this.width;
        }

        /***************************************************************************************************************
        *   Returns the height of this shape's boundaries.
        *
        *   @return The shape's boundaries height.
        ***************************************************************************************************************/
        public getHeight() : number
        {
            return this.height;
        }
    }
