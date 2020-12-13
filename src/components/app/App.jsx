import React from 'react'
import {
    BrowserRouter,
    Route } from "react-router-dom"


import {
    IndexPage,
    Header,
    SingleProductPage,
    ShopPage,
    SliderTop,
    Cart } from '../index'


import { CSSTransition } from 'react-transition-group'

import './App.sass'

import StoreContext from "../../storeContext"
import ScrollToTop from "../scrollToTop"



function App() {

    const routes = [
        {path: '/', Component: IndexPage},
        {path: '/shop-page', Component: ShopPage,},
        {path: '/product/:id', Component: SingleProductPage},
        {path: '/cart', Component: Cart},
    ]

    return (
         <StoreContext.Consumer>
              {
                  (dataDb) => {
                      return (
                          <div className="App" id="app">
                              <BrowserRouter>
                                  <SliderTop/>
                                  <Header/>
                                  <ScrollToTop>
                                      <Route exact
                                             path="/"
                                             render={() =>
                                                 <IndexPage items={dataDb.items}/>}/>

                                      <Route exact
                                             path="/shop-page"
                                             render={() =>
                                                 <ShopPage itemsShopPage={dataDb.itemsShopPage} categories={dataDb.categories}/>}/>

                                      <Route exact
                                             path="/product/:id"
                                             render={() =>
                                                 <SingleProductPage itemsShopPage={dataDb.itemsShopPage}/>}/>

                                      <Route exact
                                             path="/cart"
                                             render={() =>
                                                 <Cart dataDb={dataDb}/>}/>
                                  </ScrollToTop>

                                  {/*{routes.map(({ path, Component }) => (*/}
                                  {/*     <Route key={path} exact path={path}>*/}
                                  {/*        {({ match }) => (*/}
                                  {/*            <CSSTransition*/}
                                  {/*                in={match != null}*/}
                                  {/*                timeout={300}*/}
                                  {/*                classNames="page"*/}
                                  {/*                unmountOnExit*/}
                                  {/*            >*/}
                                  {/*                <div className="page">*/}
                                  {/*                    <Component items={dataDb.items} itemsShopPage={dataDb.itemsShopPage} categories={dataDb.categories}/>*/}
                                  {/*                </div>*/}
                                  {/*            </CSSTransition>*/}
                                  {/*        )}*/}
                                  {/*    </Route>*/}
                                  {/*))}*/}
                              </BrowserRouter>
                          </div>
                      )

                  }
              }
        </StoreContext.Consumer>
    )
}

export default App
