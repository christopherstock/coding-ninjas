
    import * as ninjas from '../../ninjas';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'references' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ContentReferences extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentReferences.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( 4 ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createHeadline( "Primal References" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createParagraph( "Our references are ..." ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createParagraph( "See our timeline of this project evolution:" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
/*
                ninjas.SiteContentFactory.createParagraph( "We offer high quality enterprise and desktop application development." )
                ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )
                ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )
                ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )
                ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )
                ninjas.SiteContentFactory.createAvatar( "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" )
*/
                {
                    ninjas.SiteContentFactory.createTimeline
                    (
                        [
                            "green",
                            "green",
                            "red",
                            "#1890ff",
                            "#1890ff",
                        ],
                        [
                            <p>Create a services site 2015-09-01</p>,
                            <p>Create a services site 2015-09-01</p>,
                            <div>
                                <p>Solve initial network problems 1</p>
                                <p>Solve initial network problems 2</p>
                                <p>Solve initial network problems 3 2015-09-01</p>
                            </div>,
                            <div>
                                <p>Technical testing 1</p>
                                <p>Technical testing 2</p>
                                <p>Technical testing 3 2015-09-01</p>
                            </div>,
                            <p>Completed MVP 2018-02-25</p>,
                        ]
                    )
                }

            </div>
        }
    }
