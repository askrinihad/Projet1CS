const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const compteSchema = new Schema(   //////Schema du compte (etablisement hospitalisé /)
  {
    id : Number,
    nom:{
        type : String, 
        required : true
        },
    prenom:{
        type : String, 
        required : true
        },
   Type :{
       type:String,
   required : true
        },
    mail :{
        type : String, 
        required : true
        },
    password :{
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
     nom_etablisement : {
        type : String, 
        required : true
        },
     Poste_travail : {
        type : String, 
        required : true
        },

     annee_recrutement : {
        type : Number, 
        required : true
        },
     date_naissance :{
        type : Date, 
        required : true
        }, 
    
  });

const compte = mongoose.model('compte', compteSchema);

module.exports = compte;