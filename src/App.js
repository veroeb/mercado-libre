import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Navbar /> */}
      <Navbar />
      <Switch>
        <Route path="/"> 
          <Index />
        </Route> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
