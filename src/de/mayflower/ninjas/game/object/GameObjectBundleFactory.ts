
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Specifies vertical direction.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
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
    *   @version    1.0.0
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
    *   All different crate types.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum CrateType
    {
        /** A wooden crate. */
        WOODEN,
    }

    /*******************************************************************************************************************
    *   Position for decoration.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export enum DecoPosition
    {
        /** Foreground. */
        FG,
        /** Background. */
        BG,
    }

    /*******************************************************************************************************************
    *   Creates bundled instances of game objects.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export abstract class GameObjectBundleFactory
    {
        /** The collision height of the flying ground. */
        private             static          readonly        HEIGHT_FLYING_GROUND            :number     = 90;
        /** The altitude of elevated grounds. */
        private             static          readonly        ALTITUDE                        :number     = 20;
        /** Ground tile width. */
        private             static          readonly        GROUND_TILE_WIDTH               :number     = 128;
        /** Ground tile height. */
        private             static          readonly        GROUND_TILE_HEIGHT              :number     = 128;

        /***************************************************************************************************************
        *   Creates a flying ground.
        *
        *   @param level       The level to add the flying ground to.
        *   @param xLeft       Anchor for left X.
        *   @param yTop        Anchor for top Y.
        *   @param length      The length of the ground.
        *   @param slope       Specifies the slope for this ground.
        *   @param jumpThrough Specified if the player may jump through this ground.
        *   @param capEnds     Specifies end cappings.
        ***************************************************************************************************************/
        public static createFlyingGround
        (
            level       :ninjas.Level,
            xLeft       :number,
            yTop        :number,
            length      :number,
            slope       :Slope,
            jumpThrough :ninjas.JumpPassThrough,
            capEnds     :CapHorz
        )
        : void
        {
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
                    level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yTop, length * GameObjectBundleFactory.GROUND_TILE_WIDTH, GameObjectBundleFactory.HEIGHT_FLYING_GROUND, 0.0, jumpThrough ) );
                    break;
                }

                case Slope.ASCENDING:
                case Slope.DESCENDING:
                {
                    level.obstacles.push( ninjas.GameObjectFactory.createElevatedRamp( xLeft, yTop, length * GameObjectBundleFactory.GROUND_TILE_WIDTH, GameObjectBundleFactory.HEIGHT_FLYING_GROUND, ( alt * length ), null, jumpThrough ) );
                    break;
                }
            }
        }

        /***************************************************************************************************************
        *   Creates a solid ground.
        *
        *   @param level        The level to add the solid ground to.
        *   @param xLeft        Anchor for left X.
        *   @param yTop         Anchor for top Y.
        *   @param lengthHorz   The number of horizontal elements.
        *   @param lengthVert   The number of vertical elements.
        *   @param slope        Specifies the slope for this ground.
        *   @param capHorz      Specifies horizontal end cappings.
        ***************************************************************************************************************/
        public static createSolidGround
        (
            level      :ninjas.Level,
            xLeft      :number,
            yTop       :number,
            lengthHorz :number,
            lengthVert :number,
            slope      :Slope,
            capHorz    :CapHorz
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
                    let drawY:number = firstLineDrawY;

                    for ( let tileX:number = 0; tileX < lengthHorz; ++tileX )
                    {
                        if ( tileX == 0 && ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, leftTopTile ) );
                        }
                        else if ( tileX == lengthHorz - 1 && ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, rightTopTile ) );
                        }
                        else
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, topTile ) );
                        }

                        drawY += firstLineAlt;
                    }
                }
                else if ( tileY == lengthVert - 1 )
                {
                    // add bottom line
                    let drawY:number = firstLineDrawY + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT;

                    for ( let tileX:number = 0; tileX < lengthHorz; ++tileX )
                    {
                        if ( tileX == 0 && ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, leftBottomTile ) );
                        }
                        else if ( tileX == lengthHorz - 1 && ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, rightBottomTile ) );
                        }
                        else
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, bottomTile ) );
                        }

                        drawY += firstLineAlt;
                    }
                }
                else
                {
                    // add middle lines
                    let drawY:number = firstLineDrawY + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT;

                    for ( let tileX:number = 0; tileX < lengthHorz; ++tileX )
                    {
                        if ( tileX == 0 && ( capHorz == CapHorz.LEFT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, leftTile ) );
                        }
                        else if ( tileX == lengthHorz - 1 && ( capHorz == CapHorz.RIGHT || capHorz == CapHorz.BOTH ) )
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, rightTile ) );
                        }
                        else
                        {
                            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, drawY + GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, centerTile ) );
                        }

                        drawY += firstLineAlt;
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
                    level.obstacles.push( ninjas.GameObjectFactory.createElevatedRamp( xLeft, yTop, lengthHorz * GameObjectBundleFactory.GROUND_TILE_WIDTH, lengthVert * GameObjectBundleFactory.GROUND_TILE_HEIGHT, lengthHorz * -GameObjectBundleFactory.ALTITUDE, null, ninjas.JumpPassThrough.NO ) );
                    break;
                }

                case Slope.DESCENDING:
                {
                    level.obstacles.push( ninjas.GameObjectFactory.createElevatedRamp( xLeft, yTop, lengthHorz * GameObjectBundleFactory.GROUND_TILE_WIDTH, lengthVert * GameObjectBundleFactory.GROUND_TILE_HEIGHT, lengthHorz * GameObjectBundleFactory.ALTITUDE, null, ninjas.JumpPassThrough.NO ) );
                    break;
                }
            }
        }

        /***************************************************************************************************************
        *   Creates a water area.
        *
        *   @param level       The level to add the flying ground to.
        *   @param xLeft       Anchor for left X.
        *   @param yTop        Anchor for top Y.
        *   @param length      The length of the area.
        *   @param height      The height of the area.
        ***************************************************************************************************************/
        public static createWaterArea
        (
            level       :ninjas.Level,
            xLeft       :number,
            yTop        :number,
            length      :number,
            height      :number
        )
        : void
        {
            let tileTop    :ninjas.SpriteTemplate = ninjas.SpriteTemplate.SPRITE_WATER_TOP;
            let tileCenter :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_WATER_CENTER );

            // draw area
            for ( let tileX:number = 0; tileX < length; ++tileX )
            {
                for ( let tileY:number = 0; tileY < height; ++tileY )
                {
                    if ( tileY == 0 )
                    {
                        level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, tileTop ) );
                    }
                    else
                    {
                        level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft + tileX * GameObjectBundleFactory.GROUND_TILE_WIDTH, yTop + tileY * GameObjectBundleFactory.GROUND_TILE_HEIGHT, ninjas.StaticShape.YES, tileCenter ) );
                    }
                }
            }
        }

        /***************************************************************************************************************
        *   Creates a crate.
        *
        *   @param level        The level to add the solid ground to.
        *   @param xLeft        Anchor for left X.
        *   @param yBottom      Anchor for bottom Y.
        *   @param type         The type of crate to create.
        ***************************************************************************************************************/
        public static createCrate
        (
            level      :ninjas.Level,
            xLeft      :number,
            yBottom    :number,
            type       :CrateType
        )
        : void
        {
            let crate:ninjas.Movable = null;

            switch ( type )
            {
                case CrateType.WOODEN:
                {
                    crate = ninjas.GameObjectFactory.createWoodenCrate( 7500, 4800 );
                    break;
                }
            }

            level.movables.push( crate );
        }

        /***************************************************************************************************************
        *   Creates a bridge.
        *
        *   @param level   The level to add the solid ground to.
        *   @param xLeft   Anchor for left X.
        *   @param yBottom Anchor for bottom Y.
        ***************************************************************************************************************/
        public static createBridge
        (
            level   :ninjas.Level,
            xLeft   :number,
            yBottom :number
        )
        : void
        {
            let WIDTH_TOTAL :number = 700;
            // let WIDTH_SLOPE :number = 128;
            // let ALTITUDE    :number = 30;

            // add obctacles
            level.obstacles.push( ninjas.GameObjectFactory.createObstacleSpriteless( xLeft, yBottom, WIDTH_TOTAL, 10, null, ninjas.JumpPassThrough.NO ) );
            // level.obstacles.push( ninjas.GameObjectFactory.createElevatedRamp( xLeft, yBottom, WIDTH_SLOPE, 10, -ALTITUDE, null, ninjas.JumpPassThrough.NO ) );
            // level.obstacles.push( ninjas.GameObjectFactory.createElevatedRamp( xLeft + WIDTH_TOTAL - WIDTH_SLOPE, yBottom - ALTITUDE, WIDTH_SLOPE, 10, ALTITUDE, null, ninjas.JumpPassThrough.NO ) );

            // add deco
            let sprtiteTemplate:ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BRIDGE_1 );
            level.decosFg.push( ninjas.GameObjectFactory.createDecorationRect( xLeft - 115, yBottom + 121, ninjas.StaticShape.YES, sprtiteTemplate ) );
        }

        /***************************************************************************************************************
        *   Creates an movable with a rectangular shape.
        *
        *   @param level    The level to add the decoration to.
        *   @param xLeft    Anchor for left X.
        *   @param yBottom  Anchor for bottom Y.
        *   @param imageId  The id of the image.
        ***************************************************************************************************************/
        public static createMovableRect
        (
            level    :ninjas.Level,
            xLeft    :number,
            yBottom  :number,
            imageId  :string
        )
        : void
        {
            let movable:ninjas.Movable = ninjas.GameObjectFactory.createMovableRect
            (
                xLeft,
                yBottom,
                imageId
            );

            level.movables.push( movable );
        }

        /***************************************************************************************************************
        *   Creates an movable with a circular shape.
        *
        *   @param level    The level to add the decoration to.
        *   @param xLeft    Anchor for left X.
        *   @param yBottom  Anchor for bottom Y.
        *   @param imageId  The id of the image.
        *   @param angle    The initial rotation angle for this movable.
        ***************************************************************************************************************/
        public static createMovableCircular
        (
            level    :ninjas.Level,
            xLeft    :number,
            yBottom  :number,
            imageId  :string,
            angle    :number
        )
        : void
        {
            let movable:ninjas.Movable = ninjas.GameObjectFactory.createMovableCircular
            (
                xLeft,
                yBottom,
                imageId,
                angle
            );

            level.movables.push( movable );
        }

        /***************************************************************************************************************
        *   Creates a decoration from a single image.
        *
        *   @param level    The level to add the decoration to.
        *   @param xLeft    Anchor for left X.
        *   @param yBottom  Anchor for bottom Y.
        *   @param position The position for the decoration.
        *   @param imageId  The id of the image.
        ***************************************************************************************************************/
        public static createDecoImage
        (
            level    :ninjas.Level,
            xLeft    :number,
            yBottom  :number,
            position :DecoPosition,
            imageId  :string
        )
        : void
        {
            let spriteTemplate :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( imageId );

            GameObjectBundleFactory.createDecoSprite
            (
                level,
                xLeft,
                yBottom,
                position,
                spriteTemplate
            );
        }

        /***************************************************************************************************************
        *   Creates an enemy and adds it to the level stack.
        *
        *   @param level              The level to add the enemy to.
        *   @param xLeft              Anchor X.
        *   @param yBottom            Anchor bottom Y.
        *   @param lookingDirection   The enemies initial looking and walking direction.
        *   @param walkingTargetLeft  Left walking target X.
        *   @param walkingTargetRight Right walking target X.
        ***************************************************************************************************************/
        public static createEnemy
        (
            level              :ninjas.Level,
            xLeft              :number,
            yBottom            :number,
            lookingDirection   :ninjas.CharacterLookingDirection,
            walkingTargetLeft  :number,
            walkingTargetRight :number
        )
        : void
        {
            let enemy :ninjas.Enemy = ninjas.GameObjectFactory.createEnemy
            (
                xLeft,
                yBottom,
                lookingDirection,
                walkingTargetLeft,
                walkingTargetRight
            );

            level.enemies.push( enemy );
        }

        /***************************************************************************************************************
        *   Creates a decoration from a sprite.
        *
        *   @param level          The level to add the decoration to.
        *   @param xLeft          Anchor for left X.
        *   @param yBottom        Anchor for bottom Y.
        *   @param position       The position for the decoration.
        *   @param spriteTemplate The sprite template to use.
        ***************************************************************************************************************/
        public static createDecoSprite
        (
            level          :ninjas.Level,
            xLeft          :number,
            yBottom        :number,
            position       :DecoPosition,
            spriteTemplate :ninjas.SpriteTemplate
        )
        : void
        {
            let deco :ninjas.Decoration = ninjas.GameObjectFactory.createDecorationRect( xLeft, yBottom, ninjas.StaticShape.YES, spriteTemplate );

            switch ( position )
            {
                case DecoPosition.FG:
                {
                    level.decosFg.push( deco );
                    break;
                }

                case DecoPosition.BG:
                {
                    level.decosBg.push( deco );
                    break;
                }
            }
        }

        /***************************************************************************************************************
        *   Creates a shrine.
        *
        *   @param level       The level to add the decoration to.
        *   @param xLeft       Anchor for left X.
        *   @param yBottom     Anchor for bottom Y.
        *   @param candleLeft  Specifies if the left  candle shall be drawn.
        *   @param candleRight Specifies if the right candle shall be drawn.
        *   @param content     The level content associated with this shrine.
        ***************************************************************************************************************/
        public static createShrine
        (
            level       :ninjas.Level,
            xLeft       :number,
            yBottom     :number,
            candleLeft  :boolean,
            candleRight :boolean,
            content     :ninjas.SiteContent
        )
        : void
        {
            let sprtiteBookOpen   :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BOOK_OPEN   );
            let sprtiteBookClosed :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_BOOK_CLOSED );
            let spriteShrine      :ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_CONSOLE     );

            let decoBookOpen      :ninjas.Decoration     = ninjas.GameObjectFactory.createDecorationRect( xLeft - 5,  yBottom - 118, ninjas.StaticShape.YES, sprtiteBookOpen,   ninjas.DebugColor.COLOR_TRANSPARENT );
            let decoBookClosed    :ninjas.Decoration     = ninjas.GameObjectFactory.createDecorationRect( xLeft + 72, yBottom - 114, ninjas.StaticShape.YES, sprtiteBookClosed, ninjas.DebugColor.COLOR_TRANSPARENT );
            let decoShrine        :ninjas.Shrine         = new ninjas.Shrine
            (
                new ninjas.ShapeRectangle
                (
                    spriteShrine.width,
                    spriteShrine.height,
                    ninjas.DebugColor.COLOR_DEBUG_SHRINE,
                    ninjas.StaticShape.YES,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.RUBBER,
                    ninjas.BodyRestitution.RUBBER
                ),
                spriteShrine,
                xLeft,
                yBottom - spriteShrine.height,
                content,
                decoBookOpen,
                decoBookClosed
            );

            level.decosBg.push( decoShrine     );
            level.decosBg.push( decoBookOpen   );
            level.decosBg.push( decoBookClosed );

            level.shrines.push( decoShrine     );

            if ( candleLeft  )
            {
                GameObjectBundleFactory.createDecoImage(  level, xLeft - 80,  yBottom,       ninjas.DecoPosition.FG, ninjas.Image.IMAGE_CANDELABRA              );
                GameObjectBundleFactory.createDecoSprite( level, xLeft - 88,  yBottom - 222, ninjas.DecoPosition.FG, ninjas.SpriteTemplate.SPRITE_FLAME_1_BIG   );
                GameObjectBundleFactory.createDecoSprite( level, xLeft - 68,  yBottom - 178, ninjas.DecoPosition.FG, ninjas.SpriteTemplate.SPRITE_FLAME_1_SMALL );
                GameObjectBundleFactory.createDecoSprite( level, xLeft - 106, yBottom - 182, ninjas.DecoPosition.FG, ninjas.SpriteTemplate.SPRITE_FLAME_1_SMALL );
            }

            if ( candleRight )
            {
                GameObjectBundleFactory.createDecoImage(  level, xLeft + 164, yBottom,       ninjas.DecoPosition.FG, ninjas.Image.IMAGE_CANDELABRA              );
                GameObjectBundleFactory.createDecoSprite( level, xLeft + 156, yBottom - 222, ninjas.DecoPosition.FG, ninjas.SpriteTemplate.SPRITE_FLAME_1_BIG   );
                GameObjectBundleFactory.createDecoSprite( level, xLeft + 176, yBottom - 178, ninjas.DecoPosition.FG, ninjas.SpriteTemplate.SPRITE_FLAME_1_SMALL );
                GameObjectBundleFactory.createDecoSprite( level, xLeft + 138, yBottom - 182, ninjas.DecoPosition.FG, ninjas.SpriteTemplate.SPRITE_FLAME_1_SMALL );
            }
        }

        /***************************************************************************************************************
        *   Creates a rubble pile.
        *
        *   @param level       The level to add the decoration to.
        *   @param xLeft       Anchor for left X.
        *   @param yBottom     Anchor for bottom Y.
        *   @param length      Length of the bottom stone row.
        ***************************************************************************************************************/
        public static createRubblePile
        (
            level       :ninjas.Level,
            xLeft       :number,
            yBottom     :number,
            length      :number
        )
        : void
        {
            for ( let i:number = 0; i < length; ++i )
            {
                let imageId:string = null;

                switch ( ninjas.MathUtil.getRandomInt( 0, 2 ) )
                {
                    case 0: imageId = ninjas.Image.IMAGE_RUBBLE_1;      break;
                    case 1: imageId = ninjas.Image.IMAGE_RUBBLE_2;      break;
                    case 2: imageId = ninjas.Image.IMAGE_RUBBLE_3;      break;
                }

                ninjas.GameObjectBundleFactory.createMovableCircular
                (
                    level,
                    xLeft + ( i * 50 ),
                    yBottom,
                    imageId,
                    ninjas.MathUtil.getRandomInt( 0, 359 )
                );
            }
        }

        /***************************************************************************************************************
        *   Creates a candle deco.
        *
        *   @param level       The level to add the decoration to.
        *   @param xLeft       Anchor for left X.
        *   @param yBottom     Anchor for bottom Y.
        ***************************************************************************************************************/
        public static createCandle
        (
            level   :ninjas.Level,
            xLeft   :number,
            yBottom :number,
        )
        : void
        {
            ninjas.GameObjectBundleFactory.createDecoImage(  level, xLeft,      yBottom,       ninjas.DecoPosition.FG, ninjas.Image.IMAGE_CANDLE                );
            ninjas.GameObjectBundleFactory.createDecoSprite( level, xLeft - 17, yBottom - 153, ninjas.DecoPosition.FG, ninjas.SpriteTemplate.SPRITE_FLAME_1_BIG );
        }
    }
