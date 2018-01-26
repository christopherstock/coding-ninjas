
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   The level set for the level 'enchanted woods'.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgLevelEnchantedWoods extends mfg.MfgLevel
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
            this.player = new mfg.MfgPlayer( 750, 880, mfg.MfgCharacterLookingDirection.LEFT );

            // setup all game objects
            this.gameObjects =
            [
                // floor
                mfg.MfgGameObjectFactory.createBlock( 0, 1000, 1250, 500, 0.0, false ),
                mfg.MfgGameObjectFactory.createElevatedRamp( 1250, 1000, 750, 500, -100.0 ),
                mfg.MfgGameObjectFactory.createBlock( 2000, 900, 1250, 500, 0.0, false ),


                // hut
                mfg.MfgGameObjectFactory.createDecoration( 140, 870, 350, 130, null ),

                // bg decoration
                mfg.MfgGameObjectFactory.createDecoration( 350,  870, 120, 90, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 850,  870, 120, 90, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 1350, 850, 120, 90, mfg.MfgImage.IMAGE_TREE ),

                // moveable boxes

                // sigsaws

                // items
                mfg.MfgGameObjectFactory.createItem( 10,  1000 - 52 ),
                mfg.MfgGameObjectFactory.createItem( 40,  1000 - 52 ),
                mfg.MfgGameObjectFactory.createItem( 70,  1000 - 52 ),
                mfg.MfgGameObjectFactory.createItem( 100, 1000 - 52 ),

                // enemies

                // player
                this.player,

                // fg decoration
                mfg.MfgGameObjectFactory.createDecoration( 600,  870, 120, 90, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 1100, 870, 120, 90, mfg.MfgImage.IMAGE_TREE ),
                mfg.MfgGameObjectFactory.createDecoration( 1600, 817, 120, 90, mfg.MfgImage.IMAGE_TREE ),
            ];
        }
    }
