import React, { Component } from 'react';



export default class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


render(){
    return (

        <div>
            <input type='text' onChange = {(event,newValue) => this.setState({username:newValue})}> </input>
        </div>
    )


}
}
