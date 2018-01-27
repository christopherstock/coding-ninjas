
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents a bounce.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Bounce extends ninjas.GameObject
    {
        /** The constraint that builds the turning point for the bounce. */
        private                     constraint                      :matter.Constraint                  = null;

        /***************************************************************************************************************
        *   Creates a new bounce.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        *   @param sprite The sprite for this game object.
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

            this.constraint = matter.Constraint.create(
                {
                    bodyB: this.shape.body,
                    pointA: { x: this.shape.body.position.x, y: this.shape.body.position.y },
                    pointB: { x: 0, y: 0 },
                    stiffness: 0.01,
                    length: 0,
                    render: {
                        strokeStyle: ninjas.Setting.COLOR_DEBUG_BOUNCE_JOINT,
                        lineWidth: 1.0,
                        visible:   true,
                    }
                }
            );

            matter.Composite.add(
                ninjas.Main.game.engine.world,
                this.constraint
            );
        }

        /***************************************************************************************************************
        *   Renders this sigsaw.
        ***************************************************************************************************************/
        public render()
        {
            matter.Body.setAngle(           this.shape.body, 0.0 );
            matter.Body.setAngularVelocity( this.shape.body, 0.0 );
        }
    }
