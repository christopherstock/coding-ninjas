
    import * as mfg from '../mfg';

    /*****************************************************************************
    *   Loads and manages all desired sounds.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *****************************************************************************/
    export class MfgSoundSystem
    {
        /** This array contains all loaded sounds. */
        private                     allSounds                               :Array<HTMLAudioElement>    = [];

        /*****************************************************************************
        *   Loads all audio elements.
        *
        *   @param fileNames An array containing all filenames of the sounds to load.
        *****************************************************************************/
        constructor( fileNames:Array<string> )
        {
            //load all sounds
            for ( let i:number = 0; i < fileNames.length; ++i )
            {
                this.allSounds[ fileNames[ i ] ] = new Audio( fileNames[ i ] );
            }
        }

        /*****************************************************************************
        *   Creates and plays a COPY of the specified audio object.
        *
        *   @param id The ID of the audio object to play.
        *****************************************************************************/
        public playSound( id:string )
        {
            let clipClone:HTMLAudioElement = <HTMLAudioElement>this.allSounds[ id ].cloneNode( true );
            clipClone.play();
        }
    }
