
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents a sigsaw.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class SigSaw extends ninjas.GameObject
    {
        /** The constraint that builds the turning point for the sigsaw. */
        private                     constraint                      :matter.Constraint                  = null;

        /***************************************************************************************************************
        *   Creates a new sigsaw.
        *
        *   @param shape          The shape for this object.
        *   @param spriteTemplate The sprite template for this game object.
        *   @param x              Startup position X.
        *   @param y              Startup position Y.
        ***************************************************************************************************************/
        public constructor(shape:ninjas.Shape, spriteTemplate:ninjas.SpriteTemplate, x:number, y:number )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y
            );

            this.constraint = matter.Constraint.create(
                {
                    bodyB: this.shape.body,
                    pointA: { x: this.shape.body.position.x, y: this.shape.body.position.y },
                    pointB: { x: 0, y: 0 },
                    stiffness: 1.0,
                    length: 0,
                    render: {
                        strokeStyle: ninjas.DebugColor.COLOR_DEBUG_SIGSAW_JOINT,
                        lineWidth: 1.0,
                        visible:   true,
                    }
                }
            );

            ninjas.Main.game.engine.matterJsSystem.addToWorld( this.constraint );
        }

        /***************************************************************************************************************
        *   Renders this sigsaw.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            this.clipRotation();
            this.clipRotationSpeed();
        }

        /***************************************************************************************************************
        *   Clips the rotation of the sigsaw.
        ***************************************************************************************************************/
        private clipRotation()
        {
            const clipAngle = 15.0;

            const minAngle = ninjas.MathUtil.angleToRad( -clipAngle );
            const maxAngle = ninjas.MathUtil.angleToRad( clipAngle  );

            if ( this.shape.body.angle < minAngle )
            {
                matter.Body.setAngle(           this.shape.body, minAngle );
                matter.Body.setAngularVelocity( this.shape.body, 0.0       );
            }
            else if ( this.shape.body.angle > maxAngle )
            {
                matter.Body.setAngle(           this.shape.body, maxAngle );
                matter.Body.setAngularVelocity( this.shape.body, 0.0       );
            }
        }

        /***************************************************************************************************************
        *   Clips the rotation speed of the sigsaw.
        ***************************************************************************************************************/
        private clipRotationSpeed()
        {
            const maxRotationSpeed = 0.005;

            if ( this.shape.body.angularVelocity < -maxRotationSpeed )
            {
                matter.Body.setAngularVelocity( this.shape.body, -maxRotationSpeed );
            }
            else if ( this.shape.body.angularVelocity > maxRotationSpeed )
            {
                matter.Body.setAngularVelocity( this.shape.body, maxRotationSpeed );
            }
        }
    }
