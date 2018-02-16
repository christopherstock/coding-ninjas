
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
        public      width                   :number                     = 13884.0;
        /** The height of this level. */
        public      height                  :number                     = 10000.0;

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        protected createGameObjects()
        {
            // just some preliminary tryouts ...

            this.parallaxBgs =
            [
                // ninjas.GameObjectFactory.createParallaxDeco( 0,  2200, 1.0, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BG_TEST ) ),
            ];

            this.decosBg =
            [
                ninjas.GameObjectFactory.createDecorationCircular( 4400, 1750, ninjas.StaticShape.NO, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BOULDER_2 ) ),
            ];

            this.siteTriggers =
            [
/*
                ninjas.GameObjectFactory.createSiteTrigger( 2800, 2000, 500, 500, ninjas.SitePanelAppearance.PLAYER_LOOKING ),
*/
            ];

            this.obstacles =
            [
                // ascending ramp
/*
                ninjas.GameObjectFactory.createElevatedRamp( 1608, 2500, 1280.0, 15.0, -200.0, null, ninjas.JumpPassThrough.NO ),
*/
/*
                // pass-through obstacles
                ninjas.GameObjectFactory.createObstacle( 1500, 2200, 300, 15, 0.0, ninjas.JumpPassThrough.YES ),
                ninjas.GameObjectFactory.createObstacle( 1200, 2100, 300, 15, 0.0, ninjas.JumpPassThrough.YES ),
                ninjas.GameObjectFactory.createElevatedRamp( 800, 2200, 350.0, 15.0, -200.0, ninjas.JumpPassThrough.YES ),
*/
            ];

            this.movables =
            [
/*
                ninjas.GameObjectFactory.createWoodenCrate(  750,  2100 ),
                ninjas.GameObjectFactory.createWoodenCrate(  250,  2500 ),
                ninjas.GameObjectFactory.createWoodenCrate(  700,  2500 ),
*/
                // ninjas.GameObjectFactory.createMetalCrate(   1000, 2100 ),
                // ninjas.GameObjectFactory.createSphere( 1200, 2500, ninjas.SettingMatterJs.FRICTION_ICE, ninjas.SettingMatterJs.DENSITY_DEFAULT ),
            ];

            this.enemies =
            [
                // enemies (fg)
                // ninjas.GameObjectFactory.createEnemy( 1200, 0 ),
            ];

            this.player = ninjas.GameObjectFactory.createPlayer
            (
                8000,
                4500,
                ninjas.CharacterLookingDirection.RIGHT,
                ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_STAND_RIGHT
            );

            this.decosFg =
            [
                ninjas.GameObjectFactory.createDecorationCircular( 4430, 1500, ninjas.StaticShape.NO, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BOULDER_1 ) ),
            ];

            this.parallaxFgs =
            [
            ];
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
*/

            // crafting the level!
            ninjas.GameObjectBundleFactory.createSolidGround( this, 0,     5000, 18, 10, ninjas.Slope.NONE,       ninjas.CapHorz.NONE  );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 2304,  5000, 10, 10, ninjas.Slope.ASCENDING,  ninjas.CapHorz.NONE  );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 3584,  4800, 20, 10, ninjas.Slope.NONE,       ninjas.CapHorz.RIGHT );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 6844,  4800, 15, 10, ninjas.Slope.NONE,       ninjas.CapHorz.LEFT  );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 8764,  4800, 15, 10, ninjas.Slope.DESCENDING, ninjas.CapHorz.NONE  );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 10684, 5100, 25, 10, ninjas.Slope.NONE,       ninjas.CapHorz.NONE  );
            ninjas.GameObjectBundleFactory.createSolidGround( this, 12000, 4200, 12,  2, ninjas.Slope.NONE,       ninjas.CapHorz.BOTH  );

            ninjas.GameObjectBundleFactory.createFlyingGround( this, 5062,  4430, 3, ninjas.Slope.NONE,      ninjas.JumpPassThrough.NO, ninjas.CapHorz.BOTH );
            ninjas.GameObjectBundleFactory.createFlyingGround( this, 4038,  4060, 7, ninjas.Slope.NONE,      ninjas.JumpPassThrough.NO, ninjas.CapHorz.BOTH );
            ninjas.GameObjectBundleFactory.createFlyingGround( this, 9800,  4600, 3, ninjas.Slope.ASCENDING, ninjas.JumpPassThrough.NO, ninjas.CapHorz.BOTH );
            ninjas.GameObjectBundleFactory.createFlyingGround( this, 10800, 4400, 3, ninjas.Slope.ASCENDING, ninjas.JumpPassThrough.NO, ninjas.CapHorz.BOTH );
        }
    }
