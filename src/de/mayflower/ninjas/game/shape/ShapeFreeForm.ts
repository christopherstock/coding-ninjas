
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   A free form shape for a game object.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class ShapeFreeForm extends ninjas.Shape
    {
        /** All vertices that build the free form. */
        public              vertices            :Array<matter.Vector>           = null;

        /** The boundary width. */
        public              boundWidth          :number                 = 0.0;
        /** The boundary height. */
        public              boundHeight         :number                 = 0.0;

        /***************************************************************************************************************
        *   Creates a new free formed shape.
        *
        *   @param vertices    All vertices that make up the entire free form shape.
        *   @param debugColor  The color for the debug object.
        *   @param isStatic    Specifies that this object has a fixed position.
        *   @param angle       The rotation of this body in degrees.
        *   @param friction    The object's body friction.
        *   @param density     The object's body density.
        *   @param restitution The object's body restitution.
        ***************************************************************************************************************/
        public constructor
        (
            vertices    :Array<matter.Vector>,
            debugColor  :ninjas.DebugColor,
            isStatic    :ninjas.StaticShape,
            angle       :number,
            friction    :ninjas.BodyFriction,
            density     :ninjas.BodyDensity,
            restitution :ninjas.BodyRestitution
        )
        {
            super( debugColor, isStatic, angle, friction, density, restitution );

            this.vertices = vertices;

            this.determineBoundDimensions();

            this.body = this.createBody();
        }

        /***************************************************************************************************************
        *   Creates this shapes body.
        *
        *   @return The body for this shape.
        ***************************************************************************************************************/
        public createBody() : matter.Body
        {
            return matter.Bodies.fromVertices(
                ( this.boundWidth  / 2 ),
                ( this.boundHeight / 2 ),
                [ this.vertices ],
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
            return this.boundWidth;
        }

        /***************************************************************************************************************
        *   Returns the height of this shape's boundaries.
        *
        *   @return The shape's boundaries height.
        ***************************************************************************************************************/
        public getHeight() : number
        {
            return this.boundHeight;
        }

        /***************************************************************************************************************
        *   Calculates the width and height of this shapes bounds.
        ***************************************************************************************************************/
        private determineBoundDimensions() : void
        {
            let minimumX:number = Infinity;
            let minimumY:number = Infinity;

            let maximumX:number = -Infinity;
            let maximumY:number = -Infinity;

            for ( let vertex of this.vertices )
            {
                if ( vertex.x < minimumX ) minimumX = vertex.x;
                if ( vertex.y < minimumY ) minimumY = vertex.y;

                if ( vertex.x > maximumX ) maximumX = vertex.x;
                if ( vertex.y > maximumY ) maximumY = vertex.y;
            }

            this.boundWidth  = maximumX - minimumX;
            this.boundHeight = maximumY - minimumY;
        }
    }
