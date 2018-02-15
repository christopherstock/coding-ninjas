
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Specifies vertical direction.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum Slope
    {
        /** Specifies a flat body. */
        NONE,
        /** A body with ascending surface. */
        ASCENDING,
        /** A body with descending surface. */
        DESCENDING,
    }

    /*******************************************************************************************************************
    *   Specifies capping for horizontal compound ends.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export enum CapHorz
    {
        /** No horizontal capping. */
        NONE,
        /** Cap left column. */
        LEFT,
        /** Cap right column. */
        RIGHT,
        /** Cap left and right column. */
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
        /** No vertical capping. */
        NONE,
        /** Cap top line. */
        TOP,
        /** Cap bottom line. */
        BOTTOM,
        /** Cap top and bottom line. */
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
        *   @param xLeft   Anchor for left X.
        *   @param yTop    Anchor for top Y.
        *   @param length  The length of the ground.
        *   @param slope   Specifies slope for this ground.
        *   @param capEnds Specifies end cappings.
        *   @param level   The level to add the flying ground to.
        ***************************************************************************************************************/
        public static createFlyingGround
        (
            xLeft   :number,
            yTop    :number,
            length  :number,
            slope   :Slope,
            capEnds :CapHorz,
            level   :ninjas.Level
        )
        : void
        {
            const OBSTACLE_HEIGHT :number = 90;
            const ALTITUDE        :number = 20;

            let leftTile   :ninjas.SpriteTemplate = null;
            let centerTile :ninjas.SpriteTemplate = null;
            let rightTile  :ninjas.SpriteTemplate = null;

            let drawX      :number = xLeft;
            let drawY      :number = 0;
            let totalWidth :number = 0;
            let alt        :number = 0;

            switch ( slope )
            {
                case Slope.NONE:
                {
                    leftTile   = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_LEFT   );
                    centerTile = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_CENTER );
                    rightTile  = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_RIGHT  );
                    drawY      = yTop;
                    alt        = 0;
                    break;
                }

                case Slope.ASCENDING:
                {
                    leftTile   = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_ASCENDING_LEFT   );
                    centerTile = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_ASCENDING_CENTER );
                    rightTile  = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_ASCENDING_RIGHT  );
                    drawY      = yTop - ALTITUDE;
                    alt        = -ALTITUDE;
                    break;
                }

                case Slope.DESCENDING:
                {
                    leftTile   = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_DESCENDING_LEFT   );
                    centerTile = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_DESCENDING_CENTER );
                    rightTile  = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_DESCENDING_RIGHT  );
                    drawY      = yTop;
                    alt        = ALTITUDE;
                    break;
                }
            }

            // draw decoration
            for ( let i:number = 0; i < length; ++i )
            {
                if ( i == 0 && ( capEnds == CapHorz.LEFT || capEnds == CapHorz.BOTH ) )
                {
                    level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + leftTile.height, ninjas.StaticShape.YES, leftTile ) );
                    drawX      += leftTile.width;
                    totalWidth += leftTile.width;
                }
                else if ( i == length - 1 && ( capEnds == CapHorz.RIGHT || capEnds == CapHorz.BOTH ) )
                {
                    level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + rightTile.height, ninjas.StaticShape.YES, rightTile ) );
                    drawX      += rightTile.width;
                    totalWidth += rightTile.width;
                }
                else
                {
                    level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + centerTile.height, ninjas.StaticShape.YES, centerTile ) );
                    drawX      += centerTile.width;
                    totalWidth += centerTile.width;
                }

                drawY += alt;
            }

            // add obstacle
            switch ( slope )
            {
                case Slope.NONE:
                {
                    level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, totalWidth, OBSTACLE_HEIGHT, 0.0, ninjas.JumpPassThrough.NO ) );
                    break;
                }

                case Slope.ASCENDING:
                case Slope.DESCENDING:
                {
                    let deltaY:number = ( alt * length );
                    level.obstacles.push( ninjas.GameObjectFactory.createElevatedRamp( xLeft, yTop, totalWidth, OBSTACLE_HEIGHT, deltaY, null, ninjas.JumpPassThrough.NO ) );
                    break;
                }
            }
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

            for ( let i:number = 0; i < lengthVert; ++i )
            {
                if ( i == 0 )
                {
                    // add top line
                    if ( capVert == CapVert.TOP  || capVert == CapVert.BOTH )
                    {
                        drawX      = xLeft;
                        totalWidth = 0.0;

                        for ( let j:number = 0; j < lengthHorz; ++j )
                        {
                            if ( j == 0 && ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH ) )
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + leftTopTile.height, ninjas.StaticShape.YES, leftTopTile ) );
                                drawX      += leftTopTile.width;
                                totalWidth += leftTopTile.width;
                            }
                            else if ( j == lengthHorz - 1 && ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH ) )
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + rightTopTile.height, ninjas.StaticShape.YES, rightTopTile ) );
                                totalWidth += rightTopTile.width;
                            }
                            else
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + topTile.height, ninjas.StaticShape.YES, topTile ) );
                                drawX      += topTile.width;
                                totalWidth += leftTopTile.width;
                            }
                        }
                        drawY       += topTile.height;
                        totalHeight += topTile.height;
                    }
                }
                else if ( i == lengthVert - 1 )
                {
                    // add bottom line
                    if ( capVert == CapVert.BOTTOM  || capVert == CapVert.BOTH )
                    {
                        drawX      = xLeft;
                        totalWidth = 0.0;

                        for ( let j:number = 0; j < lengthHorz; ++j )
                        {
                            if ( j == 0 && ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH ) )
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + leftBottomTile.height, ninjas.StaticShape.YES, leftBottomTile ) );
                                drawX      += leftBottomTile.width;
                                totalWidth += leftBottomTile.width;
                            }
                            else if ( j == lengthHorz - 1 && ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH ) )
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + rightBottomTile.height, ninjas.StaticShape.YES, rightBottomTile ) );
                                totalWidth += rightBottomTile.width;
                            }
                            else
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + bottomTile.height, ninjas.StaticShape.YES, bottomTile ) );
                                drawX      += bottomTile.width;
                                totalWidth += bottomTile.width;
                            }
                        }

                        totalHeight += bottomTile.height;
                    }
                }
                else
                {
                    // add middle lines
                    drawX      = xLeft;
                    totalWidth = 0.0;

                    for ( let j:number = 0; j < lengthHorz; ++j )
                    {
                        if ( j == 0 && ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + leftTile.height, ninjas.StaticShape.YES, leftTile ) );
                            drawX      += leftTile.width;
                            totalWidth += leftTile.width;
                        }
                        else if ( j == lengthHorz - 1 && ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + rightTile.height, ninjas.StaticShape.YES, rightTile ) );
                            totalWidth += rightTile.width;
                        }
                        else
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( drawX, drawY + centerTile.height, ninjas.StaticShape.YES, centerTile ) );
                            drawX      += centerTile.width;
                            totalWidth += centerTile.width;
                        }
                    }

                    drawY       += centerTile.height;
                    totalHeight += centerTile.height;
                }
            }

            // add single obstacle object
            level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, totalWidth, totalHeight, 0.0, ninjas.JumpPassThrough.NO ) );
        }
    }
