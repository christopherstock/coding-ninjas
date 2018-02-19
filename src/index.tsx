
    require( './css/custom.css' );
    require( "animate.css" );
    require( 'antd/dist/antd.css' );

    import * as ninjas from './de/mayflower/ninjas/ninjas';

    /*******************************************************************************************************************
    *   Being invoked when the page is loaded completely.
    *******************************************************************************************************************/
    window.onload = function()
    {
        // invoke main method
        ninjas.Main.main();
    };

    /*******************************************************************************************************************
    *   Being invoked when the page is left.
    *******************************************************************************************************************/
    window.onunload = function()
    {
    };
