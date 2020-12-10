import React from 'react'

import { BrowserRouter, Route, Switch } from "react-router-dom"

import './App.sass'

import IndexPage from "./components/IndexPage"
import Header from "./components/header"
import ProductPage from "./components/singleProductPage"
import ShopPage from "./components/shopPage"

import items from './db'
import SliderTop from "./components/sliderTop";


function App() {
  return (
    <div className="App" id="app">
        <BrowserRouter>
            <SliderTop/>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <IndexPage items={items}/>}/>
                <Route exact path="/shop-page" render={() => <ShopPage items={items}/>}/>
                <Route path="/product/:id" render={() => <ProductPage items={items}/>} />
            </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
