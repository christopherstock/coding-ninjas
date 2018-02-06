
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   The level set for the dev level.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class LevelWebsite extends ninjas.Level
    {
        /** The width of this level. */
        public      width                   :number                     = 5000.0;
        /** The height of this level. */
        public      height                  :number                     = 5000.0;

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        protected createGameObjects()
        {
            // init player
            this.player = new ninjas.Player
            (
                2500,
                2500,
                ninjas.CharacterLookingDirection.RIGHT,
                ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_STANDING_RIGHT
            );

            // setup all game objects
            this.gameObjects =
            [
/*
                // parallax background
                ninjas.GameObjectFactory.createParallaxDeco( 0,  2200, 1.0, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BG_TEST ) ),
*/
                // grounds and walls
                ninjas.GameObjectFactory.createObstacle( 0, 2500, 5000, 15, 0.0,  false ),

                // bg decoration
                ninjas.GameObjectFactory.createDecoration( 400,  2500, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_TREE ) ),
                ninjas.GameObjectFactory.createDecoration( 1200, 2500, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_TREE ) ),

                // site trigger
                ninjas.GameObjectFactory.createSiteTrigger( 2800, 2000, 500, 500, null ),

                // moveable boxes
                ninjas.GameObjectFactory.createCrate(  300, 2500, ninjas.SettingMatterJs.FRICTION_ICE, ninjas.SettingMatterJs.DENSITY_DEFAULT ),
                ninjas.GameObjectFactory.createCrate(  500, 2500, ninjas.SettingMatterJs.FRICTION_ICE, ninjas.SettingMatterJs.DENSITY_DEFAULT ),

                // ninjas.GameObjectFactory.createSphere( 1200, 2500, ninjas.SettingMatterJs.FRICTION_ICE, ninjas.SettingMatterJs.DENSITY_DEFAULT ),

/*
                // sigsaws and bounces
                ninjas.GameObjectFactory.createSigsaw( 1490, 830,  400, 25, null ),
                ninjas.GameObjectFactory.createBounce( 1900, 830,  400, 25, null ),

                // animated platforms
                ninjas.GameObjectFactory.createPlatform
                (
                    200.0,
                    15.0,
                    null,
                    ninjas.Platform.SPEED_NORMAL,
                    [
                        matter.Vector.create( 2820.0, 830.0 ),
                        matter.Vector.create( 3020.0, 830.0 ),
                    ]
                ),

                // items
                ninjas.GameObjectFactory.createItem( 900,  620 ),
                ninjas.GameObjectFactory.createItem( 950,  620 ),
                ninjas.GameObjectFactory.createItem( 1000, 620 ),
                ninjas.GameObjectFactory.createItem( 2500, 740 ),
                ninjas.GameObjectFactory.createItem( 2550, 740 ),
                ninjas.GameObjectFactory.createItem( 2600, 740 ),

                // free form
                ninjas.GameObjectFactory.createFreeForm(
                    3730.0,
                    730.0,
                    [
                        matter.Vector.create( 0.0,   0.0    ),
                        matter.Vector.create( 350.0, -100.0 ),
                        matter.Vector.create( 350.0, -85.0  ),
                        matter.Vector.create( 0.0,   15.0   ),
                    ],
                    0.0
                ),

                // ascending ramp
                ninjas.GameObjectFactory.createElevatedRamp( 4600.0, 730.0, 1000.0, 15.0, -200.0 ),
*/
                // player
                this.player,
/*
                // enemies (fg)
                ninjas.GameObjectFactory.createEnemy( 1200, 0 ),
*/
                // fg decoration
                ninjas.GameObjectFactory.createDecoration( 800,  2500, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_TREE ) ),
                ninjas.GameObjectFactory.createDecoration( 1600, 2500, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_TREE ) ),
            ];
        }
    }
