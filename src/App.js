import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Error from "./components/error/Error";
import Products from "./pages/Products";
import Home from "./pages/Home";


function App() {

  return (
    <div className='page'>
      <BrowserRouter>
        <Header/>  
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/products'>
            <Products/>
          </Route>
          <Route path='/error'>
            <Error/>
          </Route>
          <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
