
    import * as ninjas from '../../ninjas';
    import { Row, Col, Layout, Divider, Tooltip, Button } from 'antd';
    import * as React from 'react';

    /*******************************************************************************************************************
    *   A react component with 'example content'.
    *
    *   @author  Christopher Stock
    *   @version 1.0
    *******************************************************************************************************************/
    export class ExampleContent extends React.Component<any, any>
    {
        /***************************************************************************************************************
        *   Being invoked every time this component renders.
        *
        *   @return The rendered JSX.
        ***************************************************************************************************************/
        render() : JSX.Element
        {
            ninjas.Debug.react.log( "ExampleContent.render() being invoked" );

            return <Layout>

                { /* Headline */ }
                <Row>
                    <Col span={ 24 }>
                        <h1>{ "Example Content" }</h1>
                    </Col>
                </Row>

                { /* Horizontal Ruler */ }
                <Row>
                    <Col span={ 24 }>
                        <Divider />
                    </Col>
                </Row>

                { /* Success message */ }
                <Row>
                    <Col lg={ 4 } xs={ 0 } />
                    <Col lg={ 16 } xs={ 24 }>

                        <h2>Data transferred successfully!</h2>
                        <p>
                            Your data has successfully been transferred to FSOS-Europe as an 2048 bit RSA encrypted string.<br />
                            <br />
                            Thank you very much for your confidence!
                        </p>

                    </Col>
                    <Col lg={ 4 } xs={ 0 } />
                </Row>

                { /* Example button / link? */ }
                <Row>
                    <Col lg={ 4 } xs={ 0 } />
                    <Col lg={ 16 } xs={ 24 }>

                        <Tooltip
                            placement="leftBottom"
                            title="Generate and download a new key pair."
                        >
                            <Button
                                type="primary"
                                className="backend"
                                icon="key"
                                loading={ false }
                                onClick={ () => { alert( "Fucker!" ); } }
                                style={ { marginBottom: "35px", } }
                            >
                                Generate new RSA 2048 bit key pair
                            </Button>
                        </Tooltip>

                    </Col>
                    <Col lg={ 4 } xs={ 0 } />
                </Row>

            </Layout>;
        }
    }
