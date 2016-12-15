import React from 'react';
import {Link, IndexLink} from 'react-router';

const AccountLink = () => {
   return (
       <nav>
          <IndexLink to="account" activeClassName="active">Account</IndexLink>
       </nav>
   );
};

export {AccountLink};
