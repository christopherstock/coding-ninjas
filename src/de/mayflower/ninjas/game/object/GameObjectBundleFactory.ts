
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Specifies capping for horizontal compound ends.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum CapHorz
    {
        NONE,
        LEFT,
        RIGHT,
        BOTH,
    }

    /*******************************************************************************************************************
    *   Specifies capping for vertical compound ends.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum CapVert
    {
        NONE,
        TOP,
        BOTTOM,
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
        public static createFlyingGround( xLeft:number, yTop:number, centerLength:number, capEnds:CapHorz, level:ninjas.Level ) : void
        {
            let leftTile   :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_LEFT   );
            let centerTile :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_CENTER );
            let rightTile  :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_RIGHT  );

            let   drawX         :number = xLeft;
            let   totalWidth    :number = 0.0;
            const ACTUAL_HEIGHT :number = 90;

            // add decoration objects
            if ( capEnds == CapHorz.LEFT || capEnds == CapHorz.BOTH )
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
            if ( capEnds == CapHorz.RIGHT || capEnds == CapHorz.BOTH )
            {
                level.decosFg.push( ninjas.GameObjectFactory.createDecoration( drawX, yTop + rightTile.height, rightTile ) );
                totalWidth += rightTile.width;
            }

            // add single obstacle object
            level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, totalWidth, ACTUAL_HEIGHT, 0.0, ninjas.JumpPassThrough.NO ) );
        }

        /***************************************************************************************************************
        *   Creates a solid ground.
        *
        *   @param xLeft        Anchor for left X.
        *   @param yTop         Anchor for top Y.
        *   @param lengthHorz   The number of horizontal elements.
        *   @param lengthVert   The number of vertical elements.
        *   @param capHorz      Specifies horizontal end cappings.
        *   @param capVert      Specifies vertical end cappings.
        *   @param level        The level to add the flying ground to.
        ***************************************************************************************************************/
        public static createSolidGround
        (
            xLeft      :number,
            yTop       :number,
            lengthHorz :number,
            lengthVert :number,
            capHorz    :CapHorz,
            capVert    :CapVert,
            level      :ninjas.Level
        )
        : void
        {
            let leftTopTile     :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_LEFT_TOP     );
            let topTile         :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_TOP          );
            let rightTopTile    :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_RIGHT_TOP    );
            let leftTile        :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_LEFT         );
            let centerTile      :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_CENTER       );
            let rightTile       :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_RIGHT        );
            let leftBottomTile  :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_LEFT_BOTTOM  );
            let bottomTile      :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_BOTTOM       );
            let rightBottomTile :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_RIGHT_BOTTOM );

            let   drawX         :number = xLeft;
            let   drawY         :number = yTop;
            let   totalWidth    :number = 0.0;
            let   totalHeight   :number = 0.0;
/*
            const ACTUAL_HEIGHT :number = 90;
*/
/*
            // add decoration objects
            if ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH )
            {
                level.decosFg.push( ninjas.GameObjectFactory.createDecoration( drawX, yTop + leftTile.height, leftTile ) );
                drawX      += leftTile.width;
                totalWidth += leftTile.width;
            }
            for ( let i:number = 0; i < lengthHorz; ++i )
            {
                level.decosFg.push( ninjas.GameObjectFactory.createDecoration( drawX, yTop + centerTile.height, centerTile ) );
                drawX      += centerTile.width;
                totalWidth += centerTile.width;
            }
            if ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH )
            {
                level.decosFg.push( ninjas.GameObjectFactory.createDecoration( drawX, yTop + rightTile.height, rightTile ) );
                totalWidth += rightTile.width;
            }

            // add single obstacle object
            level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, totalWidth, ACTUAL_HEIGHT, 0.0, ninjas.JumpPassThrough.NO ) );
*/
        }
    }
