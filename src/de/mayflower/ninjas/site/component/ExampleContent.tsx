
    import * as ninjas from '../../ninjas';
    import { Row, Col, Layout, Divider, Tooltip, Button, Steps } from 'antd';
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

            return <div>




                { /* Step indicator TODO wrap to function! */ }
                <Steps size="small" current={ 2 } status="process">
                    <Steps.Step title="" description="" />
                    <Steps.Step title="" description="" />
                    <Steps.Step title="" description="" />
                    <Steps.Step title="" description="" />
                    <Steps.Step title="" description="" />
                    <Steps.Step title="" description="" />
                </Steps>




                { ninjas.SiteContentFactory.createParagraph( "Bavaria ipsum dolor sit amet Schaung kost nix Xaver, Almrausch. Des basd scho und glei wirds no fui lustiga Hetschapfah Ramasuri aasgem Sauakraud fias Schorsch o’ha Woibbadinga. Sauakraud schaugn i vo de! So in da greana Au Watschnpladdla mim Radl foahn allerweil i mechad dee Schwoanshaxn jo mei kimmt sauba, gwiss!<br><br>Wurschtsolod jo leck mi vui und." ) }
                { ninjas.SiteContentFactory.createParagraph( "Test paragraph 2" ) }





            <Layout>

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
                                onClick={ () => { alert( "Button clicked!" ); } }
                                style={ { marginBottom: "35px", } }
                            >
                                Generate new RSA 2048 bit key pair
                            </Button>
                        </Tooltip>

                    </Col>
                    <Col lg={ 4 } xs={ 0 } />
                </Row>

            </Layout>;

            </div>
        }
    }
