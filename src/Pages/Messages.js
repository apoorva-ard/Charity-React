import axios from "axios";
import React, { Component } from "react";
import emailjs from 'emailjs-com';
import {Form, FormGroup, Label, Input, Button, CardBody, Card, CardText, CardLink, Container, Row, Col, Spinner} from 'reactstrap';

class Messages extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages : [],
            message: '',
            toname: '',
            sending: false,
            failed: false
        }
        this.sendMail = this.sendMail.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            message: e.target.value
        });
        console.log(this.state.message);
    }
    sendMail(val){
        this.setState({
            toname: val,
        });
        let params = {
            to_name: this.state.toname,
            message: this.state.message,
        }
        if(params.message!=='' && params.to_name!==''){
            this.setState({
                sending: true
            });
            emailjs.send(
                'service_cx49uwk',
                'template_pxkmjah',
                params,
                'user_kbMl2kO8pXhC6UuMtR5xS'
            ).then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.setState({
                    sending: false
                });
             }, function(error) {
                console.log('FAILED...', error);
             });
        }
        else{
            console.log("Empty message can't be sent!");
        }
    }
    componentDidMount(){
        let data;
        axios.get('/rcontact')
        .then(res=>{
            data=res.data;
            this.setState({
                messages: data
            })
        })
        .catch(err=>(console.log(err)));
    }
    render(){
        return(
            
            <Container className="min-height">
                <Row>
                    <Col lg={12} className="margint marginb centera">
                        <h3>Messages Received</h3>
                        {
                        this.state.sending && (
                            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                        )
                        }
                        {
                        this.state.failed && (
                            <p>Mail failed to send!</p>
                        )
                        }
                    </Col>
                
                {this.state.messages.map((msg, id)=>(
                    <Col key={id} lg={4}>
                        <Card className="bot-margin" style={{backgroundColor: "#e6e6e6"}}>
                            <CardBody>
                                <CardLink href={`/read/${msg.id}`} className="right-align colorg"><span className="fa fa-envelope-open fa-lg"></span></CardLink>
                                <CardText>
                                    <div style={{minHeight: "200px"}}>
                                        <p><strong>Name: </strong>{msg.name}</p>
                                        <p><strong>Email: </strong> {msg.email}</p>
                                        <p><strong>Subject: </strong>{msg.subject}</p>
                                        <p><strong>Message: </strong>{msg.message}</p>
                                    </div>
                                    <Form>
                                        <Input type="hidden" name="tomail" value={msg.email}/>
                                        <FormGroup>
                                            <Label for="resp">Type your response</Label>
                                            <Input type="textarea" name="message" id="resp" onChange={this.handleChange}/>
                                        </FormGroup>
                                        <Button style={{backgroundImage: "linear-gradient(to right, #ff5c33, #ffa64d)", color: "black"}} onClick={() => this.sendMail(msg.email)}>Send response mail</Button>
                                    </Form>
                                </CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Container>
        );
    }
}

export default Messages;