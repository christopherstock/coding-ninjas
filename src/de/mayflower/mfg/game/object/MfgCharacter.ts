
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a character.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class MfgCharacter extends mfg.MfgGameObject
    {
        /** The default jump power ( player ). */
        public      static  readonly    JUMP_POWER_DEFAULT                  :number                             = -4.0;

        protected   static  readonly    MAX_TICKS_WITHOUT_BOTTOM_COLLISION  :number                             = 15;

        /** The looking direction for this character. */
        public                          lookingDirection                    :mfg.MfgCharacterLookingDirection   = null;

        /** Flags if this character is dead. */
        protected                       dead                                :boolean                            = false;

        /** flags if the character collides with the bottom sensor. */
        public                          collidesBottom                      :boolean                            = false;

        /** The speed for horizontal movements. */
        private                         speedMove                           :number                             = 0.0;

        /** The jump power to apply for this character. */
        private                         jumpPower                           :number                             = 0.0;

        /** Current ticks being passed without character bottom collision. */
        protected                       ticksWithoutBottomCollision         :number                             = 0;

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
            shape:mfg.MfgShape,
            x:number,
            y:number,
            image:string,
            lookingDirection:mfg.MfgCharacterLookingDirection,
            speedMove:number,
            jumpPower:number
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
            if ( this.collidesBottom ) this.ticksWithoutBottomCollision = 0;

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
            if ( this.shape.body.position.y - this.shape.getHeight() / 2 > mfg.Mfg.game.level.height )
            {
                mfg.MfgDebug.bugfix.log( "Character has fallen to dead" );

                // remove character body
                Matter.World.remove( mfg.Mfg.game.engine.world, this.shape.body );

                this.kill();
            }
        }

        /***************************************************************************************************************
        *   Kills this character.
        *
        *   TODO abstract!
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
            for ( let gameObject of mfg.Mfg.game.level.gameObjects )
            {
                // skip own body and non-colliding game objects
                if
                (
                        gameObject.shape.body == this.shape.body
                    ||  gameObject.shape.body.collisionFilter == mfg.MfgSettings.COLLISION_GROUP_NON_COLLIDING_ITEM
                    ||  gameObject.shape.body.collisionFilter == mfg.MfgSettings.COLLISION_GROUP_NON_COLLIDING_DECO
                    ||  gameObject.shape.body.collisionFilter == mfg.MfgSettings.COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY
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

            this.lookingDirection = mfg.MfgCharacterLookingDirection.LEFT;
        }

        /***************************************************************************************************************
        *   Moves this character left.
        ***************************************************************************************************************/
        protected moveRight()
        {
            Matter.Body.translate( this.shape.body, Matter.Vector.create( this.speedMove, 0 ) );

            this.lookingDirection = mfg.MfgCharacterLookingDirection.RIGHT;
        }
    }
