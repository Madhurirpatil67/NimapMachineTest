import React,{Component} from "react";
import Dropdowns from "../home/dropdowns";

class Home extends Component{
    render(){
        return(
            <div className="container" style={{marginTop:50}}>
                <div className="row">
                   <div className="col-md-12 col-sm-12 col-xl-12 col-lg-12">
                     <Dropdowns/>
                   </div>
                </div>
            </div>
        );
    }
};
export default Home;