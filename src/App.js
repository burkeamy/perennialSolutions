import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.compnents';
import ContactPage from './pages/contact/contactPage.component';
import AboutUsPage from './pages/about-us/about-us.component';
import Portfolio from './pages/portfolio/portfolio.component';

import './App.css';

import TopNav from './components/top-nav/top-nav.components';
import Footer from './components/footer/footer.components';


function App() {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route exact path='/' component={ HomePage }/>
        <Route exact path='/contact' component={ ContactPage }/>
        <Route exact path='/aboutus' component={ AboutUsPage }/>
        <Route exact path='/portfolio' component={ Portfolio }/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
