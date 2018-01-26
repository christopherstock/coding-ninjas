
    import * as Matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents an enemy being controlled by the system.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Enemy extends ninjas.Character
    {
        /***************************************************************************************************************
        *   Creates a new enemy.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        ***************************************************************************************************************/
        public constructor(shape:ninjas.Shape, x:number, y:number )
        {
            super
            (
                shape,
                x,
                y,
                null,
                ninjas.CharacterLookingDirection.LEFT,
                4.0,
                ninjas.Character.JUMP_POWER_DEFAULT
            );
        }

        /***************************************************************************************************************
        *   Renders the current player tick.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            if ( !this.dead )
            {
                // switch movement pattern

                this.moveLeft();
            }
        }

        /***************************************************************************************************************
        *   Lets this enemy punch out of the screen.
        ***************************************************************************************************************/
        public punchOut()
        {
            switch ( this.lookingDirection )
            {
                case ninjas.CharacterLookingDirection.LEFT:
                {
                    Matter.Body.applyForce
                    (
                        this.shape.body,
                        this.shape.body.position,
                        Matter.Vector.create( -0.5, -1.0 )
                    );
                    break;
                }

                case ninjas.CharacterLookingDirection.RIGHT:
                {
                    Matter.Body.applyForce
                    (
                        this.shape.body,
                        this.shape.body.position,
                        Matter.Vector.create( 0.5, -1.0 )
                    );
                    break;
                }
            }
        }
    }
