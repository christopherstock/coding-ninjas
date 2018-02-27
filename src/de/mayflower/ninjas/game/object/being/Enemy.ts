
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
                3.0,
                -2.75
            );
        }

        /***************************************************************************************************************
        *   Renders the current player tick.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            if ( !this.isDead() )
            {
                // switch movement pattern

                this.moveLeft();

                this.clipToHorizontalLevelBounds();
            }


            // this.assignCurrentSprite();

        }

        /***************************************************************************************************************
        *   Being invoked when this enemy is hit by the player.
        ***************************************************************************************************************/
        public onHitByPlayer()
        {
            // flag as dead
            this.kill();

            // disable body collisions
            this.shape.body.collisionFilter = ninjas.SettingMatterJs.COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY;

            // bring body to forefround
            ninjas.Main.game.engine.matterJsSystem.removeFromWorld( this.shape.body );
            ninjas.Main.game.engine.matterJsSystem.addToWorld(      this.shape.body );

            // punch the enemy out of the screen
            this.punchOut();
        }
    }
