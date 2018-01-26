
    import * as ninjas from '../ninjas';

    /*****************************************************************************
    *   Specifies all different soundSystem effects being used in the game.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    export class Sound
    {
        /** The bg sound 'chinese' from Graeme Norgate taken from 'Time Splitters'. */
        public      static      BG                              :string                 = ninjas.Setting.PATH_SOUND + "bg.mp3";

        /** An array holding all filenames of all sounds to load. */
        public      static      FILE_NAMES                      :Array<string>          =
        [
            Sound.BG,
        ];
    }
