
    import * as matter from 'matter-js';
    import * as ninjas from "../../ninjas";

    /*******************************************************************************************************************
    *   Manages the Matter.js engine.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class MatterJsSystem
    {
        /** The Matter.js engine. */
        private     engine                  :matter.Engine                  = null;
        /** The Matter.js renderer. */
        private     renderer                :matter.Render                  = null;

        /***************************************************************************************************************
        *   Creates a new Matter.js engine.
        *
        *   @param canvas              The canvas to use.
        *   @param callbackAfterRender The function to invoke after  the engine has been rendered and drawed.
        *   @param textureCache        All cached textures to use.
        ***************************************************************************************************************/
        public constructor
        (
            canvas              :HTMLCanvasElement,
            callbackAfterRender :Function,
            textureCache        :Array<HTMLImageElement>
        )
        {
            // create engine
            this.engine = matter.Engine.create();
            this.engine.world.gravity = {
                x: 0.0,
                y: ninjas.SettingMatterJs.DEFAULT_GRAVITY_Y,
                scale: 0.001
            };
            this.engine.timing.timeScale = 1.0;

            // create renderer
            this.renderer = matter.Render.create(
                {
                    canvas:  canvas,
                    engine:  this.engine,
                    options: {
                        hasBounds:          true,
                        wireframes:         false,
                        showCollisions:     ( ninjas.SettingDebug.DEBUG_MODE ),
                        showAxes:           ( ninjas.SettingDebug.DEBUG_MODE ),
                        showAngleIndicator: ( ninjas.SettingDebug.DEBUG_MODE ),
                        showVelocity:       ( ninjas.SettingDebug.DEBUG_MODE ),

                        background:         ninjas.SettingEngine.CANVAS_BG,

                        width:              ninjas.Main.game.engine.canvasSystem.getWidth(),
                        height:             ninjas.Main.game.engine.canvasSystem.getHeight(),
/*
                        showSleeping:       true,
                        showDebug:          true,
                        showBroadphase:     true,
                        showBounds:         true,
                        showSeparations:    true,
                        showPositions:      true,
                        showIds:            true,
                        showShadows:        true,
                        showVertexNumbers:  true,
                        showConvexHulls:    true,
                        showInternalEdges:  true,
*/
                    } as any,
                }
            );

            //set all loaded image as MatterJS texture cache
            this.renderer.textures = textureCache;
            ninjas.Debug.preloader.log( "Assigned [" + Object.keys( this.renderer.textures ).length + "] textures to renderer texture cache " );

            // disables blurry image drawing!
            this.renderer.context.imageSmoothingEnabled = false;

            // add drawing callback after rendering
            matter.Events.on( this.renderer, "afterRender",  () => { callbackAfterRender( this.renderer.context ) } );
        }

        /***************************************************************************************************************
        *   Starts the Matter.js renderer.
        ***************************************************************************************************************/
        public startRenderer() : void
        {
            matter.Render.run( this.renderer );
        }

        /***************************************************************************************************************
        *   Adds the specified constraint to the world.
        *
        *   @param constraint A body, composite or constraint of the Matter.js system.
        ***************************************************************************************************************/
        public addToWorld( constraint:matter.Body|matter.Composite|matter.Constraint ) : void
        {
            matter.Composite.add( this.engine.world, constraint );
        }

        /***************************************************************************************************************
        *   Removes the specified constraint from the world.
        *
        *   @param constraint A body, composite or constraint of the Matter.js system.
        ***************************************************************************************************************/
        public removeFromWorld( constraint:matter.Body|matter.Composite|matter.Constraint ) : void
        {
            matter.Composite.remove( this.engine.world, constraint );
        }

        /***************************************************************************************************************
        *   Updates the dimensions of the Matter.js rendering system.
        ***************************************************************************************************************/
        public updateEngineDimensions( newWidth:number, newHeight:number ) : void
        {
            this.renderer.canvas.width  = newWidth;
            this.renderer.canvas.height = newHeight;

            this.renderer.options.width  = newWidth;
            this.renderer.options.height = newHeight;

            ninjas.Debug.canvas.log( "Updated matter.js engine dimensions according to canvas." );
        }

        /***************************************************************************************************************
        *   Updates the Matter.js engine for the specified rendering delta.
        *
        *   @param renderDelta The rendering delta in ms.
        ***************************************************************************************************************/
        public updateEngine( renderDelta:number ) : void
        {
            matter.Engine.update( this.engine, renderDelta );
        }

        /***************************************************************************************************************
        *   Resets the world of the Matter.js engine.
        ***************************************************************************************************************/
        public resetWorld() : void
        {
            matter.World.clear( this.engine.world, false );
        }

        /***************************************************************************************************************
        *   Sets the bounds of the world to render onto the canvas.
        *
        *   @param bounds The bounds to set for the renderer..
        ***************************************************************************************************************/
        public setRenderBounds( bounds:matter.Bounds ) : void
        {
            this.renderer.bounds = bounds;
        }
    }
