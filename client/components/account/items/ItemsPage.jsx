import React from 'react';

const ItemsPage = (props) => {
 if (props.user.item === undefined) {
   return(
      <section className="column column__center column__8-of-12">
        You have no items
        <button>Sell your sneaks</button>
     </section>
   )
 }
 return(
     <section className="column column__center column__8-of-12">
       <h2>{props.user.item.title}</h2>
     </section>
 )
}

export default ItemsPage;
