import React from 'react';
 import ReactDom from 'react-dom';
 import { BrowserRouter as Router ,Link } from 'react-router-dom';

 import EpiD from './EpiD';
 import Listcat from './Listcat'; 
 import Form2 from './Form2';
 import logo from '../assets/images/Logo_App.png';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { library } from '@fortawesome/fontawesome-svg-core'
 import { faPlus, faBars, faTable} from '@fortawesome/free-solid-svg-icons'
 library.add (faPlus, faBars , faTable);
 
 

 
class CatD extends React.Component {
     
  

  constructor(props) {
    super(props); 
    this.state = {
    
        wilaya : "Blida" ,
        hopital : "Frantz Fanon",
    
      
    };

  }
///////////////////  ////////////////////////////////////////////////////////////
      componentDidMount(){
        this.state.compte = this.props.my_compte;
      }   
    //////////////////////////////////////////////////////////////////////////////////
  dasher = event => {
    event.preventDefault();
    //window.location.href = "/Choice/EpiD";
      ReactDom.render(<EpiD   />,document.getElementById('root'));
      //window.location.replace("/Choice/EpiD");


                          };
   ////////////////////////////////////////////////////////////////////////////////// 
 
  render(){

    return(
      <Router>
<div className="containerForm1"> 
       <div className="bar">
           <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
             <h1>Bienvenue</h1>
            <div class="container">
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                     <li class="nav-item active">
                       <a class="nav-link " onClick={this.dasher} >Pandémie </a>
                      
                     </li>
                     <li class="nav-item">
                       <a class="nav-link active " >Catastrophe naturelle</a>
                       <span class="sr-only">(current)</span>
                     </li>
                 </ul>
              </div>
            </div>     
          </nav>
        </div>
               
       
      <div className="row">
            <div className="col-3">
                <div class="sidebar">
                   <div className="nav flex-column nav-pills" id="v-pills-EP" role="tablist" aria-orientation="vertical">
                      <img src={logo} alt="Logo" className="logo"/>
                      <a className="nav-link active" id="v-pills-pendimi-tab" data-toggle="pill" href="#v-pills-pendimi" role="tab" aria-controls="v-pills-pendimi" aria-selected="true"> <FontAwesomeIcon icon={faTable}  /> <span>  Consulter cas</span> </a>
                      <a className= "nav-link" id="v-pills-catastrphe-tab" data-toggle="pill" href="#v-pills-catastrphe" role="tab" aria-controls="v-pills-catastrphe" aria-selected="false"> <FontAwesomeIcon icon={faPlus} /> <span>  Ajouter Cas</span> </a>
                  </div>
                </div>
            </div>
            <div className="col-9">
              <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-pendimi" role="tabpanel" aria-labelledby="v-pills-pendimi-tab">
                      <div>  <Listcat   />     </div>    
                                 
                                  
                  </div> 

                  <div className="tab-pane fade show" id="v-pills-catastrphe" role="tabpanel" aria-labelledby="v-pills-catastrphe-tab"> 
                    <div> <Form2 /> </div>
                                   
                  </div>
         
      
              </div>
            </div>
      </div>
      

       </div>      
      </Router>
    )
             
           }
}
export default CatD;

