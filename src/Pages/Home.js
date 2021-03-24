import React from 'react';
import { Col, Container, Row } from 'reactstrap';

function Home(){
    return(
        <Container className="min-height">
            <Row>
                <Col lg={{offset: 2}} className="margint marginb">
                    <h3>This is the admin site for <a href="http://127.0.0.1:8000" target="_blank" rel="noreferrer">CHARITY</a> application</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;