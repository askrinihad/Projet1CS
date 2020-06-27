import React, { Component } from 'react';


class Item1 extends Component {
    
        state={ 
            NSS : "",
            NI : "",
            nom : "",
            prenom : "",
            sexe : "",
            adresse: "",
            lieu_naissance: "",
            nom_pendiment : "",
            wilaya  : "",
            hopital : "",
            Situation_actuelle : ""  
           }
        /////////////////////////////////////////// ///////////////////////////////////////////
        componentDidMount(){
            this.setState({
            NSS : this.props.item.NSS,
            nom : this.props.item.nom,
            prenom :this.props.item.prenom,
            sexe : this.props.item.sexe,
            adresse: this.props.item.adresse,
            lieu_naissance: this.props.item.lieu_naissance,
            nom_pendiment :this.props.item.nom_pendiment,
            wilaya  : this.props.item.wilaya,
            hopital : this.props.item.hopital,
            Situation_actuelle :this.props.item.Situation_actuelle  

        }) 
     } 
      
       /////////////////////////////////////////// ///////////////////////////////////////////
         
    render() { 

        return  (
         
                <tr>
                    <td>{this.props.item.NSS}</td>
                    <td>{this.props.item.NI}</td>
                    <td>{this.props.item.nom}</td>
                    <td>{this.props.item.prenom}</td>  
                    <td>{this.props.item.sexe}</td>  
                    <td>{this.props.item.adresse}</td>  
                    <td>{this.props.item.lieu_naissance}</td>  
                    <td>{this.props.item.nom_pendiment}</td>  
                    <td>{this.props.item.Situation_actuelle}</td>    
                </tr>
                        
        );
    }
   
}
 
export default Item1;
