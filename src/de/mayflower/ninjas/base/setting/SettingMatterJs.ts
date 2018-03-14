
    import * as matter from 'matter-js';

    /*******************************************************************************************************************
    *   All adjustments and balancings for the Matter.js engine.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class SettingMatterJs
    {
        /** The default jump power. */
        public  static  readonly    PLAYER_JUMP_POWER                           :number                     = -2.75;
        /** The player's speed in world coordinate per tick. */
        public  static  readonly    PLAYER_SPEED_MOVE                           :number                     = 7.5;
        /** The player's gap size y of it's physical body corners. */
        public  static  readonly    PLAYER_EDGE_GAP_Y                           :number                     = 12.5;

        /** The enemies' moving speed X. */
        public  static  readonly    ENEMY_SPEED_MOVE                            :number                     = 3.0;

        /** The default vertical gravity for all objects. */
        public  static  readonly    DEFAULT_GRAVITY_Y                           :number                     = 1.0;

        /** The default collision group for all game objects. */
        public  static  readonly    COLLISION_GROUP_COLLIDING                   :matter.ICollisionFilter    =
        {
            category: 0x0001,
            mask:     0x0001,
            group:    0x0001,
        };

        /** The collision group for all non-colliding items. */
        public  static  readonly    COLLISION_GROUP_NON_COLLIDING_ITEM          :matter.ICollisionFilter    =
        {
            category: 0x0002,
            mask:     0x0002,
            group:    0x0002,
        };

        /** The collision group for all non-colliding decos. */
        public  static  readonly    COLLISION_GROUP_NON_COLLIDING_DECO          :matter.ICollisionFilter    =
        {
            category: 0x0004,
            mask:     0x0004,
            group:    0x0004,
        };

        /** The collision group for all non-colliding dead enemies. */
        public  static  readonly    COLLISION_GROUP_NON_COLLIDING_DEAD_ENEMY    :matter.ICollisionFilter    =
        {
            category: 0x0008,
            mask:     0x0008,
            group:    0x0008,
        };

        /** The collision group for all pass-through obstacles. */
        public  static  readonly    COLLISION_GROUP_PASS_THROUGH_OBSTACLES      :matter.ICollisionFilter    =
        {
            category: 0x0016,
            mask:     0x0016,
            group:    0x0016,
        };
    }

    /*******************************************************************************************************************
    *   Possible frictions for Matter.js bodies.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum BodyFriction
    {
        /** Default surface friction. */
        DEFAULT     = 0.1,

        /** Friction for obstacles. */
        OBSTACLE    = BodyFriction.DEFAULT,
        /** Player friction. */
        PLAYER      = BodyFriction.DEFAULT,
        /** Rubber friction. */
        RUBBER      = 0.001,

        /** Player friction. */
        // WOOD        = BodyFriction.DEFAULT,
        /** Low surface friction. */
        // GLASS       = 0.01,

        /** Minimum friction. */
        // MINIMUM     = 0.001,

        /** Lowest surface friction. */
        NONE        = 0.0,
    }

    /*******************************************************************************************************************
    *   Possible air frictions for Matter.js bodies.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum BodyFrictionAir
    {
        /** Default air friction. */
        DEFAULT     = 0.01,

        /** Air friction using a parachute. */
        GLIDING     = 0.05,
    }

    /*******************************************************************************************************************
    *   Possible densities for Matter.js bodies.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum BodyDensity
    {
        /** Default density. */
        DEFAULT     = 0.001,
        /** Player */
        PLAYER      = BodyDensity.DEFAULT,
        /** Wood */
        WOOD        = ( BodyDensity.DEFAULT * 4 ),
        /** Metal */
        // METAL       = ( BodyDensity.DEFAULT * 10 ),
        /** Rubber */
        RUBBER      = ( BodyDensity.DEFAULT / 10 ),

        /** Minimum body density. */
        MINIMUM     = 0.000001,

        /** Static objects */
        INFINITE    = Infinity,
    }

    /*******************************************************************************************************************
    *   Possible restitutions for Matter.js bodies.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum BodyRestitution
    {
        /** Default restitution (none). */
        DEFAULT     = 0.0,

        /** Wood. */
        WOOD        = 0.75,

        /** Rubber. */
        RUBBER      = 0.9,
    }
