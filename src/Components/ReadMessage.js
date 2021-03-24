import { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router";

class ReadMessage extends Component{
    constructor(props){
        super(props);
        this.state={
            redirect: false,
        }
    }
    componentDidMount(){
        let id = this.props.match.params.cid;
        axios.post('/rcontact/', {'id': id})
        .then(res=>{
            console.log('read');
            this.setState({ redirect: true })
        })
        .catch(err=>(console.log(err)));
    }
    render(){
        return(
            <div>
            {
                this.state.redirect && (
                    <Redirect push to="/messages"></Redirect>
                )
            }
            </div>
        );
    }
}

export default ReadMessage;