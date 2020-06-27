const router = require('express').Router();
const express =require('express');


let cas_epi = require('../models/cas_epi.model');



///////////////////////  get la liste des cas dans le cas d'une epidemé
router.route('/').get((req, res) => {
  
   cas_epi.find({}).then(cas_epis =>
        {
          res.json(cas_epis)
        }
       )
    .catch(err =>
         res.status(400).json(
             'Error: la list des cas dans le cas dune epidemé pas disponible +++++' + err));
                                    });
//////////////////////// rechercher un cas dans le cas d'une epidemie
router.route('/:id').get((req, res) => {
  
  cas_epi.findById(req.params.id)
  .then(cas_epi => res.json(cas_epi))
  .catch(err => 
    res.status(400).json('Error: la recherche du cas epidemique nest pas effectuée :(' + err));
                                  });
//////////////////////// Ajouter un cas dans le cas d'une epidemie
router.route('/add').post((req, res) => {

        ///// ajouter les 16 champs a des variables temporelles      
  const NSS = req.body.newcas_epi.NSS;
  const NI = req.body.newcas_epi.NI;
  const nom = req.body.newcas_epi.nom;
  const prenom = req.body.newcas_epi.prenom;

  const nom_pendiment = req.body.newcas_epi.nom_pendiment;
  const lieu_naissance = req.body.newcas_epi.lieu_naissance ;
  const date_naissance= req.body.newcas_epi.date_naissance;
 
  const sexe= req.body.newcas_epi.sexe;
  const adresse= req.body.newcas_epi.adresse;
  const wilaya= req.body.newcas_epi.wilaya;

  const hopital= req.body.newcas_epi.hopital;
  const Situation_actuelle= req.body.newcas_epi.Situation_actuelle;
  const Date_debut_Contamination= req.body.newcas_epi.Date_debut_Contamination;

  //const Date_fin_traitment= req.body.newcas_epi.Date_fin_traitment;

  const cas_contamine =  false;
  const cas_mort   = true;
  const cas_cava   = false ;
 

                ///// attribuer les valeurs des 16 variables au nouveau cas EPIDEME
  const newcas_epii= new cas_epi({
    
    NSS,NI, nom,prenom ,
    nom_pendiment,lieu_naissance,date_naissance,
    sexe,adresse,wilaya,
    hopital,Situation_actuelle,Date_debut_Contamination,
     cas_contamine,cas_mort, cas_cava
         // Date_fin_traitment,   
    
  });
                                      ///// sauvgarder l'ajout dans la BDDD

               newcas_epii.save()
                .then( 

                    )
                .catch(err => res.status(400).json('Error: failed added cas_epidemé to BDD' + err));
                
                                                    
                                                    });
//////////////////////// updater un cas dans le cas d'une epidemie
router.route('/update/:id').post((req, res) => {

    cas_epi.findById(req.params.id)
     .then(
          cas => {     
              ////////modifier le cas  (16 valeurs)  
                cas.NSS = req.body.NSS;
                cas.NI = req.body.NI;

                cas.nom = req.body.nom;
                cas.prenom = req.body.prenom;
                cas.nom_pendiment =req.body.nom_pendiment;
                
                cas.lieu_naissance = req.body.lieu_naissance ;
                cas.date_naissance= req.body.date_naissance;
                cas.sexe= req.body.sexe;
               
                cas.adresse= req.body.adresse;
                cas.wilaya= req.body.wilaya;
                cas.hopital= req.body.hopital;
                
                cas.Situation_actuelle= req.body.Situation_actuelle;
                cas.Date_debut_Contamination= req.body.Date_debut_Contamination;
                cas.Date_fin_traitment= req.body.Date_fin_traitment;


                cas.cas_contamine =  req.body.cas_contamine;
                cas.cas_mort   = req.body.cas_mort;
                cas.cas_cava   = req.body.cas_cava ;
                          ///////sauvgarder les modifications dans la BDD
               cas.save().then(() => res.json('CE cas EPIDEMIQUE est modifié!'))
               .catch(err => res.status(400).json('Error: Update cas epideme failed :(' + err));
            })
            .catch(err => res.status(400).json('Error: find by id est failed ' + err));
                                                });
////////////////////////////////////////////////////////
module.exports = router;