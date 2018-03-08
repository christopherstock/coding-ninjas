
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   Specifies all different soundSystem effects being used in the game.
    *
    *   @author  Christopher Stock
    *   @version 1.0.0
    *******************************************************************************************************************/
    export class Sound
    {
        /** 'chinese' from 'Graeme Norgate' taken from 'Time Splitters' - Although everybody knows that ninjas actually come from Japan .. */
        public      static      BG_CHINESE                      :string                 = ninjas.SettingEngine.PATH_SOUND + "bgChinese.mp3";
        /** 'play hard' from 'Graeme Norgate' taken from 'Killer Instict Gold' */
/*
        public      static      BG_PLAY_HARD                    :string                 = ninjas.SettingEngine.PATH_SOUND + "bgPlayHard.mp3";
*/
        /** An array holding all filenames of all sounds to load. */
        public      static      FILE_NAMES                      :Array<string>          =
        [
            Sound.BG_CHINESE,
/*
            Sound.BG_PLAY_HARD,
*/
        ];
    }
