const router = require('express').Router();
let compte = require('../models/compte.model');

////////////////////// get la liste de tous les comptes (etablisment hospitalisé / cellule de crise)
///////////////////////////////// Pour faire le login 
router.route('/').get((req, res) => {
  
  compte.find({}).then(comptes =>
        {
          res.json(comptes)
        }
       )
    .catch(err =>
         res.status(400).json(
             'Error: la list des comptes pas disponible +++++' + err));
                                    });
////////////////// ajouter un compte ( etablisment hospitalisé / cellule de crise)
router.route('/add').post((req, res) => {
              ///// nouveau compte ajouté
              ///les variables temporelles 13
  const nom = req.body.nom;
  const prenom = req.body.prenom;
  const type = req.body.type;

  const mail = req.body.mail;
  const password = req.body.password;
  const lieu_naissance = req.body.lieu_naissance ;

  const sexe= req.body.sexe;
  const adresse= req.body.adresse;
  const wilaya= req.body.wilaya;

  const nom_etablisement= req.body.nom_etablisement;
  const Poste_travail= req.body.Poste_travail;
  const annee_recrutement= req.body.annee_recrutement;

  const date_naissance= req.body.date_naissance;


  const newcompte= new compte({         //// attribuer les valeurs des  13 variables temporelles
    nom,prenom,type,
    mail,password,lieu_naissance,
    sexe,adresse,wilaya,
    nom_etablisement,Poste_travail,annee_recrutement,
    date_naissance
                            });
                                ///:sauvgarder dans la BDD
                 newcompte.save()
                  .then(() => res.json('nouveau compte added !'))
                   .catch(err => res.status(400).json('Error: failed added compte to BDD' + err));
                               });
////////////////////////////////////EXPORTER
module.exports = router;