
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
            this.parallaxBgs =
            [
                // ninjas.GameObjectFactory.createParallaxDeco( 0,  2200, 1.0, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BG_TEST ) ),
            ];

            this.decosBg =
            [
/*
                ninjas.GameObjectFactory.createDecoration( 200,  2500, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BOULDER_1 ) ),
                ninjas.GameObjectFactory.createDecoration( 1000, 2500, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BOULDER_2 ) ),
                ninjas.GameObjectFactory.createDecoration( 1250, 2500, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BOULDER_3 ) ),
*/
            ];

            this.siteTriggers =
            [
/*
                ninjas.GameObjectFactory.createSiteTrigger( 2800, 2000, 500, 500, ninjas.SitePanelAppearance.PLAYER_LOOKING ),
*/
            ];

            this.obstacles =
            [
/*
                // grounds and walls
                ninjas.GameObjectFactory.createObstacle( 0,    2500, 3500, 15, 0.0, ninjas.JumpPassThrough.NO ),
                ninjas.GameObjectFactory.createObstacle( 4250, 2300, 750,  15, 0.0, ninjas.JumpPassThrough.NO ),
*/
/*
                // ascending ramp
                ninjas.GameObjectFactory.createElevatedRamp( 3500, 2500, 750.0, 15.0, -200.0, ninjas.JumpPassThrough.NO ),
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
                ninjas.GameObjectFactory.createWoodenCrate(  750,  2100 ),
                ninjas.GameObjectFactory.createWoodenCrate(  500,  2500 ),
                ninjas.GameObjectFactory.createWoodenCrate(  700,  2500 ),
                ninjas.GameObjectFactory.createMetalCrate(   1000, 2100 ),

                // ninjas.GameObjectFactory.createSphere( 1200, 2500, ninjas.SettingMatterJs.FRICTION_ICE, ninjas.SettingMatterJs.DENSITY_DEFAULT ),
            ];

            this.enemies =
            [
                // enemies (fg)
                // ninjas.GameObjectFactory.createEnemy( 1200, 0 ),
            ];

            this.player = ninjas.GameObjectFactory.createPlayer
            (
                300,
                2500,
                ninjas.CharacterLookingDirection.RIGHT,
                ninjas.SpriteTemplate.SPRITE_NINJA_GIRL_STANDING_RIGHT
            );

            this.decosFg =
            [
/*
                ninjas.GameObjectFactory.createDecoration( 400, 2500, ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_FENCE_1 ) ),
*/
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

/*
            ninjas.GameObjectBundleFactory.createFlyingGround( 0,    2500, 5, ninjas.CapEnds.LEFT,  this );
            ninjas.GameObjectBundleFactory.createFlyingGround( 1200, 2500, 4, ninjas.CapEnds.BOTH,  this );
            ninjas.GameObjectBundleFactory.createFlyingGround( 2200, 2500, 6, ninjas.CapEnds.RIGHT, this );
            ninjas.GameObjectBundleFactory.createFlyingGround( 3600, 2500, 6, ninjas.CapEnds.NONE,  this );
*/
            ninjas.GameObjectBundleFactory.createSolidGround( 200,   2500, 10, 4, ninjas.CapHorz.BOTH, ninjas.CapVert.BOTH, this );
        }
    }
