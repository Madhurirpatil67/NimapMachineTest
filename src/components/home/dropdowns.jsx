import React,{Component} from "react";
import Information from "./information";

class Dropdowns extends Component{
    constructor() {
        super();
        this.state = {
          selectValue: '' 
        }
      };
    handleOnChange=(e)=> {
        this.setState({selectValue:e.target.value});
      }
      handleFormSubmit=e=>{
        e.preventDefault();
      }
    render(){
        return(
            <div className="container">
            <div className="row">
               <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
               <form onSubmit={this.handleFormSubmit}>
                <select onChange={this.handleOnChange} id="covid"
                 style={{color:"black",fontSize:"18px",fontWeight:"500"}}>
                <option>Select Options</option>
                <option value="Symptoms">COVID Symptoms</option>
                <option value="Causes">COVID Causes</option>
                <option value="Prevention">COVID Prevention</option>
                </select>
                    <Information selVal={this.state.selectValue}/>
                </form>
                   </div>
                </div>
            </div>
        );
    }
};
export default Dropdowns;