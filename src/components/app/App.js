import {
    BrowserRouter,
    Route,
    Switch } from "react-router-dom"

import {
    items,
    itemsShopPage,
    categories } from '../../db'

import {IndexPage,
    Header,
    SingleProductPage,
    ShopPage,
    SliderTop } from '../index'

import './App.sass'

function App() {
  return (
    <div className="App" id="app">
        <BrowserRouter>
            <SliderTop/>
            <Header/>
            <Switch>

                <Route exact
                       path="/"
                       render={() =>
                           <IndexPage items={items}/>}/>

                <Route exact
                       path="/shop-page"
                       render={() =>
                           <ShopPage items={itemsShopPage} categories={categories}/>}/>

                <Route exact
                       path="/product/:id"
                       render={() =>
                           <SingleProductPage items={itemsShopPage}/>}/>

            </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
