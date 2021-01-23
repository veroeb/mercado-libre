import logo from './logo.svg';
import './styles.scss';

import React from "react"; 
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Index from './Pages/Index';
import Path from './Components/Path';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Path />
      <Switch>
        <Route path="/"> 
          <Index />
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
