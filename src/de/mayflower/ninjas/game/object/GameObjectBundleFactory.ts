
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
        /** The altitude of elevated grounds. */
        private             static          readonly        ALTITUDE                        :number = 20;
        /** Ground tile width. */
        private             static          readonly        GROUND_TILE_WIDTH               :number = 128;
        /** Ground tile height. */
        private             static          readonly        GROUND_TILE_HEIGHT              :number = 128;

        /***************************************************************************************************************
        *   Creates a flying ground.
        *
        *   @param xLeft   Anchor for left X.
        *   @param yTop    Anchor for top Y.
        *   @param length  The length of the ground.
        *   @param slope   Specifies the slope for this ground.
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
            const HEIGHT_FLYING_GROUND :number = 90;

            let leftTile   :ninjas.SpriteTemplate = null;
            let centerTile :ninjas.SpriteTemplate = null;
            let rightTile  :ninjas.SpriteTemplate = null;

            let drawY      :number = 0;
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
                    drawY      = yTop - GameObjectBundleFactory.ALTITUDE;
                    alt        = -GameObjectBundleFactory.ALTITUDE;
                    break;
                }

                case Slope.DESCENDING:
                {
                    leftTile   = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_DESCENDING_LEFT   );
                    centerTile = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_DESCENDING_CENTER );
                    rightTile  = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_FLYING_DESCENDING_RIGHT  );
                    drawY      = yTop;
                    alt        = GameObjectBundleFactory.ALTITUDE;
                    break;
                }
            }

            // draw decoration
            for ( let tileX:number = 0; tileX < length; ++tileX )
            {
                if ( tileX == 0 && ( capEnds == CapHorz.LEFT || capEnds == CapHorz.BOTH ) )
                {
                    level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + leftTile.height, ninjas.StaticShape.YES, leftTile ) );
                }
                else if ( tileX == length - 1 && ( capEnds == CapHorz.RIGHT || capEnds == CapHorz.BOTH ) )
                {
                    level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + rightTile.height, ninjas.StaticShape.YES, rightTile ) );
                }
                else
                {
                    level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + centerTile.height, ninjas.StaticShape.YES, centerTile ) );
                }

                drawY += alt;
            }

            // add obstacle
            switch ( slope )
            {
                case Slope.NONE:
                {
                    level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, length * GameObjectBundleFactory.GROUND_TILE_WIDTH, HEIGHT_FLYING_GROUND, 0.0, ninjas.JumpPassThrough.NO ) );
                    break;
                }

                case Slope.ASCENDING:
                case Slope.DESCENDING:
                {
                    let deltaY:number = ( alt * length );
                    level.obstacles.push( ninjas.GameObjectFactory.createElevatedRamp( xLeft, yTop, length * GameObjectBundleFactory.GROUND_TILE_WIDTH, HEIGHT_FLYING_GROUND, deltaY, null, ninjas.JumpPassThrough.NO ) );
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
        *   @param slope        Specifies the slope for this ground.
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
            slope      :Slope,
            capHorz    :CapHorz,
            capVert    :CapVert,
            level      :ninjas.Level
        )
        : void
        {
            let leftTopTile     :ninjas.SpriteTemplate = null;
            let topTile         :ninjas.SpriteTemplate = null;
            let rightTopTile    :ninjas.SpriteTemplate = null;

            let leftTile        :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_LEFT         );
            let centerTile      :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_CENTER       );
            let rightTile       :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_RIGHT        );

            let leftBottomTile  :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_LEFT_BOTTOM  );
            let bottomTile      :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_BOTTOM       );
            let rightBottomTile :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_RIGHT_BOTTOM );

            let firstLineDrawY  :number = 0.0;
            let firstLineAlt    :number = 0.0;

            switch ( slope )
            {
                case Slope.NONE:
                {
                    leftTopTile    = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_LEFT_TOP  );
                    topTile        = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_TOP       );
                    rightTopTile   = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_RIGHT_TOP );

                    firstLineDrawY = yTop;
                    firstLineAlt   = 0.0;

                    break;
                }

                case Slope.ASCENDING:
                {
                    leftTopTile    = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_ASCENDING_LEFT_TOP  );
                    topTile        = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_ASCENDING_TOP       );
                    rightTopTile   = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_ASCENDING_RIGHT_TOP );

                    firstLineDrawY = yTop;
                    firstLineAlt   = -GameObjectBundleFactory.ALTITUDE;

                    break;
                }

                case Slope.DESCENDING:
                {
                    leftTopTile    = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_DESCENDING_LEFT_TOP  );
                    topTile        = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_DESCENDING_TOP       );
                    rightTopTile   = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_GROUND_SOLID_DESCENDING_RIGHT_TOP );

                    firstLineDrawY = yTop + GameObjectBundleFactory.ALTITUDE;
                    firstLineAlt   = GameObjectBundleFactory.ALTITUDE;

                    break;
                }
            }

            // browse lines
            for ( let tileY:number = 0; tileY < lengthVert; ++tileY )
            {
                if ( tileY == 0 )
                {
                    // add top line
                    if ( capVert == CapVert.TOP  || capVert == CapVert.BOTH )
                    {
                        for ( let tileX:number = 0; tileX < lengthHorz; ++tileX )
                        {
                            if ( tileX == 0 && ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH ) )
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, firstLineDrawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, leftTopTile ) );
                            }
                            else if ( tileX == lengthHorz - 1 && ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH ) )
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, firstLineDrawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, rightTopTile ) );
                            }
                            else
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, firstLineDrawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, topTile ) );
                            }

                            firstLineDrawY += firstLineAlt;
/*
                            if ( tileX == 0 && slope == Slope.DESCENDING )
                            {
                                drawYfirstLine += firstLineAlt;
                            }
*/
                        }
                    }
                }
                else if ( tileY == lengthVert - 1 )
                {
                    // add bottom line
                    if ( capVert == CapVert.BOTTOM  || capVert == CapVert.BOTH )
                    {
                        for ( let tileX:number = 0; tileX < lengthHorz; ++tileX )
                        {
                            if ( tileX == 0 && ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH ) )
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, leftBottomTile ) );
                            }
                            else if ( tileX == lengthHorz - 1 && ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH ) )
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, rightBottomTile ) );
                            }
                            else
                            {
                                level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, bottomTile ) );
                            }
                        }
                    }
                }
                else
                {
                    // add middle lines
                    for ( let tileX:number = 0; tileX < lengthHorz; ++tileX )
                    {
                        if ( tileX == 0 && ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, leftTile ) );
                        }
                        else if ( tileX == lengthHorz - 1 && ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, rightTile ) );
                        }
                        else
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, centerTile ) );
                        }
                    }
                }
            }

            // add single obstacle object
            switch ( slope )
            {
                case Slope.NONE:
                {
                    level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, lengthHorz * GameObjectBundleFactory.GROUND_TILE_WIDTH, lengthVert * GameObjectBundleFactory.GROUND_TILE_HEIGHT, 0.0, ninjas.JumpPassThrough.NO ) );
                    break;
                }

                case Slope.ASCENDING:
                {
                    level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, lengthHorz * GameObjectBundleFactory.GROUND_TILE_WIDTH, lengthVert * GameObjectBundleFactory.GROUND_TILE_HEIGHT, 0.0, ninjas.JumpPassThrough.NO ) );
                    break;
                }

                case Slope.DESCENDING:
                {
                    level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, lengthHorz * GameObjectBundleFactory.GROUND_TILE_WIDTH, lengthVert * GameObjectBundleFactory.GROUND_TILE_HEIGHT, 0.0, ninjas.JumpPassThrough.NO ) );
                    break;
                }
            }
        }
    }
