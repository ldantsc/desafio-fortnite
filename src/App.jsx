import { Element } from 'react-scroll';
import { useState, useEffect } from 'react';
import Hero from './pages/hero/hero'
import Tournaments from './pages/tournaments/tournaments'
import BattlePass from './pages/battle-pass/battle-pass'
import VBuck from './pages/v-buck/v-buck'
import Items from './pages/items/items'
import Banner from './pages/banner/banner'
import AlertDisplay from './components/alert-display/alert-display';




function App() {
  return (
    <>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="tournaments">
        <Tournaments />
      </Element>
      <Element name="battle-pass">
        <BattlePass />
      </Element>
      <Element name="v-buck">
        <VBuck />
      </Element>
      <Element name="items">
        <Items />
      </Element>
      <Element name="banner">
        <Banner />
      </Element>
      <AlertDisplay />
    </>
  )
}

export default App;