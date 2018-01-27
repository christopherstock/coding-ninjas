
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   The level set for the level 'enchanted woods'.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class LevelEnchantedWoods extends ninjas.Level
    {
        /** The width of this level. */
        public      width                   :number                     = 3000.0;
        /** The height of this level. */
        public      height                  :number                     = 1500.0;

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        protected createGameObjects()
        {
            // init player
            this.player = new ninjas.Player
            (
                750,
                880,
                ninjas.CharacterLookingDirection.RIGHT,
                new ninjas.Sprite( ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_STANDING_RIGHT )
            );

            // setup all game objects
            this.gameObjects =
            [
                // floor
                ninjas.GameObjectFactory.createObstacle( 0, 1000, 1250, 500, 0.0, false ),
                ninjas.GameObjectFactory.createElevatedRamp( 1250, 1000, 750, 500, -100.0 ),
                ninjas.GameObjectFactory.createObstacle( 2000, 900, 1250, 500, 0.0, false ),


                // hut
                ninjas.GameObjectFactory.createDecoration( 140, 870, 350, 130, null ),

                // bg decoration
                ninjas.GameObjectFactory.createDecoration( 350,  870, 120, 90, new ninjas.Sprite( ninjas.SpriteTemplate.SPRITE_TREE ) ),
                ninjas.GameObjectFactory.createDecoration( 850,  870, 120, 90, new ninjas.Sprite( ninjas.SpriteTemplate.SPRITE_TREE ) ),
                ninjas.GameObjectFactory.createDecoration( 1350, 850, 120, 90, new ninjas.Sprite( ninjas.SpriteTemplate.SPRITE_TREE ) ),

                // moveable boxes

                // sigsaws

                // items
                ninjas.GameObjectFactory.createItem( 10,  1000 - 52 ),
                ninjas.GameObjectFactory.createItem( 40,  1000 - 52 ),
                ninjas.GameObjectFactory.createItem( 70,  1000 - 52 ),
                ninjas.GameObjectFactory.createItem( 100, 1000 - 52 ),

                // enemies

                // player
                this.player,

                // fg decoration
                ninjas.GameObjectFactory.createDecoration( 600,  870, 120, 90, new ninjas.Sprite( ninjas.SpriteTemplate.SPRITE_TREE ) ),
                ninjas.GameObjectFactory.createDecoration( 1100, 870, 120, 90, new ninjas.Sprite( ninjas.SpriteTemplate.SPRITE_TREE ) ),
                ninjas.GameObjectFactory.createDecoration( 1600, 817, 120, 90, new ninjas.Sprite( ninjas.SpriteTemplate.SPRITE_TREE ) ),
            ];
        }
    }
