
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents a non-colliding shrine decoration.
    *
    *   @author     Christopher Stock
    *   @version    1.0.0
    *******************************************************************************************************************/
    export class Shrine extends ninjas.Decoration
    {
        /** The site content this shrine is connected to. */
        public                      content                 :ninjas.SiteContent                 = null;
        /** The decoration of the open book for this shrine. */
        private                     decoBookOpen            :ninjas.Decoration                  = null;
        /** The decoration of the closed book for this shrine. */
        private                     decoBookClosed          :ninjas.Decoration                  = null;

        /***************************************************************************************************************
        *   Creates a new Shrine.
        *
        *   @param shape          The shape for this object.
        *   @param spriteTemplate The sprite template to use.
        *   @param x              Startup position X.
        *   @param y              Startup position Y.
        *   @param content        The site content this shrine is connected to.
        *   @param decoBookOpen   The decoration of the open book for this shrine.
        *   @param decoBookClosed The decoration of the closed book for this shrine.
        ***************************************************************************************************************/
        public constructor
        (
            shape          :ninjas.Shape,
            spriteTemplate :ninjas.SpriteTemplate,
            x              :number,
            y              :number,
            content        :ninjas.SiteContent,
            decoBookOpen   :ninjas.Decoration,
            decoBookClosed :ninjas.Decoration
        )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y,
            );

            this.content = content;

            this.decoBookOpen   = decoBookOpen;
            this.decoBookClosed = decoBookClosed;

            // close the book initially
            this.setBookOpen( false );
        }

        /***************************************************************************************************************
        *   Sets the shrine book open or closed..
        *
        *   @boolean open Specifies if the open book should be shown.
        ***************************************************************************************************************/
        public setBookOpen( open:boolean ) : void
        {
            this.decoBookOpen.setVisible(   open  );
            this.decoBookClosed.setVisible( !open );
        }
    }
