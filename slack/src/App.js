import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './sass/App.scss';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Enterprise from './component/Enterprise';
import Pricing from './component/Pricing';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/enterprise" component={Enterprise} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
