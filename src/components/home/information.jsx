import React,{Component} from "react";

class Information extends Component{
     constructor(props)
      {
            super(props);
            this.state={
                        symtms:"Symptoms",
                        cause:"Causes",
                        prevent:"Prevention"
                        }
      };
    render(){
        let val=this.props.selVal;
        if(val===this.state.symtms){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12" style={{marginTop:20}}>
                        <h3>Symptoms</h3>  
                         Signs and symptoms of COVID-19 may appear two to 14 days after exposure and can include:
                         <ul>
                            <li>Fewer</li>
                            <li>Cold</li>
                            <li>Cough</li>
                        </ul>
                        </div>
                    </div>
                </div>
               );
           }
           else if(val===this.state.cause){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12" style={{marginTop:20}}>
                        <h3>Causes</h3>  
                            It's unclear exactly how contagious the new coronavirus is. 
                            It appears to spread from person to person among those in close contact. 
                            It may be spread by respiratory droplets released when someone with the virus coughs 
                            or sneezes.
                            It may also be spread if a person touches a surface with the virus on it and
                            then touches his or her mouth, nose or eyes.
                              <h6>Complications can include:</h6>
                              <ul>
                              <li>Pneumonia in both lungs</li>
                              <li>Organ failure in several organs</li>
                              <li>Death</li>
                              </ul>
                        </div>
                    </div>
                </div>
               );
           }
           else if(val===this.state.prevent){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12" style={{marginTop:20}}>
                        <h3>Prevention</h3>  
                          Although there is no vaccine available to prevent infection with the new coronavirus, you can take steps to reduce your risk of infection. WHO and CDC recommend following these precautions for avoiding COVID-19:
                          <ul>
                            <li>Avoid large events and mass gatherings.</li>
                            <li>Avoid close contact (about 6 feet) with anyone who is sick or has symptoms.</li>
                            <li>Keep distance between yourself and others if COVID-19 is spreading in your community, especially if you have a higher risk of serious illness.</li>
                            <li>Keep distance between yourself and others if COVID-19 is spreading in your community, especially if you have a higher risk of serious illness.</li>
                            <li>Wash your hands often with soap and water for at least 20 seconds, or use an alcohol-based hand sanitizer that contains at least 60% alcohol.</li>
                            <li>Cover your mouth and nose with your elbow or a tissue when you cough or sneeze. Throw away the used tissue.</li>
                          </ul>
                            Avoid touching your eyes, nose and mouth if your hands aren't clean.
                            Avoid sharing dishes, glasses, bedding and other household items if you're sick.
                            Clean and disinfect surfaces you often touch on a daily basis.
                            Stay home from work, school and public areas if you're sick, unless you're going to get medical care. Avoid taking public transportation if you're sick.                        
                        </div>
                    </div>
                </div>
               );}
           else{
               return ""
               }
       }
};
export default Information; 