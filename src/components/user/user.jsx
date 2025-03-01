import React,{Component} from "react";

class User extends Component{
    constructor(){
        super();
        this.state={
            Password:localStorage.getItem("userPassword"),
            Btntext:true
        }
    };
    changepswd=(e)=>{
        e.preventDefault();
        this.setState({
            Btntext: !this.state.Btntext,Password:""
        });
        if(!this.state.Btntext){
            localStorage.setItem("userPassword",this.state.Password);
            this.setState({
                Password:this.state.Password
            });
            alert("Your Password changed Successfully... ");
        }
    };
    logout=()=>{
     localStorage.setItem("userEmail","");
     localStorage.setItem("userPassword","");
     alert("Logout Successfully");
    };
    render(){
        return(
            <div className="container">
              <div className="row" style={{marginTop:"20px"}}>
              <div className="col-xs-6 col-sm-6 col-md-6">
                  <form>
                       <div className="form-group">
                            <label>UserName :</label>
                            {localStorage.getItem("userEmail")}
                        </div>
                        <div className="form-group">
                        <label>Password :</label>
                            <input type="password" name="Password"  
                            className="form-control input-lg" placeholder="Password"
                            value={this.state.Password}
                            onChange={(e)=>{this.setState({Password:e.target.value})}}
                            />
                        </div>
                        <div className="row" style={{marginTop:100}}>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <button type="submit" className="btn btn-sm btn-success btn-block"
                                onClick={this.changepswd}>
                                     {this.state.Btntext ? 'Change Password' : 'Save Password'}
                                </button>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6">
                                <input type="submit" className="btn btn-sm btn-success btn-block" 
                                 value="Logout"
                                 onClick={()=>this.logout()} />
                            </div>
                        </div>
                     </form>
                  </div>
              </div>
          </div>
        );
    }
};
export default User;