
    import * as Matter from 'matter-js';
    import * as mfg    from '../../mfg';

    /*******************************************************************************************************************
    *   Represents a platform that moves.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MfgPlatform extends mfg.MfgGameObject
    {
        /** Medium moving speed. */
        public  static      SPEED_NORMAL            :number                         = 1.0;

        /** The waypoints for this platform to move. */
        private             waypoints               :Array<Matter.Vector>           = null;
        /** The number of ticks till the next waypoint is reached. */
        private             speed                   :number                         = 0.0;
        /** The current waypoint to move to. */
        private             currentWaypointIndex    :number                         = 0;

        /** The number of animation steps till the next waypoint. */
        private             stepsTillNextWaypoint   :number                         = 0;
        /** A counter for the current step to the next waypoint. */
        private             currentStep             :number                         = 0;

        /** Step size X per tick in px. */
        private             stepSizeX               :number                         = 0.0;
        /** Step size Y per tick in px. */
        private             stepSizeY               :number                         = 0.0;

        /***************************************************************************************************************
        *   Creates a new platform. Initial position is the first waypoint.
        *
        *   @param shape     The shape for this object.
        *   @param speed     The speed in pixels per tick.
        *   @param waypoints The waypoints for this platform to move to.
        *   @param image     The image for this platform.
        ***************************************************************************************************************/
        public constructor
        (
            shape:mfg.MfgShape,
            speed:number,
            waypoints:Array<Matter.Vector>,
            image:string
        )
        {
            super
            (
                shape,
                0.0,
                0.0,
                image
            );

            if ( waypoints.length == 0 )
            {
                throw new Error( "Platform requires at least one waypoint to be specified!" );
            }

            this.waypoints            = waypoints;
            this.speed                = speed;

            this.currentWaypointIndex = -1;
            this.assignNextWaypoint();

            this.shape.body.frictionStatic = Infinity;
        }

        /***************************************************************************************************************
        *   Assigns the next waypoint to aim to.
        ***************************************************************************************************************/
        private assignNextWaypoint()
        {
            // increase index for current wp
            ++this.currentWaypointIndex;

            // assign current wp
            if ( this.currentWaypointIndex >= this.waypoints.length ) this.currentWaypointIndex = 0;
            let currentWaypoint:Matter.Vector = Matter.Vector.create
            (
                this.waypoints[ this.currentWaypointIndex ].x + ( this.shape.getWidth()  / 2 ),
                this.waypoints[ this.currentWaypointIndex ].y + ( this.shape.getHeight() / 2 )
            );

            // assign next wp
            let nextWaypointIndex = this.currentWaypointIndex + 1;
            if ( nextWaypointIndex >= this.waypoints.length ) nextWaypointIndex = 0;
            let nextWaypoint:Matter.Vector = Matter.Vector.create
            (
                this.waypoints[ nextWaypointIndex ].x + ( this.shape.getWidth()  / 2 ),
                this.waypoints[ nextWaypointIndex ].y + ( this.shape.getHeight() / 2 )
            );

            // set platform to starting wp
            Matter.Body.setPosition( this.shape.body, currentWaypoint );

            // get deltas
            let deltaX:number      = Math.abs( nextWaypoint.x - currentWaypoint.x );
            let deltaY:number      = Math.abs( nextWaypoint.y - currentWaypoint.y );
            let deltaDirect:number = Math.sqrt( ( deltaX * deltaX ) + ( deltaY * deltaY ) );

            // reset steps and calculate number of steps for reaching the next waypoint
            this.currentStep = 0;
            this.stepsTillNextWaypoint = deltaDirect / this.speed;

            // calculate step size
            this.stepSizeX = ( nextWaypoint.x - currentWaypoint.x ) / this.stepsTillNextWaypoint;
            this.stepSizeY = ( nextWaypoint.y - currentWaypoint.y ) / this.stepsTillNextWaypoint;
        }

        /***************************************************************************************************************
        *   Renders this obstacle.
        ***************************************************************************************************************/
        public render()
        {
            ++this.currentStep;
            if ( this.currentStep > this.stepsTillNextWaypoint )
            {
                this.assignNextWaypoint();
            }

            // move platform
            Matter.Body.setVelocity( this.shape.body, Matter.Vector.create( this.stepSizeX, this.stepSizeY ) );
            Matter.Body.translate(   this.shape.body, Matter.Vector.create( this.stepSizeX, this.stepSizeY ) );
        }
    }
