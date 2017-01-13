import React from 'react';
import {Link, IndexLink} from 'react-router';

const AccountLink = () => {
   return (
       <nav className="nav--account wrapper">
          <Link to="account" activeClassName="active">Account</Link>
          <Link to="/my-items" activeClassName="active">My items</Link>
       </nav>
   );
};

export {AccountLink};
