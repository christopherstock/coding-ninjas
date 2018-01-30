
    const moment = require('moment');

    /*******************************************************************************************************************
    *   Offers static string functionality.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class String
    {
        /***************************************************************************************************************
        *   Returns an array of all found regular expression matches.
        *
        *   @param  subject  The target string to apply the regular expression search on.
        *   @param  regEx    The regular expression.
        *                    This string MUST NOT be enclosed in string quotes!
        *   @return          An array containing all matched results.
        ***************************************************************************************************************/
        public static searchRegEx( subject:string, regEx:RegExp ):Array<string>
        {
            let results:RegExpMatchArray  = subject.match( regEx );
            let ret:Array<string>         = [];

            if ( results != null )
            {
                for ( let i:number = 0; i < results.length; ++i )
                {
                    ret[ i ] = results[ i ];
                }
            }

            return ret;
        }

        /***************************************************************************************************************
        *   Returns a formatted timestamp of the current system date and time.
        *
        *   @return string A formatted timestamp of the current system date and time.
        ***************************************************************************************************************/
        public static getDateTimeString():string
        {
            return new moment().format( 'DD.MM.YYYY HH:mm:ss' );
        }
    }
