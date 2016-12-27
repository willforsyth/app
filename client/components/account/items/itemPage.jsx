import React from 'react';

const ItemPage = (props) => {
 if (props.user.item === undefined) {
   return(
      <section className="column column__center column__8-of-12">
        You have no items
     </section>
   )
 }
 return(
     <div>
         <section className="column column__center column__8-of-12">
           <h2>{props.user.item.title}</h2>
         </section>
     </div>
 )
}

export default ItemPage;
