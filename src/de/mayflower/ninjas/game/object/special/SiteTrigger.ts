
    import * as matter from 'matter-js';
    import * as ninjas from '../../../ninjas';

    /*******************************************************************************************************************
    *   Represents a non-colliding decoration.
    *
    *   @author     Christopher Stock
    *   @version    0.0.1
    *******************************************************************************************************************/
    export class SiteTrigger extends ninjas.Decoration
    {
        /** Flags if the according site panel is currently displayed. */
        private                         sitePanelActive                 :boolean                    = false;
        /** A fixed position for the panel to popup, if desired. */
        private                         fixedPanelPosition              :ninjas.SitePanelPosition   = null;

        /***************************************************************************************************************
        *   Creates a new site trigger.
        *
        *   @param shape              The shape for this object.
        *   @param spriteTemplate     The sprite template to use.
        *   @param x                  Startup position X.
        *   @param y                  Startup position Y.
        *   @param fixedPanelPosition Startup position Y.
        ***************************************************************************************************************/
        public constructor
        (
            shape              :ninjas.Shape,
            spriteTemplate     :ninjas.SpriteTemplate,
            x                  :number,
            y                  :number,
            fixedPanelPosition :ninjas.SitePanelPosition
        )
        {
            super
            (
                shape,
                spriteTemplate,
                x,
                y
            );

            this.fixedPanelPosition = fixedPanelPosition;
        }

        /***************************************************************************************************************
        *   Renders this site trigger.
        ***************************************************************************************************************/
        public render()
        {
            super.render();

            // check if player collides with this trigger
            if ( this.checkPlayerCollision() )
            {
                if ( !this.sitePanelActive )
                {
                    // get panel popup according to player looking direction
                    let panelPosition:ninjas.SitePanelPosition = this.determinePanelPosition();

                    if ( ninjas.Main.game.engine.siteSystem.show( panelPosition ) )
                    {
                        this.sitePanelActive = true;
                    }
                }
            }
            else
            {
                if ( this.sitePanelActive )
                {
                    if ( ninjas.Main.game.engine.siteSystem.hide() )
                    {
                        this.sitePanelActive = false;
                    }
                }
            }
        }

        /***************************************************************************************************************
        *   Renders this site trigger.
        ***************************************************************************************************************/
        private checkPlayerCollision() : boolean
        {
            return ( matter.Bounds.overlaps( this.shape.body.bounds, ninjas.Main.game.level.player.shape.body.bounds ) );
        }

        /***************************************************************************************************************
        *   Determines the position of the panel to show according to the player's current looking direction.
        *
        *   @return The position of the panel to be shown.
        ***************************************************************************************************************/
        private determinePanelPosition() : ninjas.SitePanelPosition
        {
            if ( this.fixedPanelPosition == null )
            {
                if ( ninjas.Main.game.level.player.lookingDirection == ninjas.CharacterLookingDirection.LEFT )
                {
                    return ninjas.SitePanelPosition.LEFT;
                }
                else
                {
                    return ninjas.SitePanelPosition.RIGHT;
                }
            }

            return this.fixedPanelPosition;
        }
    }
