import React from 'react';
import {Link, IndexLink} from 'react-router';
import AccountsUIWrapper from './../components/account/AccountsUIWrapper.jsx';
const Header = () => {
   return (
     <header>
        <IndexLink to="/" activeClassName="active">Logo</IndexLink>
        <AccountsUIWrapper />
       <nav>
         <Link to="sneakers" activeClassName="active">Sneakers</Link>
         {" | "}
         <Link to="how-it-works" activeClassName="active">How it works</Link>
       </nav>
     </header>
   );
};

export {Header};
