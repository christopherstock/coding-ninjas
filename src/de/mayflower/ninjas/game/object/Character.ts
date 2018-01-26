
    import * as Matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents a character.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class Character extends ninjas.GameObject
    {
        /** The default jump power ( player ). */
        public      static  readonly    JUMP_POWER_DEFAULT                  :number                             = -10.0;

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
        *   @param image            The image for this game object.
        *   @param lookingDirection The initial looking direction.
        *   @param speedMove        The speed for horizontal movement.
        *   @param jumpPower        The vertical force to apply on jumping.
        ***************************************************************************************************************/
        public constructor
        (
            shape            :ninjas.Shape,
            x                :number,
            y                :number,
            image            :HTMLImageElement,
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
                image
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
                Matter.World.remove( ninjas.Main.game.engine.world, this.shape.body );

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
            let bodiesToCheck:Array<Matter.Body> = [];
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
            this.collidesBottom = Matter.Query.ray
            (
                bodiesToCheck,
                Matter.Vector.create( this.shape.body.position.x - ( this.shape.getWidth() / 2 ), this.shape.body.position.y + ( this.shape.getHeight() / 2 ) ),
                Matter.Vector.create( this.shape.body.position.x + ( this.shape.getWidth() / 2 ), this.shape.body.position.y + ( this.shape.getHeight() / 2 ) )
            ).length > 0;
        }

        /***************************************************************************************************************
        *   Lets this character jump.
        ***************************************************************************************************************/
        protected jump()
        {
            if ( this.collidesBottom )
            {
                Matter.Body.applyForce
                (
                    this.shape.body,
                    this.shape.body.position,
                    Matter.Vector.create( 0.0, this.jumpPower )
                );
            }
        }

        /***************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveLeft()
        {
            Matter.Body.translate( this.shape.body, Matter.Vector.create( -this.speedMove, 0 ) );

            this.lookingDirection = ninjas.CharacterLookingDirection.LEFT;
        }

        /***************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveRight()
        {
            Matter.Body.translate( this.shape.body, Matter.Vector.create( this.speedMove, 0 ) );

            this.lookingDirection = ninjas.CharacterLookingDirection.RIGHT;
        }
    }
