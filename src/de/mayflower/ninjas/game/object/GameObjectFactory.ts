
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
        *   Creates a crate.
        *
        *   @param x        Anchor X.
        *   @param y        Anchor Y.
        *   @param width    Object width.
        *   @param height   Object height.
        *   @param friction The surface friction for this box.
        *   @param density  The density for this box.
        *
        *   @return       The created box.
        ***************************************************************************************************************/
        public static createCrate(x:number, y:number, width:number, height:number, friction:number, density:number ):ninjas.Movable
        {
            return new ninjas.Movable
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.Setting.COLOR_DEBUG_BOX,
                    false,
                    0.0,
                    friction,
                    density
                ),
                x,
                y,
                new ninjas.Sprite( ninjas.SpriteTemplate.SPRITE_CRATE )
            );
        }

        /***************************************************************************************************************
        *   Creates a sphere.
        *
        *   @param x        Anchor X.
        *   @param y        Anchor Y.
        *   @param diameter Sphere diameter.
        *   @param friction The surface friction for this object.
        *   @param density  The density for this object.
        *
        *   @return         The created sphere.
        ***************************************************************************************************************/
        public static createSphere( x:number, y:number, diameter:number, friction:number, density:number ):ninjas.Movable
        {
            return new ninjas.Movable
            (
                new ninjas.ShapeCircle
                (
                    diameter,
                    ninjas.Setting.COLOR_DEBUG_BOX,
                    false,
                    0.0,
                    friction,
                    density
                ),
                x,
                y,
                null
            );
        }

        /***************************************************************************************************************
        *   Creates an item.
        *
        *   @param x Anchor X.
        *   @param y Anchor Y.
        *
        *   @return  The created item.
        ***************************************************************************************************************/
        public static createItem( x:number, y:number ):ninjas.Item
        {
            return new ninjas.Item
            (
                new ninjas.ShapeRectangle
                (
                    30.0,
                    52.0,
                    ninjas.Setting.COLOR_DEBUG_ITEM,
                    true,
                    0.0,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    Infinity
                ),
                x,
                y
            );
        }

        /***************************************************************************************************************
        *   Creates an rectangular obstacle.
        *
        *   @param x               Anchor X.
        *   @param y               Anchor Y.
        *   @param width           Object width.
        *   @param height          Object height.
        *   @param angle           The initial rotation.
        *   @param jumpPassThrough Specifies if the player can jump through this obstacle.
        *
        *   @return                The created obstacle.
        ***************************************************************************************************************/
        public static createObstacle( x:number, y:number, width:number, height:number, angle:number, jumpPassThrough:boolean ):ninjas.Obstacle
        {
            return new ninjas.Obstacle
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.Setting.COLOR_DEBUG_OBSTACLE,
                    true,
                    angle,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    Infinity
                ),
                x,
                y,
                jumpPassThrough
            );
        }

        /***************************************************************************************************************
        *   Creates a free form.
        *
        *   @param x        Anchor X.
        *   @param y        Anchor Y.
        *   @param vertices All vertices that build up the free form.
        *   @param angle    The initial rotation of the form.
        *
        *   @return         The created obstacle.
        ***************************************************************************************************************/
        public static createFreeForm(x:number, y:number, vertices:Array<matter.Vector>, angle:number ):ninjas.Obstacle
        {
            return new ninjas.Obstacle
            (
                new ninjas.ShapeFreeForm
                (
                    vertices,
                    ninjas.Setting.COLOR_DEBUG_OBSTACLE,
                    true,
                    angle,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    Infinity
                ),
                x,
                y,
                false
            );
        }

        /***************************************************************************************************************
        *   Creates an elevated ramp obstacle.
        *
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  The ramp width.
        *   @param height The remp height.
        *   @param deltaY Ramp will ascend if <code>true</code> and descend if <code>false</code>.
        *
        *   @return         The created obstacle ramp.
        ***************************************************************************************************************/
        public static createElevatedRamp( x:number, y:number, width:number, height:number, deltaY:number ):ninjas.Obstacle
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
                    ninjas.Setting.COLOR_DEBUG_OBSTACLE,
                    true,
                    0.0,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    Infinity
                ),
                x,
                y,
                false
            );
        }

        /***************************************************************************************************************
        *   Creates an enemy.
        *
        *   @param x Anchor X.
        *   @param y Anchor Y.
        *
        *   @return  The created enemy.
        ***************************************************************************************************************/
        public static createEnemy( x:number, y:number ):ninjas.Enemy
        {
            return new ninjas.Enemy
            (
                new ninjas.ShapeRectangle
                (
                    50.0,
                    50.0,
                    ninjas.Setting.COLOR_DEBUG_ENEMY,
                    false,
                    0.0,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    ninjas.GameObject.DENSITY_HUMAN
                ),
                x,
                y
            );
        }

        /***************************************************************************************************************
        *   Creates a decoration.
        *
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  Object width.
        *   @param height Object height.
        *   @param sprite The decoration sprite.
        *
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createDecoration( x:number, y:number, width:number, height:number, sprite:ninjas.Sprite ):ninjas.Decoration
        {
            return new ninjas.Decoration
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.Setting.COLOR_DEBUG_DECORATION,
                    true,
                    0.0,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    Infinity
                ),
                x,
                y,
                sprite
            );
        }

        /***************************************************************************************************************
        *   Creates a sigsaw.
        *
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  Object width.
        *   @param height Object height.
        *   @param sprite The decoration sprite.
        *
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createSigsaw( x:number, y:number, width:number, height:number, sprite:ninjas.Sprite ):ninjas.SigSaw
        {
            return new ninjas.SigSaw
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.Setting.COLOR_DEBUG_SIGSAW,
                    false,
                    0.0,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    ninjas.GameObject.DENSITY_DEFAULT
                ),
                x,
                y,
                sprite
            );
        }

        /***************************************************************************************************************
        *   Creates a platform.
        *
        *   @param width     Object width.
        *   @param height    Object height.
        *   @param sprite    The decoration sprite.
        *   @param speed     Moving speed of the platform in px per tick.
        *   @param waypoints Moving waypoints. First waypoint is the startup position.
        *
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createPlatform
        (
            width     :number,
            height    :number,
            sprite    :ninjas.Sprite,
            speed     :number,
            waypoints :Array<matter.Vector>
        )
        :ninjas.Platform
        {
            return new ninjas.Platform
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.Setting.COLOR_DEBUG_PLATFORM,
                    true,
                    0.0,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    Infinity
                ),
                speed,
                waypoints,
                sprite
            );
        }

        /***************************************************************************************************************
         *   Creates a bounce.
         *
         *   @param x      Anchor X.
         *   @param y      Anchor Y.
         *   @param width  Object width.
         *   @param height Object height.
         *   @param sprite The decoration sprite.
         *
         *   @return       The created decoration.
         ***************************************************************************************************************/
        public static createBounce( x:number, y:number, width:number, height:number, sprite:ninjas.Sprite ):ninjas.Bounce
        {
            return new ninjas.Bounce
            (
                new ninjas.ShapeRectangle
                (
                    width,
                    height,
                    ninjas.Setting.COLOR_DEBUG_BOUNCE,
                    false,
                    0.0,
                    ninjas.GameObject.FRICTION_DEFAULT,
                    ninjas.GameObject.DENSITY_DEFAULT
                ),
                x,
                y,
                sprite
            );
        }
    }
