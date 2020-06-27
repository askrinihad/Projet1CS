import React from 'react';
import axios from 'axios';
import '../assets/css/formulaire.css'

 
 
 
 
class Form1 extends React.Component {

    
  constructor(props) {
    super(props); 
    this.state = {
       NSS: 0,
       NI: 0,
       nom :"",
       prenom :"",    
       nom_pendiment :"",
       lieu_naissance :"",
       date_naissance :"",
       Date_debut_Contamination :"",
       sexe :"",
       adresse :"",
       wilaya : "Blida" ,
       hopital : "Frantz Fanon",
       Situation_actuelle  :"",
       cas_contamine : false,
       cas_mort : false ,
       cas_cava : false
    };

  }
            
/////////////////////////////////////////////////////////////
    
/////////////////////////////////////////////////////////////
changer = (event) => {
 this.setState({ [event.target.name] : event.target.value  });

                        };
/////////////////////////////////////
onRadioChange = (e) => {
  this.setState({
    sexe: e.target.value
  });
}
////////////////////////////////////
 ajouter1= event => {
 try {
          
  const newcas_epi ={
     NSS  : this.state.NSS ,
     NI  : this.state.NI ,
     nom : this.state.nom ,
     prenom: this.state.prenom ,
     
     nom_pendiment : this.state.nom_pendiment ,
     lieu_naissance : this.state.lieu_naissance ,
     date_naissance : this.state.date_naissance,       
     
     sexe : this.state.sexe ,
     adresse : this.state.adresse ,
     Date_debut_Contamination : this.state.date_naissance.Date_debut_Contamination,                          
    
     wilaya : this.state.wilaya ,
     hopital : this.state.hopital,
     Situation_actuelle : this.state.Situation_actuelle ,
     
     cas_contamine : false,
     cas_mort : false ,
     cas_cava : false

                        } ; 

  if(   newcas_epi.Situation_actuelle === "contamine"      ){        newcas_epi.cas_contamine = true;  };
  if(   newcas_epi.Situation_actuelle === "mort"        ){           newcas_epi.cas_mort = true ;      };
  if(   newcas_epi.Situation_actuelle === "gueri"       ){          newcas_epi.cas_cava =true ;       };


                axios.post("http://localhost:5000/cas_epi/add",{newcas_epi })
                       .then( res => {
                        // ReactDom.render(<EpiDash  />,document.getElementById('root'));

                                 })
                      .catch(function (error) { console.log(error); })

                      } catch (error) {
                               console.log(error); 
                                       }

                                      }
                             








  render(){

    return(
      <div>
      
      <div>
<div >  
<div >
     
     <div className="container">
     
         
     <div class="card card-4">
     <div class="card-body">
         <form   >
         <h2 class="title">L'ajout d'un cas épidémique  </h2>
      
         <div class="col-2">
                  <div class="input-group">
                    <label class="label">Nom</label>
                    <input  type="text" class="input--style-4" name="nom" value={this.state.nom}  onChange={this.changer} />
                  </div>
          </div>
   
          <div class="col-1">
          <div class="input-group">
            <label class="label">Prénom</label>
            <input  type="text" class="input--style-4" name="prenom" value={this.state.prenom}  onChange={this.changer} />
          </div>
         </div>
   
         <div class="col-3">
         <div class="input-group">
           <label class="label">Lieu de naissance</label>
           <input  type="text" class="input--style-4" name="lieu_naissance" value={this.state.lieu_naissance}  onChange={this.changer}/>
         </div>
        </div>
   
        <div class="col-4">
        <div class="input-group">
          <label class="label">Date de naissance</label>
          <div class="input-group-icon">
          <input class="input--style-4 js-datepicker" type="date" name="date_naissance" value={this.state.date_naissance}  onChange={this.changer}  ></input>
          <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
          </div>
        </div>
        </div>
   
        <div class="col-5">
        <div class="input-group">
        <label class="label">Sexe</label>
           <div class="p-t-10">
           <label class="radio-container m-r-45">Masculin
                                      <input type="radio"   checked={this.state.sexe=== "homme"} value="homme" onChange={this.onRadioChange}></input>
                                      <span class="checkmark"></span>
                                  </label>
                                  <label class="radio-container">Féminin
                                      <input type="radio" checked={this.state.sexe=== "femme"} value="femme"  onChange={this.onRadioChange}></input>
                                      <span class="checkmark"></span>
                                  </label>
           </div>
        </div>
        </div>
   
        <div class="col-6">
        <div class="input-group">
          <label class="label">Adresse</label>
          <input  type="text" class="input--style-4" name="adresse" value={this.state.adresse}  onChange={this.changer} />
        </div>
       </div>
   
       <div class="col-7">
       <div class="input-group">
         <label class="label">NSS</label>
         <input  type="number" class="input--style-4" name="NSS" value={this.state.NSS}  onChange={this.changer}  />
       </div>
      </div>
   
      <div class="col-8">
       <div class="input-group">
         <label class="label">Numero d'identité</label>
         <input  type="text" class="input--style-4" name="NI" value={this.state.NI}  onChange={this.changer} />
       </div>
      </div>
   
      <div class="col-20">
      <div class="input-group">
      <label class="label">Nom de l'épidémie</label>
      <input  type="text" class="input--style-4" name="nom_pendiment" value={this.state.nom_pendiment}  onChange={this.changer} />
    </div>
         </div>
   
         <div class="col-11">
      <div class="input-group">
        <label class="label">Date d'admission</label>
        <div class="input-group-icon">
        <input class="input--style-4 js-datepicker" type="date"  name="Date_debut_Contamination" value={this.state.Date_debut_Contamination}  onChange={this.changer}  ></input>
        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
        </div>
      </div>
      </div>
   
      <div class="col-21">
      <div class="input-group">
             <label class="label">Situation actuelle</label>
             
                 <select  class="input--style-4" name="Situation_actuelle" value={this.state.Situation_actuelle}  onChange={this.changer}>
                     <option disabled="disabled" selected="selected">Choisissez une option</option>
                     <option value="mort">mort</option>
                     <option value="contamine">contaminé</option>
                     <option value="gueri">guéri</option>
                 </select>
                
         </div>
      </div>
         
            


             
             


            
<button type="button" className="boutton-style5" data-toggle="modal" data-target="#exampleModal">
Ajouter
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<h5 className="modal-title" id="exampleModalLabel"> Confirmation d'ajout</h5>
<button type="button" className="close" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>

<div className="modal-footer">
<button type="button" className="btn btn-secondary" data-dismiss="modal">Retour au formulaire</button>
<button  onClick={this.ajouter1} type="submit" className="btn btn-sauv">Sauvgarder</button>
</div>
</div>
</div>
</div>





</form>


























</div>
</div></div>
     </div>
 </div>

</div>
</div>
    

    )
             
           }
}
export default Form1;

