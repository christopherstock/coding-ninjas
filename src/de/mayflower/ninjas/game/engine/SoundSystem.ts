
    import * as ninjas from '../../ninjas';

    /*******************************************************************************************************************
    *   Loads and manages all desired sounds.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class SoundSystem
    {
        /** All sound file names to load. */
        private         fileNames                       :Array<string>                  = null;
        /** The method to invoke when all sounds are loaded. */
        private         onLoadComplete                  :Function                       = null;

        /** The number of currently loaded sounds. */
        private         loadedSoundCount                :number                         = 0;
        /** All loaded sound objects. */
        private         sounds                          :Array<HTMLAudioElement>        = [];

        /***************************************************************************************************************
        *   Preloads all images into memory.
        *
        *   @param fileNames      The names of all image files to load.
        *   @param onLoadComplete The method to invoke when all image files are loaded.
        ***************************************************************************************************************/
        public constructor( fileNames:Array<string>, onLoadComplete:Function )
        {
            this.fileNames      = fileNames;
            this.onLoadComplete = onLoadComplete;
        }

        /***************************************************************************************************************
        *   Creates and plays a COPY of the specified audio object.
        *
        *   @param id   The ID of the audio object to play.
        *   @param loop Specifies if playback for this sound should be repeated infinitely.
        ***************************************************************************************************************/
        public playSound( id:string, loop:boolean = false )
        {
            if ( !ninjas.SettingDebug.MUTE )
            {
                if ( this.sounds[ id ] != null )
                {
                    let clipClone:HTMLAudioElement = this.sounds[ id ].cloneNode( true );

                    if ( loop )
                    {
                        clipClone.addEventListener(
                            "ended",
                            () => {

                                ninjas.Debug.sound.log( "Clip ended - now repeating .." );

                                // clipClone.
                                clipClone.play();
                            }
                        );
                    }

                    clipClone.play();
                }
            }
        }

        /***************************************************************************************************************
        *   Loads all specified sound files into system memory.
        ***************************************************************************************************************/
        public loadSounds() : void
        {
            ninjas.Debug.sound.log( "Preloading [" + this.fileNames.length + "] sounds" );

            for ( let fileName of this.fileNames )
            {
                try
                {
                    this.sounds[ fileName ]              = new Audio();
                    this.sounds[ fileName ].src          = fileName;
                    this.sounds[ fileName ].onloadeddata = this.onLoadSound;
                }
                catch ( e )
                {
                    ninjas.Debug.sound.log( "Error on creating Audio element: " + e.message );
                    this.onLoadSound();
                }
            }
        }

        /***************************************************************************************************************
        *   Being invoked when one image was loaded completely.
        ***************************************************************************************************************/
        private onLoadSound=() : void =>
        {
            if ( ++this.loadedSoundCount == this.fileNames.length )
            {
                ninjas.Debug.sound.log( "All [" + this.fileNames.length + "] sounds loaded" );

                this.onLoadComplete();
            }
        };
    }
