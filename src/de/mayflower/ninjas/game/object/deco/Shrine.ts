
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents a non-colliding shrine decoration.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class Shrine extends ninjas.Decoration
    {
        /** The site content this shrine is connected to. */
        private                     content                 :ninjas.SiteContent                 = null;

        /***************************************************************************************************************
        *   Creates a new Shrine.
        *
        *   @param shape          The shape for this object.
        *   @param spriteTemplate The sprite template to use.
        *   @param x              Startup position X.
        *   @param y              Startup position Y.
        *   @param content        The site content this shrine is connected to.
        ***************************************************************************************************************/
        public constructor( shape:ninjas.Shape, spriteTemplate:ninjas.SpriteTemplate, x:number, y:number, content:ninjas.SiteContent )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y,
            );

            this.content = content;
        }

        /***************************************************************************************************************
        *   Renders this decoration.
        ***************************************************************************************************************/
        public render()
        {
            super.render();
        }
    }
