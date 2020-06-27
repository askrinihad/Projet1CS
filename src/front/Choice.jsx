import React from 'react';
 import ReactDom from 'react-dom';
 import EpiD from './EpiD';
 import CatD from './CatD';
 import { BrowserRouter as Router ,Link } from 'react-router-dom';
 import '../assets/css/choix.css'
import cat from '../assets/images/cata.PNG'
import epi from '../assets/images/epidemic.PNG'


 
class Choice extends React.Component {

    

////////////////////////////////////////////////////////
  dasher1 = event => {
    event.preventDefault();
             ReactDom.render(<EpiD  my_compte ={this.props.my_compte} to="/Choice/EpiD" />,document.getElementById('root'));   
            };
////////////////////////////////////////////////////////
   dasher2 = event => {
      event.preventDefault();
                ReactDom.render(<CatD my_compte={this.props.my_compte} to="/Choice/CatD" />,document.getElementById('root'));
  
                            };
  
////////////////////////////////////////////////////////  





 ////////////////////////////////////////////////////////
  render(){

    return(
              <div>
                 <Router>

                 <div class="page_choix">
                 <div class="choix_api">
                  <img src={epi} class="img_epi"></img>
                  <h1>Epidémie</h1>
                  <p id="p1">Visualiser les listes des cas contaminés, mort et guéris.</p>
                  <p id="p2">Ajouter des nouveaux cas.</p>
                  <button onClick={this.dasher1} className="boutton-style6"> 
                  <Link  id="lk" to="/Choice/EpiD"  my_compte ={this.props.my_compte}>  Démarer   </Link>
                  </button>
                  </div>
                 <div class="choix_cat">
                 <img src={cat} class="img_cat"></img>
                 <h1>catastrophe naturelle</h1>
                 <p id="p3">Visualiser les listes des cas blessés, mort et perdus.</p>
                  <p id="p4">Ajouter des nouveaux cas.</p>
                  <button  onClick={this.dasher2} className="boutton-style7"> 
                  <Link id="lk" to="/Choice/CatD" my_compte ={this.props.my_compte} >  Démarer    </Link>
                  </button>
                 </div>
               </div>

                </Router>
             </div>

    )
             
           }


////////////////////////////////////////////////////////
}
export default Choice;

