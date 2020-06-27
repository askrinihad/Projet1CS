import React from 'react';
 import ReactDom from 'react-dom';

import 'jquery/src/jquery';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.js';
import Login from './front/Login';
import Choice from './front/Choice';
import EpiD from './front/EpiD';
import CatD from './front/CatD';
import './assets/css/login.css';
import './assets/css/navBar.css'


 
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';


 
class App extends React.Component {

     
 
  render(){
             return (
                <Router history={BrowserRouter }  >
                
               <Route path="/" exact component={Login} />
               
               <Route path="/Choice" exact component={Choice} />
               <Route path="/Choice/EpiD" exact component={EpiD} />
               <Route path="/Choice/CatD" exact component={CatD} />
                  
                </Router> 

             );
           }
}

const rootElement = document.getElementById("root");
  ReactDom.render(<App />, rootElement);
  