
    import * as Matter from 'matter-js';
    import * as mfg    from '../mfg';

    /*******************************************************************************************************************
    *   Specifies the game logic and specifies all primal parts of the game.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgGame
    {
        /** The MatterJS engine. */
        public      engine                  :Matter.Engine          = null;
        /** The MatterJS renderer. */
        private     renderer                :Matter.Render          = null;

        /** The custom key system. */
        public      keySystem               :mfg.MfgKeySystem       = null;
        /** The custom camera. */
        public      camera                  :mfg.MfgCamera          = null;
        /** The custom level. */
        public      level                   :mfg.MfgLevel           = null;

        /** The soundSystem system. */
        public      test             :mfg.MfgSoundSystem     = null;

        /***************************************************************************************************************
        *   Inits the game from scratch.
        ***************************************************************************************************************/
        public init()
        {
            mfg.MfgDebug.init.log( "Initing game engine" );

            this.initEngine2D();
            this.initKeySystem();
            this.initSoundSystem();

            mfg.MfgDebug.init.log( "Playing bg sounds" );
            // this.test.playSound( mfg.MfgSound.PACHELBELS_CANON );

            mfg.MfgDebug.init.log( "Launching initial level" );
            this.resetAndLaunchLevel( new mfg.MfgLevelDev() );
        }

        /***************************************************************************************************************
        *   Starts the game loop.
        ***************************************************************************************************************/
        public start()
        {
            // render 1st engine tick
            this.tick();

            // start the renderer
            Matter.Render.run( this.renderer );

            window.setInterval(
                this.tick,
                mfg.MfgSettings.RENDER_DELTA
            );
        }

        /***************************************************************************************************************
        *   Inits the 2D engine.
        ***************************************************************************************************************/
        private initEngine2D()
        {
            this.engine = Matter.Engine.create();

            let options:any =
            {
                hasBounds:          true,
                wireframes:         false,
                showCollisions:     true,
                showAngleIndicator: true,
                showVelocity:       true,
            };

            this.renderer = Matter.Render.create(
                {
                    element: document.body,
                    engine:  this.engine,
                    options: options,
                }
            );

            this.renderer.canvas.width  = mfg.MfgSettings.CANVAS_WIDTH;
            this.renderer.canvas.height = mfg.MfgSettings.CANVAS_HEIGHT;

            this.engine.world.gravity = {
                x: 0.0,
                y: mfg.MfgSettings.DEFAULT_GRAVITY_Y,
                scale: 0.001
            };
        }

        /***************************************************************************************************************
        *   Inits the key system.
        ***************************************************************************************************************/
        private initKeySystem()
        {
            this.keySystem = new mfg.MfgKeySystem();
        }

        /***************************************************************************************************************
        *   Inits the soundSystem system.
        ***************************************************************************************************************/
        private initSoundSystem()
        {
            this.test = new mfg.MfgSoundSystem( mfg.MfgSound.FILE_NAMES );
        }

        /***************************************************************************************************************
        *   Inits the level.
        ***************************************************************************************************************/
        private resetAndLaunchLevel( levelToLaunch:mfg.MfgLevel )
        {
            // clear world
            Matter.World.clear( this.engine.world, false );

            // assign and init level
            this.level = levelToLaunch;
            this.level.init();

            // reset camera
            this.camera = new mfg.MfgCamera(
                this.renderer,
                mfg.MfgSettings.CAMERA_RATIO_X,
                mfg.MfgSettings.CAMERA_RATIO_Y,
                mfg.MfgSettings.CAMERA_MOVING_SPEED,
                mfg.MfgSettings.CAMERA_MOVING_MINIMUM,
                this.level.width,
                this.level.height,
                mfg.MfgSettings.CANVAS_WIDTH,
                mfg.MfgSettings.CANVAS_HEIGHT
            );
            this.camera.reset();
        }

        /***************************************************************************************************************
        *   Being invoked each tick of the game loop in order to render the game.
        ***************************************************************************************************************/
        private tick=()=>
        {
            // render the engine
            this.render();

            // update MatterJS 2d engine
            Matter.Engine.update( this.engine, mfg.MfgSettings.RENDER_DELTA );
        };

        /***************************************************************************************************************
        *   Renders all game components.
        ***************************************************************************************************************/
        private render()
        {
            // handle menu key
            this.handleMenuKey();

            // render level
            this.level.render();

            // render camera
            this.camera.update(
                this.level.player.shape.body.position.x,
                this.level.player.shape.body.position.y,
                this.level.player.lookingDirection,
                this.level.player.collidesBottom
            );
        }

        /***************************************************************************************************************
        *   Handles pressed menu keys.
        ***************************************************************************************************************/
        private handleMenuKey()
        {
            if ( mfg.Mfg.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_1 ) )
            {
                mfg.Mfg.game.keySystem.setNeedsRelease( mfg.MfgKeySystem.KEY_1 );

                mfg.MfgDebug.init.log( "Switching to level 1" );
                this.resetAndLaunchLevel( new mfg.MfgLevelDev() );
            }

            if ( mfg.Mfg.game.keySystem.isPressed( mfg.MfgKeySystem.KEY_2 ) )
            {
                mfg.Mfg.game.keySystem.setNeedsRelease( mfg.MfgKeySystem.KEY_2 );

                mfg.MfgDebug.init.log( "Switching to level 2" );
                this.resetAndLaunchLevel( new mfg.MfgLevelEnchantedWoods() );
            }
        }
    }
