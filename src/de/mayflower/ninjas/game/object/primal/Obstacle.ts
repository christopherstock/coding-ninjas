
    import * as ninjas from '../../../ninjas';
    import * as matter from "matter-js";

    /*******************************************************************************************************************
    *   Specifies if an obstacle allows jump pass through.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
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
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Obstacle extends ninjas.GameObject
    {
        /** Specifies if the player shall be allowed to jump through this obstacle. */
        private         jumpPassThrough             :JumpPassThrough                    = null;
        /** Specifies if the obstacle currently allows passing through. */
        private         isPassThrough               :JumpPassThrough                    = null;

        /***************************************************************************************************************
        *   Creates a new obstacle.
        *
        *   @param shape           The shape for this object.
        *   @param x               Startup position X.
        *   @param y               Startup position Y.
        *   @param jumpPassThrough Specifies if the player may jump through this obstacle.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, x:number, y:number, jumpPassThrough:JumpPassThrough )
        {
            super
            (
                shape,
                null,
                x,
                y
            );

            this.jumpPassThrough = jumpPassThrough;
            this.isPassThrough   = JumpPassThrough.NO;
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            if ( this.jumpPassThrough == JumpPassThrough.YES )
            {
                // check collision release if colliding
                if
                (
                       this.isPassThrough == JumpPassThrough.NO
                    && ninjas.Main.game.level.player.isJumping()
                )
                {
                    this.isPassThrough = JumpPassThrough.YES;
                    this.shape.body.collisionFilter = ninjas.SettingMatterJs.COLLISION_GROUP_PASS_THROUGH_OBSTACLES;
                }

                // check collision activation if non-colliding
                else if
                (
                       this.isPassThrough == JumpPassThrough.YES
                    && (
                            ninjas.Main.game.level.player.isFalling()
                        ||  ninjas.Main.game.level.player.isMoving()
                    )
                )
                {
                    let colliding:boolean = false;

                    for ( let i:number = 0; i < this.shape.body.vertices.length; ++i )
                    {
                        let vector     :matter.Vector = this.shape.body.vertices[ i     ];
                        let nextVector :matter.Vector = this.shape.body.vertices[ ( i == this.shape.body.vertices.length - 1 ? 0 : i + 1 ) ];

                        if ( matter.Query.ray( [ ninjas.Main.game.level.player.shape.body ], vector, nextVector ).length > 0 )
                        {
                            colliding = true;
                            break;
                        }
                    }

                    // only if player is not currently colliding!
                    if ( !colliding )
                    {
                        this.isPassThrough = JumpPassThrough.NO;
                        this.shape.body.collisionFilter = ninjas.SettingMatterJs.COLLISION_GROUP_COLLIDING;
                    }
                }
            }
        }
    }
