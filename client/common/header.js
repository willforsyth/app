import React from 'react';
import {Link, IndexLink} from 'react-router';
import AccountsUIWrapper from './../components/account/AccountsUIWrapper.jsx';
import {AccountLink} from './accountLink';

const Header = () => {
   return (
     <header>

       <nav className="nav-main">
         <Link to="how-it-works" activeClassName="active">How it works</Link>
         <AccountsUIWrapper />
         <Link to="how-it-works" className="button button--auto-width" activeClassName="active">Sell item</Link>
       </nav>
        <AccountLink />
     </header>
   );
};

export {Header};
