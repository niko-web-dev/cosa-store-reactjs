import React from 'react';
import Header from './components/header/Header'

import './App.css'
import Offer from './components/offer/Offer';
import Collection from './components/collection/Collection';
import About from './components/about/About';
import Subscription from './components/subscription/Subscription';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Offer/>
      <Collection/>
      <About/>
      <Subscription/>
      <Footer/>
    </div>
  )
}

export default App
