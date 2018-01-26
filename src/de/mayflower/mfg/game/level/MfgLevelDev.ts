
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   The level set for the dev level.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgLevelDev extends mfg.MfgLevel
    {
        /** The width of this level. */
        public      width                   :number                     = 10000.0;
        /** The height of this level. */
        public      height                  :number                     = 1000.0;

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        protected createGameObjects()
        {
            // init player
            this.player = new mfg.MfgPlayer( 50, 500.0, mfg.MfgCharacterLookingDirection.RIGHT );

            // setup all game objects
            this.gameObjects =
            [
                // grounds and ramps
                mfg.MfgGameObjectFactory.createBlock( 0,    620, 500, 15, 0.0,  false ),
                mfg.MfgGameObjectFactory.createBlock( 490,  765, 500, 15, 15.0, false ),
                mfg.MfgGameObjectFactory.createBlock( 980,  830, 500, 15, 0.0,  false ),
                mfg.MfgGameObjectFactory.createBlock( 2310, 830, 500, 15, 0.0,  false ),
                mfg.MfgGameObjectFactory.createBlock( 3230, 830, 500, 15, 0.0,  false ),
                mfg.MfgGameObjectFactory.createBlock( 4080, 730, 500, 15, 0.0,  false ),

                // bg decoration
                mfg.MfgGameObjectFactory.createDecoration( 30,   450, 76, 170, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 370, 450, 76, 170, mfg.MfgImage.IMAGE_TREE ),

                // moveable boxes
                mfg.MfgGameObjectFactory.createBox(    300,  160, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createSphere( 350,  240, 80,     mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    400,  320, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    450,  400, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createSphere( 500,  320, 80,     mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    550,  240, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    600,  160, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createSphere( 650,  80,  80,     mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    700,  0,   80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),

                mfg.MfgGameObjectFactory.createBox(    1300, -3160, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createSphere( 1350, -3240, 80,     mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    1400, -3320, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    1450, -3400, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createSphere( 1500, -3320, 80,     mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    1550, -3240, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    1600, -3160, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createSphere( 1650, -3180, 80,     mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),
                mfg.MfgGameObjectFactory.createBox(    1700, -3000, 80, 80, mfg.MfgGameObject.FRICTION_ICE, mfg.MfgGameObject.DENSITY_DEFAULT ),

                // sigsaws and bounces
                mfg.MfgGameObjectFactory.createSigsaw( 1490, 830,  400, 25, null ),
                mfg.MfgGameObjectFactory.createBounce( 1900, 830,  400, 25, null ),

                // animated platforms
                mfg.MfgGameObjectFactory.createPlatform
                (
                    200.0,
                    15.0,
                    null,
                    mfg.MfgPlatform.SPEED_NORMAL,
                    [
                        Matter.Vector.create( 2820.0, 830.0 ),
                        Matter.Vector.create( 3020.0, 830.0 ),
                    ]
                ),

                // items
                mfg.MfgGameObjectFactory.createItem( 900,  620 ),
                mfg.MfgGameObjectFactory.createItem( 950,  620 ),
                mfg.MfgGameObjectFactory.createItem( 1000, 620 ),
                mfg.MfgGameObjectFactory.createItem( 2500, 740 ),
                mfg.MfgGameObjectFactory.createItem( 2550, 740 ),
                mfg.MfgGameObjectFactory.createItem( 2600, 740 ),

                // free form
                mfg.MfgGameObjectFactory.createFreeForm(
                    3730.0,
                    730.0,
                    [
                        Matter.Vector.create( 0.0,   0.0    ),
                        Matter.Vector.create( 350.0, -100.0 ),
                        Matter.Vector.create( 350.0, -85.0  ),
                        Matter.Vector.create( 0.0,   15.0   ),
                    ],
                    0.0
                ),

                // ascending ramp
                mfg.MfgGameObjectFactory.createElevatedRamp( 4600.0, 730.0, 1000.0, 15.0, -200.0 ),

                // player
                this.player,

                // enemies (fg)
                mfg.MfgGameObjectFactory.createEnemy( 1200, 0 ),

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 200,  450, 76, 170, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 3230, 660, 76, 170, mfg.MfgImage.IMAGE_TREE ),
            ];
        }
    }
