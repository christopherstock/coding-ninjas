
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   The abstract class of all game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export abstract class MfgGameObject
    {
        /** Highest surface friction. */
        public  static  FRICTION_CONCRETE       :number                         = 1.0;
        /** Default surface friction. */
        public  static  FRICTION_DEFAULT        :number                         = 0.1;
        /** Low surface friction. */
        public  static  FRICTION_GLASS          :number                         = 0.01;
        /** Lowest surface friction. */
        public  static  FRICTION_ICE            :number                         = 0.0;

        /** Character density. */
        public  static  DENSITY_HUMAN           :number                         = 0.01;
        /** Default density. */
        public  static  DENSITY_DEFAULT         :number                         = 0.001;

        /** The game object's shape. */
        public          shape                   :mfg.MfgShape                   = null;

        /***************************************************************************************************************
        *   Creates a new game object.
        *
        *   @param shape      The shape for this object.
        *   @param x          Startup position X.
        *   @param y          Startup position Y.
        *   @param image      The image for this game object.
        ***************************************************************************************************************/
        protected constructor
        (
            shape:mfg.MfgShape,
            x:number,
            y:number,
            image:string
        )
        {
            this.shape = shape;

            Matter.Body.translate( this.shape.body, Matter.Vector.create( x, y ) );

            if ( image != null )
            {
                this.shape.body.render.sprite.texture = image;
            }
        }

        /***************************************************************************************************************
        *   Renders the current game object.
        ***************************************************************************************************************/
        public abstract render();

        /***************************************************************************************************************
        *   Avoids this game object from rotating.
        ***************************************************************************************************************/
        protected resetRotation()
        {
            Matter.Body.setAngularVelocity( this.shape.body, 0.0 );
            Matter.Body.setAngle(           this.shape.body, 0.0 );
        }

        /***************************************************************************************************************
        *   Clips this body to level bounds.
        ***************************************************************************************************************/
        protected clipToHorizontalLevelBounds()
        {
            if ( this.shape.body.position.x < this.shape.getWidth() / 2 )
            {
                Matter.Body.setPosition(
                    this.shape.body,
                    {
                        x: this.shape.getWidth() / 2,
                        y: this.shape.body.position.y
                    }
                );
            }

            if ( this.shape.body.position.x > mfg.Mfg.game.level.width - this.shape.getWidth() / 2 )
            {
                Matter.Body.setPosition(
                    this.shape.body,
                    {
                        x: mfg.Mfg.game.level.width - this.shape.getWidth() / 2,
                        y: this.shape.body.position.y
                    }
                );
            }
        }
    }
