
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Specifies if an obstacle allows jump pass through.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum JumpPassThrough
    {
        YES,
        NO,
    }

    /*******************************************************************************************************************
    *   Represents a collidable and solid obstacle.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Obstacle extends ninjas.GameObject
    {
        /** Specifies if the player shall be allowed to jump through this obstacle. */
        private         jumpPassThrough             :JumpPassThrough                    = null;
        /** Specifies if the obstacle currently allows passing through. */
        private         currentlyAllowPassThrough   :JumpPassThrough                    = null;

        /***************************************************************************************************************
        *   Creates a new obstacle.
        *
        *   @param shape           The shape for this object.
        *   @param x               Startup position X.
        *   @param y               Startup position Y.
        *   @param spriteTemplate  The sprite template to use for this game object.
        *   @param jumpPassThrough Specifies if the player may jump through this obstacle.
        ***************************************************************************************************************/
        public constructor
        (
            shape           :ninjas.Shape,
            x               :number,
            y               :number,
            spriteTemplate  :ninjas.SpriteTemplate,
            jumpPassThrough :JumpPassThrough
        )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y
            );

            this.jumpPassThrough = jumpPassThrough;
            this.currentlyAllowPassThrough   = JumpPassThrough.NO;
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {
            super.render();
/*
            // handle obstacle that are capable of jumping through
            if ( this.jumpPassThrough == JumpPassThrough.YES )
            {
                // allow pass-through if player is ascending
                if
                (
                        this.currentlyAllowPassThrough == JumpPassThrough.NO
                    &&  ninjas.Main.game.level.player.shape.body.velocity.y < 0.0
                )
                {
                    this.currentlyAllowPassThrough = JumpPassThrough.YES;
                    this.shape.body.collisionFilter = ninjas.SettingMatterJs.COLLISION_GROUP_PASS_THROUGH_OBSTACLES;
                }
                // disable pass-through if player is not colliding
                else if
                (
                        this.currentlyAllowPassThrough == JumpPassThrough.YES
                    &&  !matter.Bounds.overlaps( ninjas.Main.game.level.player.shape.body.bounds, this.shape.body.bounds )
                )
                {
                    this.currentlyAllowPassThrough = JumpPassThrough.NO;
                    this.shape.body.collisionFilter = ninjas.SettingMatterJs.COLLISION_GROUP_COLLIDING;
                }
            }
  */
        }
    }
