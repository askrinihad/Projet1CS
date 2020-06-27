import React from 'react';

 import axios from 'axios';
 import Item1 from './Item1';
 import '../assets/css/listpend.css'


 
class Listepi extends React.Component {

   
  constructor(props) {
    super(props);
    this.state = {
          Liste_Epi: [],
          serchbar : "",
           wilaya : "Blida" ,
          hopital : "Frantz Fanon",
     };
    this.handleChange = this.handleChange.bind(this);
 
  }
         
  ///////////////////////////////////////////////////////////////////////////////////////////////////
          getlist(){

            const list=[];

               axios.get('http://localhost:5000/cas_epi/')
                            .then( cas_epis => {
                               cas_epis.data.map(cas=>{
                                      if ( cas.hopital === "Frantz Fanon") {
                                               
                                            list.push(cas)
                                         };
                                                 });
                            
                               this.setState({ Liste_Epi : list})  ; 

                            
                                })//AXIOS CATCH 
                             .catch(function (error) { console.log(error); })
                              
                            }
///////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount(){
       this.getlist();
                        }     
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

chercher (){
         const list = [...this.state.Liste_Epi];
          const list2=[];
           list.map(
             cas =>{
                      if( (cas.nom === this.state.serchbar)
                        || (cas.prenom === this.state.serchbar)
                        || (cas.nom_pendiment === this.state.serchbar)
                        ||( cas.sexe === this.state.serchbar)
                        ||( cas.adresse === this.state.serchbar)
                        ){    
                           list2.push(cas);    
                        }
                      
                    }
                   );
                      this.setState({Liste_Epi : list2})

                  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
handleChange = event => {
        this.setState({ serchbar: event.target.value });

               }; 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_mort= event => {
    this.setState({categorie : " Mort "});
  

  const list = [...this.state.Liste_Epi];
        const list2=[];
        list.map(
        cas =>{
             if( cas.Situation_actuelle === "mort"){ 
                   list2.push(cas); 
               }
             }
          );
             this.setState({Liste_Epi : list2})
         
         };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_conta= event => {
  this.setState({categorie : " contaminé "});
 

  const list = [...this.state.Liste_Epi];
  const list2=[];
  list.map(
  cas =>{
      if( cas.Situation_actuelle === "contamine"){ 
             list2.push(cas); 
         }
       }
    );
       this.setState({Liste_Epi : list2})
   
         };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_cava= event => {
  this.setState({categorie : "Gueri "});
     
  const list = [...this.state.Liste_Epi];
  const list2=[];
  list.map(
  cas =>{
       if( cas.Situation_actuelle === "gueri"){ 
             list2.push(cas); 
         } 
       }
    );
       this.setState({Liste_Epi : list2})
   
         };


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

render(){

    return(
      <div className="tout">   
      <div className="row pl-5">    
      {/* Barre de recherche */}
          <div  id="searchBar2">
            <input onChange={this.handleChange} className="input-style" type="text" placeholder="Rechercher un cas pandimique" aria-label="Search"></input>
          </div>
      {/* valider la crecherche*/}
         <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
           <button onClick={()=> this.chercher()}  className="boutton-style1"> Rechercher </button>
          </div>
      </div>  
      <div >
          <button onClick={()=> this.getlist()}  className="boutton-style"> Toute La liste </button>
          <button onClick={()=> this.afficher_mort()}  class="boutton-style"> mort </button>
          <button onClick={()=> this.afficher_conta()} class="boutton-style"> contaminé </button>
          <button onClick={()=> this.afficher_cava()}  class="boutton-style"> Guéri  </button>
       </div>   
       <div id="liste_malade" >
                  
                  <div class="table1">
                  <table className=" table">                          
                  <thead>
                  <tr>
                  <th scope="col">NSS</th>
                  <th scope="col">Num ident</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prénom</th>
                   <th scope="col">sexe</th>
                  <th scope="col">adresse</th>
                  <th scope="col">lieu_naissance</th>
                  <th scope="col">nom_Pandémie</th>
                  <th scope="col">Etat actuel</th>
                 </tr>
                 </thead>
                 <tbody >
                 {  
                  this.state.Liste_Epi.map(cas => {
                     
                      return <Item1 key={cas.nom} item={cas} /> 
                      
                                             } )   
                    
                    }     
                </tbody>                              

      </table>
                  </div>
                  
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

       </div>


    )
             
           }
}
export default Listepi;

