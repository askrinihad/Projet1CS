import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Choice from './Choice';
import logo from '../assets/images/Logo_App.png';
import { BrowserRouter as Router ,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faLock} from '@fortawesome/free-solid-svg-icons'
library.add (faUser, faLock);


 

class Login extends React.Component {

   
   state = { 
       my_comptes :[],
       email_tapped :" ",
       password_tapped :" ",
         }
///////////////////  ////////////////////////////////////////////////////////////
componentDidMount(){
    axios.get('http://localhost:5000/compte/')
                .then( comptes => {
                       this.setState({ my_comptes : comptes.data })   
                   })
                .catch(function (error) { console.log(error);})
}     
///////////////////////////////////////////////////////////////////////////////

           login=(email,pswd) => {
               
           const comptes = [...this.state.my_comptes];
           comptes.map(compte =>{  
                   
           if(compte.mail === email && compte.password === pswd)
           {
           if (compte.Type ==="EP") {
            ReactDom.render(<Choice my_compte ={compte}  />,document.getElementById('root'));
               // this.props.history.push('/Choix_page');
               } 
           
           else{
               console.log("pas de login "); 
           }                    
           }
                           })}  ;
///////////////////////////////////////////////////////////////////////////////
handleChange1 = event => {
   event.preventDefault();

   this.setState({ email_tapped: event.currentTarget.value });

                         };
handleChange2 = event => {
   event.preventDefault();

    this.setState({ password_tapped: event.currentTarget.value });
                           };
handleSubmit = event => {
              event.preventDefault();
  this.login(this.state.email_tapped,this.state.password_tapped);
                };
render() { 
return  (     
   <Router>
      
<div className="auth">
  
         <div className="loginBox" > 
         
             <img src={logo} alt="Logo" className="lo"/>

              <h1>BINEVENUE</h1>
                         
               
                <div className="textbox " data-validate = "Enter username" >
                <div><FontAwesomeIcon icon={faUser} /></div>
                <input  onChange={this.handleChange1} type="email" className="form-control" id="emailInput" placeholder="Adresse mail"></input>
                </div>
               
                <div className="textbox" data-validate = "Enter Password">
                <div><FontAwesomeIcon icon={faLock} /></div>
                <input  onChange={this.handleChange2} type="password" className="form-control" id="passwordInput" placeholder="Password"></input>                 
                </div>
               
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary text-uppercase">Se connecter </button>
            
       
         </div> 
   </div>
      
               </Router>
           );
}




}
export default Login;

