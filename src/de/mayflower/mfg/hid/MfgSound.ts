
    import * as mfg from '../mfg';

    /*****************************************************************************
    *   Specifies all different soundSystem effects being used in the game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    export class MfgSound
    {
        /** The soundSystem 'Pachelbels Canon in D major. */
        public      static      PACHELBELS_CANON                :string                 = mfg.MfgSettings.PATH_SOUND + "pachelbels_canon_d_major.mp3";

        /** This array contains all filenames of all sounds that shall be loaded. */
        public      static      FILE_NAMES                      :Array<string>          =
        [
            MfgSound.PACHELBELS_CANON,
        ];
    }
