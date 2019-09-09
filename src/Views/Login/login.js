import React, {Component} from "react"
import './login.css';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
class Login extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            body:"",
        };
    }
    async loginPressed(){
        var username1 = document.getElementById("username").value
        var password2 = document.getElementById("password1").value
        console.log(username1,password2);
        const data= { username: username1, password: password2 }
       await axios.post(`http://localhost:3001/login`, { data })
      .then(res => {
        console.log(res);
        console.log('AXİOS İÇİ'+res.data);
        this.state.body = res.data
      })
      if(this.state.body===true)
        this.props.history.push('/home');
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
                        onClick={()=>{this.loginPressed()}}
                        >
                        Login
                    </button>
                </div>
            </div>
        )
    } 

}
export default withRouter(Login)