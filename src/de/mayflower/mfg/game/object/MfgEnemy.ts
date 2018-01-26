
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents an enemy being controlled by the system.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgEnemy extends mfg.MfgCharacter
    {
        /***************************************************************************************************************
        *   Creates a new enemy.
        *
        *   @param shape  The shape for this object.
        *   @param x      Startup position X.
        *   @param y      Startup position Y.
        ***************************************************************************************************************/
        public constructor( shape:mfg.MfgShape, x:number, y:number )
        {
            super
            (
                shape,
                x,
                y,
                null,
                mfg.MfgCharacterLookingDirection.LEFT,
                4.0,
                mfg.MfgCharacter.JUMP_POWER_DEFAULT
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
                case mfg.MfgCharacterLookingDirection.LEFT:
                {
                    Matter.Body.applyForce
                    (
                        this.shape.body,
                        this.shape.body.position,
                        Matter.Vector.create( -0.5, -1.0 )
                    );
                    break;
                }

                case mfg.MfgCharacterLookingDirection.RIGHT:
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
