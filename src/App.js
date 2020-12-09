import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './App.sass'
import './sass/media.sass'


import MainPage from "./components/MainPage";
import ProductPage from "./components/product/ProductPage";
import ShopPage from "./components/shopPage/ShopPage";

import items from './db'
import Header from "./components/header/Header";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <MainPage items={items}/>}/>
                <Route exact path="/shop-page" render={() => <ShopPage items={items}/>}/>

                <Route path="/product/:id" render={() => <ProductPage items={items}/>} />
            </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
