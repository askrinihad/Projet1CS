const router  = require('express').Router();
let cas_cat = require('../models/cas_cat.model');

/////////////////// get tous les cas dans le cas de catastrophe
router.route('/').get((req, res) => {
  
  cas_cat.find({}).then(cas_cats =>
        {
          res.json(cas_cats)
        }
       )
    .catch(err =>
         res.status(400).json(
             'Error: la list des cas dans le cas dune catastrophe pas disponible +++++' + err));
});

//////////////////////// rechercher un cas dans le cas d'une catastrophe
router.route('/:id').get((req, res) => {
  
  cas_cat.findById(req.params.id)
  .then(cas_cat => res.json(cas_cat))
  .catch(err => 
    res.status(400).json('Error: la recherche du cas catastrophique nest pas effectuée :(' + err));
                                  });

///////////////////// Ajouter un cas dans le cas de catastrophe
router.route('/add').post((req, res) => {          
      /// attribuer les 16 champs du variables temporelles 
  const NSS = req.body.newcas_cat.NSS; 
  const NI = req.body.newcas_cat.NI; 

  const nom = req.body.newcas_cat.nom;
  const prenom = req.body.newcas_cat.prenom;
  const nom_catastrophe = req.body.newcas_cat.nom_catastrophe;
  
  const lieu_naissance = req.body.newcas_cat.lieu_naissance ;
  const date_naissance= req.body.newcas_cat.date_naissance;
  const sexe= req.body.newcas_cat.sexe;
  
  const adresse= req.body.newcas_cat.adresse;
  const wilaya= req.body.newcas_cat.wilaya;
  const hopital= req.body.newcas_cat.hopital;
  
  const Situation_actuelle= req.body.newcas_cat.Situation_actuelle;
  const Date_debut_blessure= req.body.newcas_cat.Date_debut_blessure;
  //const Date_fin_traitment= req.body.Date_fin_traitment;
  
  const cas_blesse =  req.body.newcas_cat.cas_blesse;
  const cas_mort   = req.body.newcas_cat.cas_mort;
  const cas_cava   = req.body.newcas_cat.cas_cava ;


            ///// attribuer les valeurs des 16 variables au nouveau cas catastrophique
          
  const newcas_catt= new cas_cat({
    NSS,NI,nom,prenom,
    nom_catastrophe,lieu_naissance,date_naissance,
    sexe,adresse,wilaya,
    hopital, Situation_actuelle, 
    Date_debut_blessure,    /// la date de blussure   du cas
    //Date_fin_traitment,   /// soit date de CAVA ou dat de mort du cas
    cas_blesse,cas_mort,cas_cava   ///// controler les statistiques
      });

                             ////sauvgarder dans la BDD le nouveau cas ajouter
    newcas_catt.save()
    .then(() => res.json('nouveau cas_ catastrophique  added !'))
    .catch(err => res.status(400).json(
      'Error: failed added cas_  catastrophique to BDD' + err));
});
//////////////////////// updater un cas dans le cas d'une catastrophe
router.route('/update/:id').post((req, res) => {
  cas_cat.findById(req.params.id)
   .then(
        cas => {     ////////modifier le cas
           /// modifier les 16   champs     
              cas.NSS = req.body.NSS;
              cas.NI = req.body.NI;
              cas.nom = req.body.nom;
              cas.prenom = req.body.prenom;

              cas.nom_catastrophe = req.body.nom_catastrophe;
              cas.lieu_naissance = req.body.lieu_naissance ;
              cas.date_naissance= req.body.date_naissance;

              cas.sexe= req.body.sexe;
              cas.adresse= req.body.adresse;
              cas.wilaya= req.body.wilaya;

              cas.hopital= req.body.hopital;
              cas.Situation_actuelle= req.body.Situation_actuelle;
              cas.Date_debut_blessure= req.body.Date_debut_blessure;

              cas.Date_fin_traitment= req.body.Date_fin_traitment;

              cas.cas_blesse =  req.body.cas_blesse;
              cas.cas_mort   = req.body.cas_mort;
              cas.cas_cava   = req.body.cas_cava ;
                        
              
              
              ///////sauvgarder les modifications dans la BDD
   cas.save().then(() => res.json('CE cas catastrophique est modifié!'))
        .catch(err => res.status(400).json('Error: Update cas catastrophique failed :(' + err));
                                                                       })
        .catch(err => res.status(400).json(
            'Error: find by id est failed  dans le cas catastrophique' + err));
                                          });
////////////////////////////////////////////////////////
module.exports = router; 