
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Specifies capping for compound ends.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum CapEnds
    {
        NONE,
        LEFT,
        RIGHT,
        BOTH,
    }

    /*******************************************************************************************************************
    *   Creates bundled instances of game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class GameObjectBundleFactory
    {
        /***************************************************************************************************************
        *   Creates a flying ground.
        *
        *   @param x            Anchor X.
        *   @param yTop         Anchor for top Y.
        *   @param centerLength The number of center elements.
        *   @param capEnds      Spdcifies end cappings.
        *   @param level        The level to add the flying ground to.
        ***************************************************************************************************************/
        public static createFlyingGround( x:number, yTop:number, centerLength:number, capEnds:CapEnds, level:ninjas.Level ) : void
        {
            let leftTile   :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_LEFT   );
            let centerTile :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_CENTER );
            let rightTile  :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_RIGHT  );

            if ( capEnds == CapEnds.LEFT || capEnds == CapEnds.BOTH )
            {
                level.obstacles.push( ninjas.GameObjectFactory.createObstacle( x, yTop, leftTile, 0.0, ninjas.JumpPassThrough.NO ) );
                x += leftTile.width;
            }

            for ( let i:number = 0; i < centerLength; ++i )
            {
                level.obstacles.push( ninjas.GameObjectFactory.createObstacle( x, yTop, centerTile, 0.0, ninjas.JumpPassThrough.NO ) );
                x += centerTile.width;
            }

            if ( capEnds == CapEnds.RIGHT || capEnds == CapEnds.BOTH )
            {
                level.obstacles.push( ninjas.GameObjectFactory.createObstacle( x, yTop, rightTile, 0.0, ninjas.JumpPassThrough.NO ) );
            }
        }
    }
