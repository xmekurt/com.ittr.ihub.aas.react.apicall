import React from 'react';
import DataTable from './dataTable';
import axios from 'axios';
import "./home.css"
export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            headings:[],
            rows :[],
        }
        var returnJson = this.loginPressed(54);
        console.log(returnJson);
    }
    async loginPressed(sayi){
        var data = {"sayi":sayi,"filter":"ProductID"}
        await axios.post(`http://localhost:3001/orde`,data)
      .then(res => {
        console.log(res.data);
        
        this.setState({ rows:res.data.values,headings:res.data.headers });
      })
        
    }
    Pressed(){
      var sayi = document.getElementById("sayi").value
      this.loginPressed(sayi);
    }
    render() {
        return (
          <div>
            <div className="input-group">
                        <label htmlFor="username" className="login-label">ProductID:</label>
                        <input
                        type="text"
                        name="sayi"
                        id="sayi"
                        className="login-input"
                        placeholder="ProductID"/>
                        <button
                        type="button"
                        className="login-btn"
                        onClick={()=>{this.Pressed()}}>Get</button>
              </div>

              <div className="box2"><DataTable headings={this.state.headings} rows={this.state.rows} /></div>
          </div>
        );
      }
}
