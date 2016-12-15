import React from 'react';
import {Link, IndexLink} from 'react-router';
import AccountsUIWrapper from './../components/account/AccountsUIWrapper.jsx';
const Header = () => {
   return (
     <header>
        <IndexLink to="/" activeClassName="active">Logo</IndexLink>
        <AccountsUIWrapper />
       <nav>
         <IndexLink to="art" activeClassName="active">Art</IndexLink>
         {" | "}
         <IndexLink to="sneakers" activeClassName="active">Sneakers</IndexLink>
         {" | "}
         <Link to="about" activeClassName="active">How it works</Link>
       </nav>
     </header>
   );
};

export {Header};
