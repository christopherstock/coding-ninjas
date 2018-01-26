
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Creates customized instances of game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class MfgGameObjectFactory
    {
        /***************************************************************************************************************
        *   Creates a box.
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
        public static createBox( x:number, y:number, width:number, height:number, friction:number, density:number ):mfg.MfgBox
        {
            return new mfg.MfgBox
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_BOX,
                    false,
                    0.0,
                    friction,
                    density
                ),
                x,
                y
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
        public static createSphere( x:number, y:number, diameter:number, friction:number, density:number ):mfg.MfgBox
        {
            return new mfg.MfgBox
            (
                new mfg.MfgShapeCircle
                (
                    diameter,
                    mfg.MfgSettings.COLOR_DEBUG_BOX,
                    false,
                    0.0,
                    friction,
                    density
                ),
                x,
                y
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
        public static createItem( x:number, y:number ):mfg.MfgItem
        {
            return new mfg.MfgItem
            (
                new mfg.MfgShapeRectangle
                (
                    30.0,
                    52.0,
                    mfg.MfgSettings.COLOR_DEBUG_ITEM,
                    true,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
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
        public static createBlock( x:number, y:number, width:number, height:number, angle:number, jumpPassThrough:boolean ):mfg.MfgObstacle
        {
            return new mfg.MfgObstacle
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_OBSTACLE,
                    true,
                    angle,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
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
        public static createFreeForm( x:number, y:number, vertices:Array<Matter.Vector>, angle:number ):mfg.MfgObstacle
        {
            return new mfg.MfgObstacle
            (
                new mfg.MfgShapeFreeForm
                (
                    vertices,
                    mfg.MfgSettings.COLOR_DEBUG_OBSTACLE,
                    true,
                    angle,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
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
        public static createElevatedRamp( x:number, y:number, width:number, height:number, deltaY:number ):mfg.MfgObstacle
        {
            let vertices:Array<Matter.Vector> = [];

            vertices.push( Matter.Vector.create( 0.0,   0.0             ) );
            vertices.push( Matter.Vector.create( width, deltaY          ) );
            vertices.push( Matter.Vector.create( width, height + deltaY ) );
            vertices.push( Matter.Vector.create( 0.0,   height          ) );

            if ( deltaY <= 0.0 )
            {
                y += deltaY;
            }

            return new mfg.MfgObstacle
            (
                new mfg.MfgShapeFreeForm
                (
                    vertices,
                    mfg.MfgSettings.COLOR_DEBUG_OBSTACLE,
                    true,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
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
        public static createEnemy( x:number, y:number ):mfg.MfgEnemy
        {
            return new mfg.MfgEnemy
            (
                new mfg.MfgShapeRectangle
                (
                    50.0,
                    50.0,
                    mfg.MfgSettings.COLOR_DEBUG_ENEMY,
                    false,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
                    mfg.MfgGameObject.DENSITY_HUMAN
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
        *   @param image  The decoration image.
        *
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createDecoration( x:number, y:number, width:number, height:number, image:string ):mfg.MfgDecoration
        {
            return new mfg.MfgDecoration
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_DECORATION,
                    true,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
                    Infinity
                ),
                x,
                y,
                image
            );
        }

        /***************************************************************************************************************
        *   Creates a sigsaw.
        *
        *   @param x      Anchor X.
        *   @param y      Anchor Y.
        *   @param width  Object width.
        *   @param height Object height.
        *   @param image  The decoration image.
        *
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createSigsaw( x:number, y:number, width:number, height:number, image:string ):mfg.MfgSigSaw
        {
            return new mfg.MfgSigSaw
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_SIGSAW,
                    false,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
                    mfg.MfgGameObject.DENSITY_DEFAULT
                ),
                x,
                y,
                image
            );
        }

        /***************************************************************************************************************
        *   Creates a platform.
        *
        *   @param width     Object width.
        *   @param height    Object height.
        *   @param image     The decoration image.
        *   @param speed     Moving speed of the platform in px per tick.
        *   @param waypoints Moving waypoints. First waypoint is the startup position.
        *
        *   @return       The created decoration.
        ***************************************************************************************************************/
        public static createPlatform( width:number, height:number, image:string, speed:number, waypoints:Array<Matter.Vector> ):mfg.MfgPlatform
        {
            return new mfg.MfgPlatform
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_PLATFORM,
                    true,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
                    Infinity
                ),
                speed,
                waypoints,
                image
            );
        }

        /***************************************************************************************************************
         *   Creates a bounce.
         *
         *   @param x      Anchor X.
         *   @param y      Anchor Y.
         *   @param width  Object width.
         *   @param height Object height.
         *   @param image  The decoration image.
         *
         *   @return       The created decoration.
         ***************************************************************************************************************/
        public static createBounce( x:number, y:number, width:number, height:number, image:string ):mfg.MfgBounce
        {
            return new mfg.MfgBounce
            (
                new mfg.MfgShapeRectangle
                (
                    width,
                    height,
                    mfg.MfgSettings.COLOR_DEBUG_BOUNCE,
                    false,
                    0.0,
                    mfg.MfgGameObject.FRICTION_DEFAULT,
                    mfg.MfgGameObject.DENSITY_DEFAULT
                ),
                x,
                y,
                image
            );
        }
    }
