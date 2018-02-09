
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents a character's looking direction.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum CharacterLookingDirection
    {
        /** Looking left. */
        LEFT,

        /** Looking right. */
        RIGHT,
    }

    /*******************************************************************************************************************
    *   Represents a character.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class Character extends ninjas.GameObject
    {
        /** The looking direction for this character. */
        public                          lookingDirection                    :ninjas.CharacterLookingDirection   = null;

        /** Flags if this character is dead. */
        protected                       dead                                :boolean                            = false;

        /** Flags if the character currently collides with the bottom sensor. */
        public                          collidesBottom                      :boolean                            = false;
        /** Flags if the character is currently moving left. */
        public                          movesLeft                           :boolean                            = false;
        /** Flags if the character is currently moving right. */
        public                          movesRight                          :boolean                            = false;

        /** The speed for horizontal movements. */
        private                         speedMove                           :number                             = 0.0;
        /** The jump power to apply for this character. */
        private                         jumpPower                           :number                             = 0.0;

        /***************************************************************************************************************
        *   Creates a new character.
        *
        *   @param shape            The shape for this object.
        *   @param spriteTemplate   The sprite template to use for this game object.
        *   @param x                Startup position X.
        *   @param y                Startup position Y.
        *   @param lookingDirection The initial looking direction.
        *   @param speedMove        The speed for horizontal movement.
        *   @param jumpPower        The vertical force to apply on jumping.
        ***************************************************************************************************************/
        public constructor
        (
            shape            :ninjas.Shape,
            spriteTemplate   :ninjas.SpriteTemplate,
            x                :number,
            y                :number,
            lookingDirection :ninjas.CharacterLookingDirection,
            speedMove        :number,
            jumpPower        :number
        )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y
            );

            this.lookingDirection = lookingDirection;
            this.speedMove        = speedMove;
            this.jumpPower        = jumpPower;
        }

        /***************************************************************************************************************
        *   Renders the current character tick.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            this.movesLeft  = false;
            this.movesRight = false;

            this.resetRotation();
            this.clipToHorizontalLevelBounds();
            this.checkBottomCollision();

            if ( !this.dead )
            {
                this.checkFallingDead();
            }
        }

        /***************************************************************************************************************
        *   Kills this character.
        ***************************************************************************************************************/
        public kill()
        {
            this.dead = true;
        }

        /***************************************************************************************************************
        *   Lets this character jump.
        ***************************************************************************************************************/
        protected jump()
        {
            matter.Body.applyForce
            (
                this.shape.body,
                this.shape.body.position,
                matter.Vector.create( 0.0, this.jumpPower )
            );
        }

        /***************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveLeft()
        {
            matter.Body.translate( this.shape.body, matter.Vector.create( -this.speedMove, 0 ) );

            this.movesLeft        = true;
            this.lookingDirection = ninjas.CharacterLookingDirection.LEFT;
        }

        /***************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveRight()
        {
            matter.Body.translate( this.shape.body, matter.Vector.create( this.speedMove, 0 ) );

            this.movesRight       = true;
            this.lookingDirection = ninjas.CharacterLookingDirection.RIGHT;
        }

        /***************************************************************************************************************
        *   Checks if this character is currently falling.
        ***************************************************************************************************************/
        public isFalling()
        {
            return ( this.shape.body.velocity.y > 0.0 && !this.collidesBottom );
        }

        /***************************************************************************************************************
        *   Checks if this character is currently ascending.
        ***************************************************************************************************************/
        public isJumping()
        {
            return ( this.shape.body.velocity.y < 0.0 && !this.collidesBottom );
        }

        /***************************************************************************************************************
        *   Checks if this character is currently moving.
        ***************************************************************************************************************/
        public isMoving()
        {
            return ( this.movesLeft || this.movesRight );
        }

        /***************************************************************************************************************
        *   Check if the player falls to death by falling out of the level.
        ***************************************************************************************************************/
        private checkFallingDead()
        {
            if ( this.shape.body.position.y - this.shape.getHeight() / 2 > ninjas.Main.game.level.height )
            {
                ninjas.Debug.bugfix.log( "Character has fallen to dead" );

                // remove character body
                ninjas.Main.game.engine.matterJsSystem.removeFromWorld( this.shape.body );

                this.kill();
            }
        }

        /***************************************************************************************************************
        *   Checks if the character's bottom line currently collides with any other colliding body.
        *
        *   @return <code>true</code> if a bottom collision is currently active.
        ***************************************************************************************************************/
        private checkBottomCollision()
        {
            // browse all game objects
            let bodiesToCheck:Array<matter.Body> = [];
            for ( let gameObject of ninjas.Main.game.level.gameObjects )
            {
                // skip own body and non-colliding game objects
                if
                (
                        gameObject.shape.body == this.shape.body
                    ||  gameObject.shape.body.collisionFilter == ninjas.SettingMatterJs.COLLISION_GROUP_NON_COLLIDING_ITEM
                    ||  gameObject.shape.body.collisionFilter == ninjas.SettingMatterJs.COLLISION_GROUP_NON_COLLIDING_DECO
                    ||  gameObject.shape.body.collisionFilter == ninjas.SettingMatterJs.COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY
                )
                {
                    continue;
                }

                bodiesToCheck.push( gameObject.shape.body );
            }

            // check colliding bodies
            this.collidesBottom = matter.Query.ray
            (
                bodiesToCheck,
                matter.Vector.create( this.shape.body.position.x - ( this.shape.getWidth() / 2 ), this.shape.body.position.y + ( this.shape.getHeight() / 2 ) ),
                matter.Vector.create( this.shape.body.position.x + ( this.shape.getWidth() / 2 ), this.shape.body.position.y + ( this.shape.getHeight() / 2 ) )
            ).length > 0;
        }
    }
