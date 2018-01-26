
    import * as ninjas from '../ninjas';

    /*****************************************************************************
    *   Specifies all different soundSystem effects being used in the game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    export class Sound
    {
        /** The soundSystem 'Pachelbels Canon in D major. */
        public      static      BG                              :string                 = ninjas.Setting.PATH_SOUND + "bg.mp3";

        /** This array contains all filenames of all sounds that shall be loaded. */
        public      static      FILE_NAMES                      :Array<string>          =
        [
            Sound.BG,
        ];
    }
