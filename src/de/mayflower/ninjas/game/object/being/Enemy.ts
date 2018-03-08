
    import * as ninjas from '../../../ninjas';
    import * as matter from "matter-js";

    /*******************************************************************************************************************
    *   Represents the movement phases for an enemy.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum EnemyMovementPhase
    {
        /** Enemy walking to the right. */
        WALKING_RIGHT,
        /** Enemy standing still and facing right. */
        STANDING_RIGHT,
        /** Enemy walking to the left. */
        WALKING_LEFT,
        /** Enemy standing still and facing left. */
        STANDING_LEFT,
    }

    /*******************************************************************************************************************
    *   Represents an enemy being controlled by the system.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Enemy extends ninjas.Character
    {
        /** Flags if this enemy is dying but not already dead. */
        public                      dying                   :boolean                    = false;
        /** Flags if this character is dead. */
        public                      dead                    :boolean                    = false;
        /** The enemies' current movement phase. */
        private                     currentPhase            :EnemyMovementPhase         = null;
        /** The current delay tick between movement phases. */
        private                     currentPhaseDelayTick   :number                     = 0;
        /** Left walking target X. */
        private                     walkingTargetLeft       :number                     = 0;
        /** Right walking target X. */
        private                     walkingTargetRight      :number                     = 0;

        /***************************************************************************************************************
        *   Creates a new enemy.
        *
        *   @param shape              The shape for this object.
        *   @param x                  Startup position X.
        *   @param y                  Startup position Y.
        *   @param lookingDirection   The initial looking direction of this character.
        *   @param walkingTargetLeft  Left walking target X.
        *   @param walkingTargetRight Right walking target X.
        *   @param spriteTemplate     The sprite template to use for this game object.
        ***************************************************************************************************************/
        public constructor
        (
            shape              :ninjas.Shape,
            x                  :number,
            y                  :number,
            walkingTargetLeft  :number,
            walkingTargetRight :number,
            lookingDirection   :ninjas.CharacterLookingDirection,
            spriteTemplate     :ninjas.SpriteTemplate
        )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y,
                lookingDirection,
                ninjas.SettingMatterJs.ENEMY_SPEED_MOVE,
                0
            );

            this.walkingTargetLeft  = walkingTargetLeft;
            this.walkingTargetRight = walkingTargetRight;

            if ( this.lookingDirection == ninjas.CharacterLookingDirection.LEFT )
            {
                this.currentPhase = EnemyMovementPhase.WALKING_LEFT;
            }
            else
            {
                this.currentPhase = EnemyMovementPhase.WALKING_RIGHT;
            }
        }

        /***************************************************************************************************************
        *   Renders the current player tick.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            if ( !this.dead )
            {
                this.checkFallingDead();

                if ( !this.dying )
                {
                    this.moveAccordingToPattern();
                    this.clipToHorizontalLevelBounds();
                    this.checkPlayerCollision();
                }
            }

            this.assignCurrentSprite();
        }

        /***************************************************************************************************************
        *   Being invoked when this enemy is hit by the player.
        *
        *   @param playerDirection The current direction of the player.
        ***************************************************************************************************************/
        public onHitByPlayer( playerDirection )
        {
            // flag as dying
            this.dying = true;

            // face the player
            if ( playerDirection == ninjas.CharacterLookingDirection.LEFT )
            {
                this.lookingDirection = ninjas.CharacterLookingDirection.RIGHT;
            }
            else
            {
                this.lookingDirection = ninjas.CharacterLookingDirection.LEFT;
            }

            // disable body collisions
            this.shape.body.collisionFilter = ninjas.SettingMatterJs.COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY;

            // bring body to forefround
            ninjas.Main.game.engine.matterJsSystem.removeFromWorld( this.shape.body );
            ninjas.Main.game.engine.matterJsSystem.addToWorld(      this.shape.body );

            // punch the enemy out of the screen in the player's direction
            this.punchBack( playerDirection );
        }

        /***************************************************************************************************************
        *   Moves this enemy according to the current move pattern.
        ***************************************************************************************************************/
        private moveAccordingToPattern()
        {
            switch ( this.currentPhase )
            {
                case EnemyMovementPhase.STANDING_LEFT:
                {
                    if ( ++this.currentPhaseDelayTick >= ninjas.SettingGame.ENEMY_TICKS_STANDING_DEFAULT )
                    {
                        this.currentPhaseDelayTick = 0;
                        this.currentPhase          = EnemyMovementPhase.WALKING_RIGHT;
                    }
                    break;
                }

                case EnemyMovementPhase.STANDING_RIGHT:
                {
                    if ( ++this.currentPhaseDelayTick >= ninjas.SettingGame.ENEMY_TICKS_STANDING_DEFAULT )
                    {
                        this.currentPhaseDelayTick = 0;
                        this.currentPhase          = EnemyMovementPhase.WALKING_LEFT;
                    }
                    break;
                }

                case EnemyMovementPhase.WALKING_LEFT:
                {
                    this.moveLeft();

                    if ( this.shape.body.position.x - this.shape.getWidth() / 2 <= this.walkingTargetLeft )
                    {
                        this.currentPhase = EnemyMovementPhase.STANDING_LEFT;
                    }
                    break;
                }

                case EnemyMovementPhase.WALKING_RIGHT:
                {
                    this.moveRight();

                    if ( this.shape.body.position.x - this.shape.getWidth() / 2 >= this.walkingTargetRight )
                    {
                        this.currentPhase = EnemyMovementPhase.STANDING_RIGHT;
                    }
                    break;
                }
            }
        }

        /***************************************************************************************************************
        *   Assigns the current sprite to the enemy according to his current state.
        ***************************************************************************************************************/
        private assignCurrentSprite()
        {
            if ( this.dying )
            {
                if ( this.lookingDirection == ninjas.CharacterLookingDirection.LEFT )
                {
                    this.setSprite( ninjas.SpriteTemplate.SPRITE_ENEMY_NINJA_1_DIE_LEFT );
                }
                else
                {
                    this.setSprite( ninjas.SpriteTemplate.SPRITE_ENEMY_NINJA_1_DIE_RIGHT );
                }
            }
            else
            {
                if ( this.movesLeft )
                {
                    this.setSprite( ninjas.SpriteTemplate.SPRITE_ENEMY_NINJA_1_WALK_LEFT );
                }
                else if ( this.movesRight )
                {
                    this.setSprite( ninjas.SpriteTemplate.SPRITE_ENEMY_NINJA_1_WALK_RIGHT );
                }
                else
                {
                    if ( this.lookingDirection == ninjas.CharacterLookingDirection.LEFT )
                    {
                        this.setSprite( ninjas.SpriteTemplate.SPRITE_ENEMY_NINJA_1_STAND_LEFT );
                    }
                    else
                    {
                        this.setSprite( ninjas.SpriteTemplate.SPRITE_ENEMY_NINJA_1_STAND_RIGHT );
                    }
                }
            }
        }

        /***************************************************************************************************************
        *   Check if the enemy falls to death by falling out of the level.
        ***************************************************************************************************************/
        private checkFallingDead() : void
        {
            if ( this.shape.body.position.y - this.shape.getHeight() / 2 > ninjas.Main.game.level.height )
            {
                ninjas.Debug.character.log( "Character has fallen to dead" );

                // remove character body from world
                ninjas.Main.game.engine.matterJsSystem.removeFromWorld( this.shape.body );

                // fkag as dead
                this.dead = true;
            }
        }

        /***************************************************************************************************************
        *   Check if the enemy collides with the player.
        ***************************************************************************************************************/
        private checkPlayerCollision() : void
        {
            // only if player is not punched back
            if ( ninjas.Main.game.level.player.punchBackTicks == 0 )
            {
                // check intersection of the player and the enemy
                if ( matter.Bounds.overlaps( this.shape.body.bounds, ninjas.Main.game.level.player.shape.body.bounds ) )
                {
                    ninjas.Debug.enemy.log( "Player hit by enemy! Player is punching back now!" );

                    let playerPunchBackDirection:ninjas.CharacterLookingDirection = null;

                    if ( ninjas.Main.game.level.player.lookingDirection == ninjas.CharacterLookingDirection.LEFT )
                    {
                        playerPunchBackDirection = ninjas.CharacterLookingDirection.RIGHT;
                    }
                    else
                    {
                        playerPunchBackDirection = ninjas.CharacterLookingDirection.LEFT;
                    }

                    // punch back the player into the player's opposite direction!
                    ninjas.Main.game.level.player.punchBack( playerPunchBackDirection );

                    // flag player as punched back
                    ninjas.Main.game.level.player.punchBackTicks = ninjas.SettingGame.PUNCH_BACK_TICKS;
                }
            }
        }
    }
