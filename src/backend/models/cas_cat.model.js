const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cas_catSchema = new Schema(
  {
        
    id : Number,///champ 1
    NSS : Number,  ///champ 2
    NI : Number,  ///champ 2

    nom:{      ///champ 3
        type : String, 
        required : true
        },
    prenom :{///champ 4
        type : String, 
        required : true
        },
        
    date_naissance :{///champ 5
            type : Date, 
            required : true
            }, 
    lieu_naissance :{///champ 6
        type : String, 
        required : true
        },
    sexe : {///champ 7
        type : String, 
        required : true
        },
    adresse :{///champ 8
        type : String, 
        required : true
        }, 
    nom_catastrophe :{///champ 9
            type : String, 
            required : true
            }, 
     wilaya : {///champ 10
        type : String, 
        required : true
        }, 
     hopital : {///champ 11
        type : String, 
        required : true
        },

     Situation_actuelle : {///champ 12
            type : String, 
            required : true
            },

     Date_debut_blessure :   Date,    ///champ 13
     Date_fin_traitment  : Date,  ///champ 14  
     ////champ 15    ///  cas_blesse   cas_mort    cas_cava   : pour les statistiques
     cas_blesse : {
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

const cas_cat = mongoose.model('cas_cat', cas_catSchema);

module.exports = cas_cat;

