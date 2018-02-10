
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
        *   @param xLeft        Anchor for left X.
        *   @param yTop         Anchor for top Y.
        *   @param centerLength The number of center elements.
        *   @param capEnds      Spdcifies end cappings.
        *   @param level        The level to add the flying ground to.
        ***************************************************************************************************************/
        public static createFlyingGround( xLeft:number, yTop:number, centerLength:number, capEnds:CapEnds, level:ninjas.Level ) : void
        {
            let leftTile   :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_LEFT   );
            let centerTile :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_CENTER );
            let rightTile  :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_RIGHT  );

            let   drawX         :number = xLeft;
            let   totalWidth    :number = 0.0;
            const ACTUAL_HEIGHT :number = 90;

            // add decoration objects
            if ( capEnds == CapEnds.LEFT || capEnds == CapEnds.BOTH )
            {
                level.decosFg.push( ninjas.GameObjectFactory.createDecoration( drawX, yTop + leftTile.height, leftTile ) );
                drawX      += leftTile.width;
                totalWidth += leftTile.width;
            }
            for ( let i:number = 0; i < centerLength; ++i )
            {
                level.decosFg.push( ninjas.GameObjectFactory.createDecoration( drawX, yTop + centerTile.height, centerTile ) );
                drawX      += centerTile.width;
                totalWidth += centerTile.width;
            }
            if ( capEnds == CapEnds.RIGHT || capEnds == CapEnds.BOTH )
            {
                level.decosFg.push( ninjas.GameObjectFactory.createDecoration( drawX, yTop + rightTile.height, rightTile ) );
                totalWidth += rightTile.width;
            }

            // add single obstacle object
            level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, totalWidth, ACTUAL_HEIGHT, 0.0, ninjas.JumpPassThrough.NO ) );
        }
    }
