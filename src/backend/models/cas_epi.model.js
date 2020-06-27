const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cas_epiSchema = new Schema(
  {
          /// y a 16 chapms 
    id : Number,
    NSS : Number,
    NI : Number,  ///champ 2

    nom:{
        type : String, 
        required : true
        },
    prenom : {
        type : String, 
        required : true
        },
        
    date_naissance :{
            type : Date, 
            default : Date.now
            }, 
     nom_pendiment :{
                type : String, 
                required : true
                }, 
    lieu_naissance :{
        type : String, 
        required : true
        },
    sexe : {
        type : String, 
        required : true
        },
    adresse :{
        type : String, 
        required : true
        }, 
     wilaya : {
        type : String, 
        required : true
        }, 
     hopital : {
        type : String, 
        required : true
        },
        
     Situation_actuelle : {
            type : String, 
            required : true
            },
    Date_debut_Contamination : {
        type : Date, 
        default : Date.now
        },
    Date_fin_traitment  : {
        type : Date,
        default : Date.now
 
        },
///champ 15 ///cas_contamine cas_mort    cas_cava   : pour les statistiques 
     cas_contamine : {
      type : Boolean, 
      required : false
      },
     cas_mort :  { ///champ 16  
          type : Boolean, 
          required : false
          },
     cas_cava :  {   ///champ 17
              type : Boolean, 
              required : false
              },

    
    
    
  });

const cas_epi = mongoose.model('cas_epi', cas_epiSchema);

module.exports = cas_epi;

