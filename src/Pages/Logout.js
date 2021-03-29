import React, { Component } from "react";
import { Redirect } from "react-router";

class Logout extends Component{
    componentDidMount(){
        localStorage.setItem('authenticated', 'false');
    }
    render(){
        return(
            <div>
                <Redirect push to="/"></Redirect>
            </div>
        );
    }
}

export default Logout;