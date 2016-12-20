import React from 'react';
import {Link, IndexLink} from 'react-router';

const Sidebar = () => {
   return (
     <aside className="sidebar">
        <IndexLink to="/" activeClassName="active">Rarre</IndexLink> 
     </aside>
   );
};

export {Sidebar};
