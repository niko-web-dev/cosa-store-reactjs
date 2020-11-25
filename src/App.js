import React from 'react';
import Header from './components/header/Header'

import './App.css'
import Offer from './components/offer/Offer';
import Collection from './components/collection/Collection';

function App() {
  return (
    <div className="App">
      <Header />
      <Offer/>
      <Collection/>
    </div>
  )
}

export default App
