
    import * as matter from 'matter-js';
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Creates customized instances of game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class GameObjectFactory
    {
        /***************************************************************************************************************
        *   Creates a wooden crate.
        *
        *   @param x        Anchor X.
        *   @param yBottom  Anchor for bottom Y.
        *
        *   @return The created box.
        ***************************************************************************************************************/
        public static createWoodenCrate( x:number, yBottom:number ):ninjas.Movable
        {
            let sprtiteTemplate:ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_CRATE_WOOD );

            return new ninjas.Movable
            (
                new ninjas.ShapeRectangle
                (
                    sprtiteTemplate.width,
                    sprtiteTemplate.height,
                    ninjas.DebugColor.COLOR_DEBUG_MOVABLE,
                    false,
                    0.0,
                    ninjas.BodyFriction.WOOD,
                    ninjas.BodyDensity.WOOD
                ),
                sprtiteTemplate,
                x,
                ( yBottom - sprtiteTemplate.height )
            );
        }

        /***************************************************************************************************************
        *   Creates a metal crate.
        *
        *   @param x        Anchor X.
        *   @param yBottom  Anchor for bottom Y.
        *
        *   @return The created box.
        ***************************************************************************************************************/
        public static createMetalCrate( x:number, yBottom:number ):ninjas.Movable
        {
            let sprtiteTemplate:ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_CRATE_METAL );

            return new ninjas.Movable
            (
                new ninjas.ShapeRectangle
                (
                    sprtiteTemplate.width,
                    sprtiteTemplate.height,
                    ninjas.DebugColor.COLOR_DEBUG_MOVABLE,
                    false,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.METAL
                ),
                sprtiteTemplate,
                x,
                ( yBottom - sprtiteTemplate.height )
            );
        }

        /***************************************************************************************************************
        *   Creates a sphere.
        *
        *   @param x        Anchor X.
        *   @param yBottom  Anchor of bottom Y.
        *   @param friction The surface friction for this object.
        *   @param density  The density for this object.
        *
        *   @return The created sphere.
        ***************************************************************************************************************/
        public static createSphere( x:number, yBottom:number, friction:number, density:number ):ninjas.Movable
        {
            let sprtiteTemplate:ninjas.SpriteTemplate = ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_SPHERE );

            return new ninjas.Movable
            (
                new ninjas.ShapeCircle
                (
                    sprtiteTemplate.height,
                    ninjas.DebugColor.COLOR_DEBUG_MOVABLE,
                    false,
                    0.0,
                    friction,
                    density
                ),
                sprtiteTemplate,
                x,
                ( yBottom - sprtiteTemplate.height )
            );
        }

        /***************************************************************************************************************
        *   Creates an item.
        *
        *   @param x Anchor X.
        *   @param y Anchor Y.
        *
        *   @return The created item.
        ***************************************************************************************************************/
        public static createItem( x:number, y:number ):ninjas.Item
        {
            return new ninjas.Item
            (
                new ninjas.ShapeRectangle
                (
                    30.0,
                    52.0,
                    ninjas.DebugColor.COLOR_DEBUG_ITEM,
                    true,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    Infinity
                ),
                ninjas.SpriteTemplate.createFromSingleImage( ninjas.Image.IMAGE_ITEM ),
                x,
                y
            );
        }

        /***************************************************************************************************************
        *   Creates an rectangular obstacle.
        *
        *   @param xLeft           Anchor for left X.
        *   @param yTop            Anchor for top Y.
        *   @param spriteTemplate  The sprite template to use for this obstacle.
        *   @param angle           The initial rotation.
        *   @param jumpPassThrough Specifies if the player can jump through this obstacle.
        *
        *   @return The created obstacle.
        ***************************************************************************************************************/
        public static createObstacle
        (
            xLeft           :number,
            yTop            :number,
            spriteTemplate  :ninjas.SpriteTemplate,
            angle           :number,
            jumpPassThrough :ninjas.JumpPassThrough
        )
        : ninjas.Obstacle
        {
            return new ninjas.Obstacle
            (
                new ninjas.ShapeRectangle
                (
                    spriteTemplate.width,
                    spriteTemplate.height,
                    ninjas.DebugColor.COLOR_DEBUG_OBSTACLE,
                    true,
                    angle,
                    ninjas.BodyFriction.OBSTACLE,
                    Infinity
                ),
                xLeft,
                yTop,
                spriteTemplate,
                jumpPassThrough
            );
        }

        /***************************************************************************************************************
        *   Creates an rectangular obstacle.
        *
        *   @param xLeft           Anchor for left X.
        *   @param yTop            Anchor for top Y.
        *   @param width           Width of the obstacle.
        *   @param height          Height of the obstacle.
        *   @param angle           The initial rotation.
        *   @param jumpPassThrough Specifies if the player can jump through this obstacle.
        *
        *   @return The created obstacle.
        ***************************************************************************************************************/
        public static createObstacleSpriteless
        (
            xLeft           :number,
            yTop            :number,
            width           :number,
            height          :number,
            angle           :number,
            jumpPassThrough :ninjas.JumpPassThrough
        )
        : ninjas.Obstacle
        {
            return new ninjas.Obstacle
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_OBSTACLE_SPRITELESS,
                    true,
                    angle,
                    ninjas.BodyFriction.OBSTACLE,
                    Infinity
                ),
                xLeft,
                yTop,
                null,
                jumpPassThrough
            );
        }

        /***************************************************************************************************************
        *   Creates a free form.
        *
        *   @param x              Anchor X.
        *   @param y              Anchor Y.
        *   @param vertices       All vertices that build up the free form.
        *   @param angle          The initial rotation of the form.
        *   @param spriteTemplate The sprite template to use for this game object.
        *
        *   @return The created obstacle.
        ***************************************************************************************************************/
        public static createFreeForm( x:number, y:number, vertices:Array<matter.Vector>, angle:number, spriteTemplate:ninjas.SpriteTemplate ):ninjas.Obstacle
        {
            return new ninjas.Obstacle
            (
                new ninjas.ShapeFreeForm
                (
                    vertices,
                    ninjas.DebugColor.COLOR_DEBUG_OBSTACLE,
                    true,
                    angle,
                    ninjas.BodyFriction.DEFAULT,
                    Infinity
                ),
                x,
                y,
                spriteTemplate,
                ninjas.JumpPassThrough.NO
            );
        }

        /***************************************************************************************************************
        *   Creates an elevated ramp obstacle.
        *
        *   @param x               Anchor X.
        *   @param y               Anchor Y.
        *   @param width           The ramp width.
        *   @param height          The ramp height.
        *   @param deltaY          Ramp will ascend if <code>true</code> and descend if <code>false</code>.
        *   @param spriteTemplate  The sprite template to use for this game object.
        *   @param jumpPassThrough Specifies if the player may jump through this obstacle.
        *
        *   @return The created obstacle ramp.
        ***************************************************************************************************************/
        public static createElevatedRamp
        (
            x               :number,
            y               :number,
            width           :number,
            height          :number,
            deltaY          :number,
            spriteTemplate  :ninjas.SpriteTemplate,
            jumpPassThrough :ninjas.JumpPassThrough
        )
        : ninjas.Obstacle
        {
            let vertices:Array<matter.Vector> = [];

            vertices.push( matter.Vector.create( 0.0,   0.0             ) );
            vertices.push( matter.Vector.create( width, deltaY          ) );
            vertices.push( matter.Vector.create( width, height + deltaY ) );
            vertices.push( matter.Vector.create( 0.0,   height          ) );

            if ( deltaY <= 0.0 )
            {
                y += deltaY;
            }

            return new ninjas.Obstacle
            (
                new ninjas.ShapeFreeForm
                (
                    vertices,
                    ninjas.DebugColor.COLOR_DEBUG_OBSTACLE,
                    true,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    Infinity
                ),
                x,
                y,
                spriteTemplate,
                jumpPassThrough
            );
        }

        /***************************************************************************************************************
        *   Creates the player.
        *
        *   @param x                Anchor X.
        *   @param yBottom          Anchor Y.
        *   @param lookingDirection The initial looking direction.
        *   @param spriteTemplate   The sprite template to use for the player.
        *
        *   @return The created player.
        ***************************************************************************************************************/
        public static createPlayer
        (
            x                :number,
            yBottom          :number,
            lookingDirection :ninjas.CharacterLookingDirection,
            spriteTemplate   :ninjas.SpriteTemplate
        )
        : ninjas.Player
        {
            let gapSizeX:number = ( spriteTemplate.width / 2 );
            let gapSizeY:number = ninjas.SettingMatterJs.PLAYER_EDGE_GAP_Y;

            let vertices:Array<matter.Vector> = [];

            // draw diamond path
            vertices.push( matter.Vector.create( gapSizeX,                        0.0                              ) );
            vertices.push( matter.Vector.create( spriteTemplate.width - gapSizeX, 0.0                              ) );
            vertices.push( matter.Vector.create( spriteTemplate.width,            gapSizeY                         ) );
            vertices.push( matter.Vector.create( spriteTemplate.width,            spriteTemplate.height - gapSizeY ) );
            vertices.push( matter.Vector.create( spriteTemplate.width - gapSizeX, spriteTemplate.height            ) );
            vertices.push( matter.Vector.create( gapSizeX,                        spriteTemplate.height            ) );
            vertices.push( matter.Vector.create( 0.0,                             spriteTemplate.height - gapSizeY ) );
            vertices.push( matter.Vector.create( 0.0,                             gapSizeY                         ) );

            let shape:ninjas.Shape = new ninjas.ShapeFreeForm
            (
                vertices,
                ninjas.DebugColor.COLOR_DEBUG_PLAYER,
                false,
                0.0,
                ninjas.BodyFriction.PLAYER,
                ninjas.BodyDensity.PLAYER
            );

            return new ninjas.Player
            (
                shape,
                x,
                ( yBottom - spriteTemplate.height ),
                lookingDirection,
                spriteTemplate
            );
        }

        /***************************************************************************************************************
        *   Creates an enemy.
        *
        *   @param x Anchor X.
        *   @param y Anchor Y.
        *
        *   @return The created enemy.
        ***************************************************************************************************************/
        public static createEnemy( x:number, y:number ):ninjas.Enemy
        {
            return new ninjas.Enemy
            (
                new ninjas.ShapeRectangle
                (
                    50.0,
                    50.0,
                    ninjas.DebugColor.COLOR_DEBUG_ENEMY,
                    false,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.DEFAULT
                ),
                x,
                y,
                null
            );
        }

        /***************************************************************************************************************
        *   Creates a decoration.
        *
        *   @param xLeft          Anchor for left X.
        *   @param yBottom        Anchor for bottom Y.
        *   @param spriteTemplate The sprite template to use for this decoration.
        *
        *   @return The created decoration.
        ***************************************************************************************************************/
        public static createDecoration( xLeft:number, yBottom:number, spriteTemplate:ninjas.SpriteTemplate ) : ninjas.Decoration
        {
            return new ninjas.Decoration
            (
                new ninjas.ShapeRectangle
                (
                    spriteTemplate.width,
                    spriteTemplate.height,
                    ninjas.DebugColor.COLOR_DEBUG_DECORATION,
                    true,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    Infinity
                ),
                spriteTemplate,
                xLeft,
                ( yBottom - spriteTemplate.height )
            );
        }

        /***************************************************************************************************************
        *   Creates a parallax scrolling decoration.
        *
        *   @param x              Anchor X.
        *   @param y              Anchor Y.
        *   @param parallaxRatio  The parallax ratio according to the level width.
        *   @param spriteTemplate The decoration sprite.
        *
        *   @return The created decoration.
        ***************************************************************************************************************/
        public static createParallaxDeco
        (
            x              :number,
            y              :number,
            parallaxRatio  :number,
            spriteTemplate :ninjas.SpriteTemplate
        )
        : ninjas.Decoration
        {
            return new ninjas.ParallaxDeco
            (
                new ninjas.ShapeRectangle
                (
                    spriteTemplate.width,
                    spriteTemplate.height,
                    ninjas.DebugColor.COLOR_DEBUG_DECORATION,
                    true,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    Infinity
                ),
                spriteTemplate,
                x,
                y,
                parallaxRatio
            );
        }

        /***************************************************************************************************************
        *   Creates a site trigger.
        *
        *   @param x                   Anchor X.
        *   @param y                   Anchor Y.
        *   @param width               Object width.
        *   @param height              Object height.
        *   @param sitePanelAppearance The position for the site panel to appear.
        *
        *   @return The created site trigger.
        ***************************************************************************************************************/
        public static createSiteTrigger
        (
            x                   :number,
            y                   :number,
            width               :number,
            height              :number,
            sitePanelAppearance :ninjas.SitePanelAppearance
        )
        : ninjas.SiteTrigger
        {
            return new ninjas.SiteTrigger
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_SITE_TRIGGER,
                    true,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    Infinity
                ),
                null,
                x,
                y,
                sitePanelAppearance
            );
        }

        /***************************************************************************************************************
        *   Creates a sigsaw.
        *
        *   @param x              Anchor X.
        *   @param y              Anchor Y.
        *   @param width          Object width.
        *   @param height         Object height.
        *   @param spriteTemplate The decoration sprite.
        *
        *   @return The created decoration.
        ***************************************************************************************************************/
        public static createSigsaw( x:number, y:number, width:number, height:number, spriteTemplate:ninjas.SpriteTemplate ):ninjas.SigSaw
        {
            return new ninjas.SigSaw
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_SIGSAW,
                    false,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.DEFAULT
                ),
                spriteTemplate,
                x,
                y
            );
        }

        /***************************************************************************************************************
        *   Creates a platform.
        *
        *   @param width          Object width.
        *   @param height         Object height.
        *   @param spriteTemplate The decoration sprite.
        *   @param speed          Moving speed of the platform in px per tick.
        *   @param waypoints      Moving waypoints. First waypoint is the startup position.
        *
        *   @return The created decoration.
        ***************************************************************************************************************/
        public static createPlatform
        (
            width          :number,
            height         :number,
            spriteTemplate :ninjas.SpriteTemplate,
            speed          :number,
            waypoints      :Array<matter.Vector>
        )
        :ninjas.Platform
        {
            return new ninjas.Platform
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_PLATFORM,
                    true,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    Infinity
                ),
                spriteTemplate,
                speed,
                waypoints,
            );
        }

        /***************************************************************************************************************
         *   Creates a bounce.
         *
         *   @param x              Anchor X.
         *   @param y              Anchor Y.
         *   @param width          Object width.
         *   @param height         Object height.
         *   @param spriteTemplate The decoration sprite.
         *
         *   @return The created decoration.
         ***************************************************************************************************************/
        public static createBounce( x:number, y:number, width:number, height:number, spriteTemplate:ninjas.SpriteTemplate ):ninjas.Bounce
        {
            return new ninjas.Bounce
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.DebugColor.COLOR_DEBUG_BOUNCE,
                    false,
                    0.0,
                    ninjas.BodyFriction.DEFAULT,
                    ninjas.BodyDensity.DEFAULT
                ),
                spriteTemplate,
                x,
                y
            );
        }
    }
