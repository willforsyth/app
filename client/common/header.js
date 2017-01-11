import React from 'react';
import {Link, IndexLink} from 'react-router';
import AccountsUIWrapper from './../components/account/AccountsUIWrapper.jsx';
import {AccountLink} from './accountLink';

const Header = (props) => {
   return (
     <header className="nav">
      <IndexLink to="/" activeClassName="active">Rarre</IndexLink>
       <nav className="nav-main">
         <IndexLink to="how-it-works" activeClassName="active">How it works</IndexLink>
         <AccountsUIWrapper />
         <IndexLink to="Sell-item" className="button button--auto-width" activeClassName="active">Sell item</IndexLink>
       </nav>
     </header>
   );
};

export {Header};
