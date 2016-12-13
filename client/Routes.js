import React from 'react';
import {Route, IndexRoute} from 'react-router';
import {App} from './App.jsx';
import {HomePage} from './components/home/HomePage';
import {ArtPage} from './components/art/ArtPage';
import {SneakersPage} from './components/sneakers/SneakersPage';
import {HowItWorks} from './components/about/HowItWorks';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="art" component={ArtPage} />
    <Route path="sneakers" component={SneakersPage} />
    <Route path="about" component={HowItWorks} />
  </Route>
);
