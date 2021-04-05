import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.compnents';
import './App.css';
import TopNav from './components/top-nav/top-nav.components';
import Footer from './components/footer/footer.components';

function App() {
  return (
    <div>
      <TopNav />
      <Switch>
       <Route exact path='/' component={ HomePage }/>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
