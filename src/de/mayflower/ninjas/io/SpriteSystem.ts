
    import * as ninjas from '../ninjas';

    /*******************************************************************************************************************
    *   Created and manages sprite instances.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SpriteSystem
    {
        /***************************************************************************************************************
        *   Creates a new sprite instance.
        *
        *   @param imageSources All image ids this sprite consists of.
        ***************************************************************************************************************/
        public static createSpriteInstance( imageSources:Array<string> )
        {
            return new ninjas.Sprite( imageSources );
        }
    }
