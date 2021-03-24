import { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router";
import { Spinner } from 'reactstrap';

class DeclineCause extends Component{
    constructor(props){
        super(props);
        this.state={
            redirect: false,
        }
    }
    componentDidMount(){
        let id = this.props.match.params.cid;
        axios.post('/rcauses/', {'id': id, 'accept': false})
        .then(res=>{
            console.log('declined');
            this.setState({ redirect: true })
        })
        .catch(err=>(console.log(err)));
    }
    render(){
        return(
            <div className="centera">
                <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
                {
                    this.state.redirect && (
                        <Redirect push to="/requests"></Redirect>
                    )
                }
            </div>
        );
    }
}

export default DeclineCause;