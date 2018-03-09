
    import * as ninjas from '../../ninjas';
    import * as React  from 'react';

    /*******************************************************************************************************************
    *   A react component with the content for the 'technology' page.
    *
    *   @author  Christopher Stock
    *   @version 1.0.0
    *******************************************************************************************************************/
    export class ContentTechnology extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ContentTechnology.render() being invoked" );

            return <div>

                { ninjas.SiteContentFactory.createStepIndicator( ninjas.SiteContent.CONTENT_TECHNOLOGY ) }
                { ninjas.SiteContentFactory.createDivider() }
                { ninjas.SiteContentFactory.createHeadline( "Primal Technologies" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                { ninjas.SiteContentFactory.createParagraph( "Read more about the technologies being used to realize this website:" ) }
                { ninjas.SiteContentFactory.createSpacerVertical() }
                {
                    ninjas.SiteContentFactory.createAccordion
                    (
                        [
                            "Node.js",
                            "TypeScript",
                            "Webpack",
                            "Matter.js",
                            "React",
                            "Ant Design",
                        ],
                        [
                            <div>
                                { ninjas.SiteContentFactory.createImageFloating( "right", ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_LOGO_NODE_JS ).src ) }
                                { ninjas.SiteContentFactory.createParagraph( "Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. Historically, JavaScript was used primarily for client-side scripting, in which scripts written in JavaScript are embedded in a webpage's HTML, to be run client-side by a JavaScript engine in the user's web browser." ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "lime", "transparent", "yarn init -y" ) }
                                { ninjas.SiteContentFactory.createTag( "lime", "transparent", "Creates a new Node.js project with default settings" ) }
                            </div>,
                            <div>
                                { ninjas.SiteContentFactory.createImageFloating( "right", ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_LOGO_TYPE_SCRIPT ).src ) }
                                { ninjas.SiteContentFactory.createParagraph( "TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and compiles to JavaScript. As TypeScript is a superset of JavaScript, existing JavaScript programs are also valid TypeScript programs." ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "blue", "transparent", "yarn add typescript --dev" ) }
                                { ninjas.SiteContentFactory.createTag( "blue", "transparent", "Installs the TypeScript compiler as a dev dependency" ) }
                            </div>,
                            <div>
                                { ninjas.SiteContentFactory.createImageFloating( "right", ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_LOGO_WEBPACK ).src ) }
                                { ninjas.SiteContentFactory.createParagraph( "Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules. It takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes. The bundler can be used from the command line, or can be configured using a config file." ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "cyan", "transparent", "yarn add webpack --dev" ) }
                                { ninjas.SiteContentFactory.createTag( "cyan", "transparent", "Installs the webpack module bundler" ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "cyan", "transparent", "yarn add @types/webpack --dev" ) }
                                { ninjas.SiteContentFactory.createTag( "cyan", "transparent", "Installs the TypeScript definitions for webpack" ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "cyan", "transparent", "yarn add awesome-typescript-loader --dev" ) }
                                { ninjas.SiteContentFactory.createTag( "cyan", "transparent", "Installs the TS loader for webpack" ) }
                            </div>,
                            <div>
                                { ninjas.SiteContentFactory.createImageFloating( "right", ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_LOGO_MATTER_JS ).src ) }
                                { ninjas.SiteContentFactory.createParagraph( "Matter.js is a JavaScript 2D rigid body physics engine for the web. It features rigid bodies, compound bodies, composite bodies, concave and convex hulls, physical properties (mass, area, density etc.), restitution (elastic and inelastic collisions), collisions (broad-phase, mid-phase and narrow-phase) and many more." ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "gold", "transparent", "yarn add matter-js"  ) }
                                { ninjas.SiteContentFactory.createTag( "gold", "transparent", "Installs the Matter.js 2D physics library" ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "gold", "transparent", "yarn add @types/matter-js --dev"  ) }
                                { ninjas.SiteContentFactory.createTag( "gold", "transparent", "Installs the TypeScript definitions for Matter.js"  ) }
                            </div>,
                            <div>
                                { ninjas.SiteContentFactory.createImageFloating( "right", ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_LOGO_REACT ).src ) }
                                { ninjas.SiteContentFactory.createParagraph( "React is a JavaScript library for building user interfaces. React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS." ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "volcano", "transparent", "yarn add react" ) }
                                { ninjas.SiteContentFactory.createTag( "volcano", "transparent", "Installs the React library" ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "volcano", "transparent", "yarn add @types/react --dev" ) }
                                { ninjas.SiteContentFactory.createTag( "volcano", "transparent", "Installs the TypeScript definitions for React" ) }
                            </div>,
                            <div>
                                { ninjas.SiteContentFactory.createImageFloating( "right", ninjas.Main.game.engine.imageSystem.getImage( ninjas.Image.IMAGE_SITE_LOGO_ANT_DESIGN ).src ) }
                                { ninjas.SiteContentFactory.createParagraph( "An enterprise-class UI design language and React-based implementation for desktop applications offering a set of high-quality React components out of the box. Written in TypeScript with predictable static types, this library allows working with great development and design resources and tools." ) }
                                { ninjas.SiteContentFactory.createSpacerVertical() }
                                { ninjas.SiteContentFactory.createTag( "magenta", "transparent", "yarn add antd"  ) }
                                { ninjas.SiteContentFactory.createTag( "magenta", "transparent", "Installs the Ant Design library"  ) }
                            </div>,
                        ]
                    )
                }

            </div>
        }
    }
