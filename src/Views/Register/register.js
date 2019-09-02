import React,{Component} from "react";
import "./register.css"

export default class Register extends Component{

    constructor(props){
        super(props);
        this.state={}
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
                        name="username"
                        className="login-input"
                        placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="login-label">Password:</label>
                        <input
                        type="password"
                        name="password"
                        className="login-input"
                        placeholder="Password"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password" className="login-label">Re-Password:</label>
                        <input
                        type="password"
                        name="password"
                        className="login-input"
                        placeholder="Password"/>
                    </div>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={()=>{console.log("Pressed")}}>Register</button>
                </div>
            </div>




        )
    }



}