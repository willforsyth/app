import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from './App.jsx';
import {HomePage} from './components/home/HomePage';
import {ArtPage} from './components/art/ArtPage';
import {SneakersPage} from './components/sneakers/SneakersPage';
import {HowItWorks} from './components/about/HowItWorks';
import AccountCont from './components/account/AccountContainer';
import ItemsContainer from './components/account/items/ItemsContainer';
import LoginContainer from './components/account/login/LoginContainer';
import SellContainer from './components/sell/SellContainer';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/sneakers" component={SneakersPage} />
    <Route path="/login" component={LoginContainer} />
    <Route path="/how-it-works" component={HowItWorks} />
    <Route path="/account" component={AccountCont} />
    <Route path="/my-items" component={ItemsContainer} />
    <Route path="/Sell-item" component={SellContainer} />
  </Route>
);
