import React from 'react';
import './App.css';
import {
  Route, Switch
} from "react-router-dom";
import HomePage from './Views/HomePage';
import Products from './Views/Products';
import Contact from './Views/Contact';

function App() {
  return (
    <Switch>
      <Route path="/" exact render={()=><HomePage/>}/> 
      <Route path="/products" exact render={()=><Products/>}/> 
      <Route path="/contact" exact render={()=><Contact/>}/> 
    </Switch>

  );
}

export default App;
