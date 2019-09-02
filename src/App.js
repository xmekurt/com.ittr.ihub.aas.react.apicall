import React from 'react';
import './App.css';
import Login from "./Views/Login/login";
import Register from "./Views/Register/register";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLoginOpen:true,
      isRegisterOpen:false,

    };
  }
  render() {
  return (
    <div className="root-container">
      <div className="box-controller">
       <div
         className={"controller " + (this.state.isLoginOpen
         ? "selected-controller"
         : "")}
         onClick={()=>{this.setState({isLoginOpen:true,isRegisterOpen:false})}}>
         Login
       </div>
       <div
         className={"controller " + (this.state.isRegisterOpen
         ? "selected-controller"
         : "")}
         onClick={()=>{this.setState({isLoginOpen:false,isRegisterOpen:true})}}>
         Register
       </div>
      </div>
      <div className="box-container">
      {this.state.isLoginOpen && <Login />}
      {this.state.isRegisterOpen && <Register />}
      </div>
    </div>
  )
  }
}

export default App;
