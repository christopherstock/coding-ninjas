
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
        /** ALL game objects for this level, including the player. TODO split! */
        public      gameObjects             :Array<ninjas.GameObject>   = null;

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
        *
        *   @param parallaxObjects Flags if parallax elements should be rendered.
        ***************************************************************************************************************/
        public render( parallaxObjects:boolean )
        {
            // render game objects
            for ( let gameObject of this.gameObjects )
            {
                if ( gameObject instanceof ninjas.ParallaxDeco )
                {
                    if ( parallaxObjects ) gameObject.render();
                }
                else
                {
                    if ( !parallaxObjects ) gameObject.render();
                }
            }
        }
    }
