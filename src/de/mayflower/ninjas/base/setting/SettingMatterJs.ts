
    import * as matter from 'matter-js';

    /*******************************************************************************************************************
    *   All adjustments and balancings for the Matter.js engine.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SettingMatterJs
    {
        /** Highest surface friction. */
        public  static  readonly    FRICTION_CONCRETE                           :number                     = 1.0;
        /** Default surface friction. */
        public  static  readonly    FRICTION_DEFAULT                            :number                     = 0.1;
        /** Low surface friction. */
        public  static  readonly    FRICTION_GLASS                              :number                     = 0.01;
        /** Lowest surface friction. */
        public  static  readonly    FRICTION_ICE                                :number                     = 0.0;

        /** Character density. */
        public  static  readonly    DENSITY_HUMAN                               :number                     = 0.01;
        /** Default density. */
        public  static  readonly    DENSITY_DEFAULT                             :number                     = 0.001;

        /** The default jump power. */
        public  static  readonly    PLAYER_JUMP_POWER                           :number                     = -25.0;
        /** The player's speed in world coordinate per tick. */
        public  static  readonly    PLAYER_SPEED_MOVE                           :number                     = 7.5;
        /** The player's gap size y of it's physical body corners. */
        public  static  readonly    PLAYER_EDGE_GAP_Y                           :number                     = 10.0;

        /** The default vertical gravity for all levels. */
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
