import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router";
import { Container, Row, Col, Card, CardText, CardBody, CardLink, CardTitle } from 'reactstrap';
import Moment from 'moment';

class FundRaise extends Component{
    constructor(props){
        super(props);
        this.state = {
            causes : [],
        }
    }
    componentDidMount(){
        let data;
        axios.get('/rcauses')
        .then(res=>{
            data=res.data;
            this.setState({
                causes: data
            })
        })
        .catch(err=>(console.log(err)));
    }
    render(){
        return(
            <Container className="min-height">
                {
                    !this.props.authenticated && (
                        <Redirect push to='login'/>
                    )
                }
                <Row>
                    <Col sm={12} className="margint marginb centera">
                        <h3>Pending FundRaise Requests</h3>
                    </Col>
                    
                    {this.state.causes.map((cause, id)=>(
                        <Col key={id} lg={6}>
                            <Card className="marginb" style={{backgroundColor: "#e6e6e6"}}>
                                <CardBody>
                                <CardTitle tag="h5" className="centera">{cause.title}</CardTitle>
                                <CardText style={{minHeight: "200px"}}>
                                    <p>{cause.description}</p>
                                    <strong>Data Posted: </strong>{Moment(cause.date_posted).format('DD-MM-YYYY')}<br/>
                                        <strong>Date Needed: </strong>{Moment(cause.date_needed).format('DD-MM-YYYY')}<br/>
                                        <strong>Target: </strong>{cause.target}<br/>
                                </CardText>
                                <CardText>
                                    <hr/>
                                    <h6>User details</h6>
                                    <small className="text-muted">
                                        <strong>Username : </strong>{cause.recepient_uname}<br/>
                                        <strong>Name : </strong>{cause.recepient_name}<br/>
                                        <strong>Email : </strong>{cause.recepient_email}<br/>
                                        <strong>Previous FundRaise count : </strong>{cause.recepient_prev_d}<br/>
                                    </small>
                                </CardText>
                                <CardLink href={`/accept/${cause.id}`}>Accept</CardLink>
                                <CardLink href={`/decline/${cause.id}`}>Decline</CardLink>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            
        );
    }
}

export default FundRaise;