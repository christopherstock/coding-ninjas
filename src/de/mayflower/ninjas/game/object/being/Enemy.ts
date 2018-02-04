
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

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
        *   @param shape          The shape for this object.
        *   @param x              Startup position X.
        *   @param y              Startup position Y.
        *   @param spriteTemplate The sprite template to use for this game object.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, x:number, y:number, spriteTemplate:ninjas.SpriteTemplate )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y,
                ninjas.CharacterLookingDirection.LEFT,
                4.0,
                ninjas.Setting.PLAYER_JUMP_POWER
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

                this.clipToHorizontalLevelBounds();
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
                    matter.Body.applyForce
                    (
                        this.shape.body,
                        this.shape.body.position,
                        matter.Vector.create( -0.5, -1.0 )
                    );
                    break;
                }

                case ninjas.CharacterLookingDirection.RIGHT:
                {
                    matter.Body.applyForce
                    (
                        this.shape.body,
                        this.shape.body.position,
                        matter.Vector.create( 0.5, -1.0 )
                    );
                    break;
                }
            }
        }
    }
