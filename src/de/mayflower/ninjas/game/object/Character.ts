
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

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

        /** The speed for horizontal movements. */
        private                         speedMove                           :number                             = 0.0;

        /** The jump power to apply for this character. */
        private                         jumpPower                           :number                             = 0.0;

        /***************************************************************************************************************
        *   Creates a new character.
        *
        *   @param shape            The shape for this object.
        *   @param x                Startup position X.
        *   @param y                Startup position Y.
        *   @param sprite            The image for this game object.
        *   @param lookingDirection The initial looking direction.
        *   @param speedMove        The speed for horizontal movement.
        *   @param jumpPower        The vertical force to apply on jumping.
        ***************************************************************************************************************/
        public constructor
        (
            shape            :ninjas.Shape,
            x                :number,
            y                :number,
            sprite           :ninjas.Sprite,
            lookingDirection :ninjas.CharacterLookingDirection,
            speedMove        :number,
            jumpPower        :number
        )
        {
            super
            (
                shape,
                x,
                y,
                sprite
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

            this.checkBottomCollision();
            this.resetRotation();
            this.clipToHorizontalLevelBounds();

            if ( !this.dead )
            {
                this.checkFallingDead();
            }
        }

        /***************************************************************************************************************
        *   Check if the player falls to death by falling out of the level.
        ***************************************************************************************************************/
        protected checkFallingDead()
        {
            if ( this.shape.body.position.y - this.shape.getHeight() / 2 > ninjas.Main.game.level.height )
            {
                ninjas.Debug.bugfix.log( "Character has fallen to dead" );

                // remove character body
                matter.World.remove( ninjas.Main.game.engine.world, this.shape.body );

                this.kill();
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
                    ||  gameObject.shape.body.collisionFilter == ninjas.Setting.COLLISION_GROUP_NON_COLLIDING_ITEM
                    ||  gameObject.shape.body.collisionFilter == ninjas.Setting.COLLISION_GROUP_NON_COLLIDING_DECO
                    ||  gameObject.shape.body.collisionFilter == ninjas.Setting.COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY
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

        /***************************************************************************************************************
        *   Lets this character jump.
        ***************************************************************************************************************/
        protected jump()
        {
            if ( this.collidesBottom )
            {
                matter.Body.applyForce
                (
                    this.shape.body,
                    this.shape.body.position,
                    matter.Vector.create( 0.0, this.jumpPower )
                );
            }
        }

        /***************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveLeft()
        {
            matter.Body.translate( this.shape.body, matter.Vector.create( -this.speedMove, 0 ) );

            this.lookingDirection = ninjas.CharacterLookingDirection.LEFT;
        }

        /***************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveRight()
        {
            matter.Body.translate( this.shape.body, matter.Vector.create( this.speedMove, 0 ) );

            this.lookingDirection = ninjas.CharacterLookingDirection.RIGHT;
        }
    }
