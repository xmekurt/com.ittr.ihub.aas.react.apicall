import React,{Component} from "react";
import "./register.css"
import request from 'request';

export default class Register extends Component{

    constructor(props){
        super(props);
        this.state={}
    }
    registerPressed(){//send data to server for controll and register.
        var username1 = document.getElementById("username1").value;

        var password1 = document.getElementById("password1").value;
        
        var password2 = document.getElementById("password2").value;
        var data ={ username : username1, password : password1 };
        if(password1 === password2){
            var options = { method: 'POST',
            url: 'http://localhost:3001/register',
            headers: 
            {   'Accept': 'application/json',
                'Content-Type': 'application/json' },
            body: {data},
            json: true };
    
            request(options, function (error, response, body) {
            if (error) throw new Error(error);
    
            console.log(body);
            });
        }else{
            console.log(password1,password2);
        }
        //sending data to server.
    }
    render(){
        return(
            <div className="inner-container">
                <div className="header">
                Register Screen
                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username" className="login-label">Username:</label>
                        <input
                        type="text"
                        id="username1"
                        name="username2"
                        className="login-input"
                        placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="login-label">Password:</label>
                        <input
                        type="password"
                        name="password1"
                        id="password1"
                        className="login-input"
                        placeholder="Password"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="login-label">Re-Password:</label>
                        <input
                        type="password"
                        name="password2"
                        id="password2"
                        className="login-input"
                        placeholder="Password"/>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={()=>{this.registerPressed();}}>Register</button>
                </div>
            </div>




        )
    }



}