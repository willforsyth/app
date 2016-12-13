import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
   return (
     <header>
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
