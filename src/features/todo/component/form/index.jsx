import React, { Component } from 'react';
import validator from 'validator';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.username=='' || this.state.email=='') alert('All fields must be required')
        else if(!validator.isEmail(this.state.email)) alert('Email is invalid')
        else return this.props.isLogin(this.state);
    }
    handleUsername = (event) =>{
        console.log(event.target.value);
        this.setState({username: event.target.value});
    }
    handleEmail = (event) =>{
        console.log(event.target.value);
        this.setState({email: event.target.value});
    }
    render() {
        return (
                <form >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input name="username" type="text" onChange={(event)=>this.handleUsername(event)} value={this.state.username}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input name="email" type="text" onChange={(event)=>this.handleEmail(event)} value={this.state.email}/>
                    </div>
                    <button onClick={(event)=>this.handleSubmit(event)}>Log In</button>
                </form>
        );
    }
}

export default Form;