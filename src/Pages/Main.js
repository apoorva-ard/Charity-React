import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Messages from './Messages';
import Home from './Home';
import FundRaise from './FundRaise';
import NavBarC from '../Components/NavBar';
import AcceptCause from '../Components/AcceptCause';
import DeclineCause from '../Components/DeclineCause';
import ReadMessage from '../Components/ReadMessage';
import Login from './Login';
import Logout from './Logout';
import Footer from '../Components/Footer';


class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            authenticated: true,
        }
    }
    render(){
        return(
            <div className="app-content">
                <NavBarC auth={this.state.authenticated}/>
                <Route path="/" exact component={()=> <Home/>}/>
                <Route path="/home" exact component={()=> <Home/>}/>
                <Route path="/login" exact component={()=> <Login/>}/>
                <Route path="/messages" exact component={()=> <Messages  authenticated={this.state.authenticated}/>}/>
                <Route path="/requests" exact component={()=> <FundRaise  authenticated={this.state.authenticated}/>}/>
                <Route path="/logout"  exact component={()=> <Logout />}/>
                <Route path="/accept/:cid" component={AcceptCause}/>
                <Route path="/decline/:cid" component={DeclineCause}/>
                <Route path="/read/:cid" component={ReadMessage}/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Main);