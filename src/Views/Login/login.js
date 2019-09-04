import React, {Component} from "react"
import request from 'request';
import './login.css';
import {withRouter} from 'react-router-dom'
class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {};
    }
    async loginPressed(){
        var username1 = document.getElementById("username").value
        var password2 = document.getElementById("password1").value
        console.log(username1,password2);
        const data= { username: username1, password: password2 }
        var options = { method: 'POST',
        url: 'http://localhost:3001/login',
        headers: 
        {   'Accept': 'application/json',
            'Content-Type': 'application/json' },
        body: {data},
        json: true };
        
        request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
            
            this.props.history.push('/home');
        
        });
    }
    render(){
        
        return( 
            <div className="inner-container">
                <div className="header">
                Login Screen
                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username" className="login-label">Username:</label>
                        <input
                        type="text"
                        name="username"
                        id="username"
                        className="login-input"
                        placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="login-label">Password:</label>
                        <input
                        type="password"
                        name="password"
                        id="password1"
                        className="login-input"
                        placeholder="Password"/>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={()=>{this.loginPressed()}}>Login</button>
                </div>
            </div>
        )
    } 

}
export default withRouter(Login)