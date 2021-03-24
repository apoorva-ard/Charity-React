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

        console.log(this.state);
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
            <Container>
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
                            <Redirect push to='/home'></Redirect>
                        )
                        }
                        {
                        this.state.failed && (
                            <p>Invalid credentials!</p>
                        )
                        }
                    </Col>
                    <Col lg={{span: 4, offset: 5}}>
                        <Form>
                        <FormGroup row>
                            <Input type="text" name="uname" value={this.state.uname} id="unameip" onChange={this.handleChange} placeholder="Username" />
                        </FormGroup>
                        <FormGroup row>
                            <Input type="password" name="pwd" value={this.state.pwd} id="passwordip" onChange={this.handleChange} placeholder="Password" />
                        </FormGroup>
                        <FormGroup>
                            <Button onClick={this.handleSubmit}>Login</Button>
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Login;