import React from 'react';
import {Link, IndexLink} from 'react-router';
import AccountsUIWrapper from './../components/account/AccountsUIWrapper.jsx';
import {AccountLink} from './accountLink';

const Header = () => {
   return (
     <header>
        <IndexLink to="/" activeClassName="active">Logo</IndexLink>
        <AccountsUIWrapper />
       <nav className="nav-main">
         <Link to="sneakers" activeClassName="active">Sneakers</Link>
         {" | "}
         <Link to="how-it-works" activeClassName="active">How it works</Link>
        {" | "}
       </nav>
        <AccountLink />
     </header>
   );
};

export {Header};
