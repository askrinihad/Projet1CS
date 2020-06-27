import React from 'react';
 import ReactDom from 'react-dom';
 import axios from 'axios';
 import Item2 from './Item2';
 import '../assets/css/listpend.css'


 
class Listcat extends React.Component {

   
  constructor(props) {
    super(props);
    this.state = {
            Liste_Cat: [],
            serchbar : "",
            wilaya : "Blida" ,
            hopital : "Frantz Fanon",
          };
          this.handleChange = this.handleChange.bind(this);


   }


  ///////////////////////////////////////////////////////////////////////////////////////////////////
          getlist(){
                
                const list=[];

                axios.get('http://localhost:5000/cas_cat/')
                             .then( cas_cats => {
 
                               cas_cats.data.map(cas=>{
                                if ( cas.hopital === "Frantz Fanon" ) {
                                  list.push(cas)
                                    };
                                            });
                       
                          this.setState({ Liste_Cat : list})  ;
 
 
                            })
                              .catch(function (error) { console.log(error); })

  } 
///////////////////////////////////////////////////////////////////////////////////////////////////

  componentDidMount(){
          this.getlist();
                        }     
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

chercher (){
  
         const list = [...this.state.Liste_Cat];
          const list2=[];
           list.map(
             cas =>{
                      if( (cas.nom === this.state.serchbar)
                        || (cas.prenom === this.state.serchbar)
                        || (cas.nom_catastrophe === this.state.serchbar)
                        ||( cas.sexe === this.state.serchbar)
                        ||( cas.adresse === this.state.serchbar)
                        
                        ){                           
                            list2.push(cas);
                          }
                      
                    }
                   );
                      this.setState({Liste_Cat : list2})

                  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////
handleChange = event => {
        this.setState({ serchbar: event.target.value });

               };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_mort= event => {
         this.setState({categorie : " Mort "});
      const list = [...this.state.Liste_Cat];
        const list2=[];
        list.map(
        cas =>{         
             if( cas.Situation_actuelle === "mort"){ 
                   list2.push(cas); 
               }
             }
          );
             
             this.setState({Liste_Cat : list2});
             
         
         };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_blesse= event => {
  this.setState({categorie : " blessé "});
  const list = [...this.state.Liste_Cat];
  const list2=[];
  list.map(
  cas =>{
       if( cas.Situation_actuelle === "blesse"){ 
             list2.push(cas); 
         }
       }
    );
       this.setState({Liste_Cat : list2})
   
         };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        

afficher_disparu= event => {
  this.setState({categorie : "disparu "});

  const list = [...this.state.Liste_Cat];
  const list2=[];
  list.map(
  cas =>{
       if( cas.Situation_actuelle === "disparu"){ 
             list2.push(cas); 
         }
       }
    );
       this.setState({Liste_Cat : list2})
   
         };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







 
  render(){

    return(
          
      <div className="tout">   
      <div className="row pl-5">    
      {/* Barre de recherche */}
          <div  id="searchBar2">
            <input onChange={this.handleChange} className="input-style" type="text" placeholder="Rechercher un cas catastrophique" aria-label="Search"></input>
          </div>
      {/* valider la crecherche*/}
         <div className="mt-5 ml-auto col-lg-4" id="searchBar2">
           <button onClick={()=> this.chercher()}  className="boutton-style1"> Rechercher </button>
          </div>
      </div>  
      <div >
          <button onClick={()=> this.getlist()}  className="boutton-style"> Toute La liste </button>
          <button onClick={()=> this.afficher_mort()}  class="boutton-style"> morts </button>
          <button onClick={()=> this.afficher_blesse()}  class="boutton-style"> blessés </button>
          <button onClick={()=> this.afficher_disparu()} class="boutton-style"> Disparus  </button>
       </div>   
       <div id="liste_malade" >
                  
                  <div class="table1">
                  <table className=" table">                          
                  <thead>
                  <tr>
                  <th scope="col">NSS</th>
                  <th scope="col">Num Iden</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Prénom</th>
                   <th scope="col">sexe</th>
                  <th scope="col">adresse</th>
                  <th scope="col">lieu_naissance</th>
                  <th scope="col">nom_catastrophe</th>
                  <th scope="col">Etat actulle</th>
                 </tr>
                 </thead>
                 <tbody >
                 {  
                  this.state.Liste_Cat.map(cas => {
                     
                      return <Item2 key={cas.nom} item={cas} /> 
                      
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
export default Listcat;

