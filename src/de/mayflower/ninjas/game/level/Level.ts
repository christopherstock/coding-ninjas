
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Represents the current level.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class Level
    {
        /** The width of this level. */
        public      width                   :number                     = 0.0;
        /** The height of this level. */
        public      height                  :number                     = 0.0;

        /** The player instance. */
        public      player                  :ninjas.Player              = null;
        /** ALL game objects for this level, including the player. */
        public      gameObjects             :Array<ninjas.GameObject>   = null;

        /** Testing parallax bg. */
        public      parallaxTest            :ninjas.Decoration          = null;

        /***************************************************************************************************************
        *   Sets the player and the game objects.
        ***************************************************************************************************************/
        protected abstract createGameObjects();

        /***************************************************************************************************************
        *   Inits a new level.
        ***************************************************************************************************************/
        public init()
        {
            this.createGameObjects();

            // add all bodies of all game objects to the world
            for ( let gameObject of this.gameObjects ) {
                ninjas.Main.game.engine.matterJsSystem.addToWorld( gameObject.shape.body );
            }
        }

        /***************************************************************************************************************
        *   Renders all level components.
        ***************************************************************************************************************/
        public render()
        {
            // render game objects
            for ( let gameObject of this.gameObjects )
            {
                gameObject.render();
            }

            // test rendering parallax objects
            if ( this.parallaxTest != null )
            {
                // level has 1.0 - the farer the parallax pane the higher this value
                let parallaxRatio = 2.0;

                let cameraOffsetX :number = ninjas.Main.game.camera.getOffsetX();
                let cameraOffsetY :number = ninjas.Main.game.camera.getOffsetY();

                let canvasWidth  :number = ninjas.Main.game.engine.canvasSystem.getWidth();
                let canvasHeight :number = ninjas.Main.game.engine.canvasSystem.getHeight();

                let imgOffsetX :number = 0 - ( this.parallaxTest.shape.getWidth()  - canvasWidth  ) * cameraOffsetX / ( this.width  - canvasWidth  );
                let imgOffsetY :number = 0 - ( this.parallaxTest.shape.getHeight() - canvasHeight ) * cameraOffsetY / ( this.height - canvasHeight );

                imgOffsetX *= parallaxRatio;
                imgOffsetY *= parallaxRatio;

                matter.Body.setPosition
                (
                    this.parallaxTest.shape.body,
                    matter.Vector.create(
                        imgOffsetX + cameraOffsetX + ( this.parallaxTest.shape.getWidth()  / 2 ),
                        imgOffsetY + cameraOffsetY + ( this.parallaxTest.shape.getHeight() / 2 )
                    )
                )
            }
        }
    }
