
    /**************************************************************************************
    *   Sets up the 3D transition effect for the main container.
    **************************************************************************************/
    function setup3Dtransitions()
    {
        var SPEED_ANIMATION         = 2.5;
        var INTERVAL                = 10;
        var UPPER_EDGE_Y_MULTIPLIER = 2;
        var TILTING                 = 75;

        var mainContainer = document.querySelector( ".container-main" );

        var currentX  = 0;
        var currentY  = 0;

        var targetX   = 0;
        var targetY   = 0;

        var onMouseMove = function( e )
        {
            var x = getComputedStyle( document.documentElement ).width.slice(  0, -2 );
            var y = getComputedStyle( document.documentElement ).height.slice( 0, -2 );

            targetX = ( x / 2 - e.pageX ) / TILTING;
            targetY = ( y / 2 - e.pageY ) / TILTING;

            if ( targetY > 0 ) targetY *= UPPER_EDGE_Y_MULTIPLIER;
        };

        //add mouse move listener
        document.addEventListener( "mousemove",  onMouseMove, false );
        document.addEventListener( "mouseenter", onMouseMove, false );

        //start thread loop
        setInterval(
            function()
            {
                // reach target X
                if ( currentX < targetX )
                {
                    currentX += SPEED_ANIMATION;
                    if ( currentX > targetX ) currentX = targetX;
                }
                else if ( currentX > targetX )
                {
                    currentX -= SPEED_ANIMATION;
                    if ( currentX < targetX ) currentX = targetX;
                }

                // reach target Y
                if ( currentY < targetY )
                {
                    currentY += SPEED_ANIMATION;
                    if ( currentY > targetY ) currentY = targetY;
                }
                else if ( currentY > targetY )
                {
                    currentY -= SPEED_ANIMATION;
                    if ( currentY < targetY ) currentY = targetY;
                }
/*
                // apply directly
                currentX = targetX;
                currentY = targetY;
*/
                // apply transformation to main-containert and main-image
                mainContainer.style.transform = "rotateX("     + currentY + "deg) rotateY(" + -currentX + "deg)";
            },
            INTERVAL
        );
    }

    /**************************************************************************************
    *   Initializes JS WOW effects.
    **************************************************************************************/
    function initWowEffects()
    {
        new WOW().init();
    }

    /**************************************************************************************
    *   Show the main container delayed.
    **************************************************************************************/
    function showPanelDelayed()
    {
        //show panel in 0.5 sec
        window.setTimeout(
            function()
            {
                //show main panel
                var theMainContainer = document.querySelector( ".container-main" );
                theMainContainer.style.visibility = "visible";
            },
            100
        );
    }

    /**************************************************************************************
    *   Being invoked when the website is loaded.
    **************************************************************************************/
    window.onload = function()
    {
        setup3Dtransitions();
        initWowEffects();
        showPanelDelayed();
    };
