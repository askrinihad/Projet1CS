const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const bodyParser = require("body-parser")

///////////////////////// integrer cors et express
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

///////////////////////// integrer la base de donnees on cloud (MLAB)

/////// "mongodb://yasser123:yasser123123@ds033489.mlab.com:33489/yasser-igl"
 mongoose.connect("mongodb://yasser777:yasser777@ds161121.mlab.com:61121/projet1cs",
          { useNewUrlParser: true,useUnifiedTopology: true }, function(error){
                     if(error){
                                 console.log(error);             
                     }else{
                                 console.log("connected to database");
                     }}
                        );

  ///////////////////////////////////////importer les Routes 

const compteRouter = require('./routes/compte');
const cas_epiRouter = require('./routes/cas_epi');
const cas_catRouter = require('./routes/cas_cat');

  ///////////////////////////////////////lestning to routers 

app.use('/compte', compteRouter);
app.use('/cas_epi', cas_epiRouter);
app.use('/cas_cat', cas_catRouter);

  /////////////////////////////////////// lancer le serveur principale

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
