import axios from "axios";
import React, { Component } from "react";
import {Form, FormGroup, Input, Button, Container, Row, Col, Spinner} from 'reactstrap';
import { Redirect } from "react-router";

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            uname : '',
            pwd: '',
            logging: false,
            failed: false,
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        const target = e.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });

    }

    handleSubmit(e){

        this.setState({
          logging: true,
        });

        axios.post('/ruser/', {'uname': this.state.uname, 'pwd': this.state.pwd })
        .then( res => {
            localStorage.setItem('authenticated', 'true');
            this.setState({
                uname: '',
                pwd: '',
                redirect: true
            });
            console.log(localStorage.getItem('authenticated'));
        })
        .catch((err) => {
            this.setState({
                failed: true,
                logging: false
            });
            console.log(err)
        });

    }
    render(){
        return(
            <Container className="min-height">
                <Row>
                    <Col lg={12} className="margint marginb centera">
                        <h3>Login</h3>
                        {
                        this.state.logging && (
                            <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                        )
                        }
                        {
                        this.state.redirect && (
                            <Redirect to='/home'></Redirect>
                        )
                        }
                        {
                        this.state.failed && (
                            <div className="error-msg">
                                <p>*Invalid credentials!</p>
                            </div>
                        )
                        }
                    </Col>
                </Row>
                <Row>
                    <Col lg={{size: 4, offset: 4}}>
                        <Form>
                            <FormGroup row>
                                <Input type="text" name="uname" value={this.state.uname} id="unameip" onChange={this.handleChange} placeholder="Username" />
                            </FormGroup>
                            <FormGroup row>
                                <Input type="password" name="pwd" value={this.state.pwd} id="passwordip" onChange={this.handleChange} placeholder="Password" />
                            </FormGroup>
                            <FormGroup>
                                <center><Button onClick={this.handleSubmit}  style={{backgroundImage: "linear-gradient(to right, #ff5c33, #ffa64d)", color: "black"}} >Login</Button></center>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;