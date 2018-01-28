
    /*******************************************************************************************************************
    *   Offers additional mathematical functionality.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class MathUtil
    {
        // TODO add random method!

        /***************************************************************************************************************
        *   Converts angles to radians.
        *
        *   @param  angle   The angle in degrees.
        *   @return         The specified angle in radians.
        ***************************************************************************************************************/
        public static angleToRad( angle:number ):number
        {
            return ( angle * Math.PI / 180.0 );
        }
    }
