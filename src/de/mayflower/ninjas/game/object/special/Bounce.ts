
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents a bounce.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Bounce extends ninjas.GameObject
    {
        /** The constraint that builds the turning point for the bounce. */
        private                     constraint                      :matter.Constraint                  = null;

        /***************************************************************************************************************
        *   Creates a new bounce.
        *
        *   @param shape          The shape for this object.
        *   @param spriteTemplate The sprite template to use for this game object.
        *   @param x              Startup position X.
        *   @param y              Startup position Y.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, spriteTemplate:ninjas.SpriteTemplate, x:number, y:number,  )
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
                    stiffness: 0.01,
                    length: 0,
                    render: {
                        strokeStyle: ninjas.DebugColor.COLOR_DEBUG_BOUNCE_JOINT,
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

            matter.Body.setAngle(           this.shape.body, 0.0 );
            matter.Body.setAngularVelocity( this.shape.body, 0.0 );
        }
    }
