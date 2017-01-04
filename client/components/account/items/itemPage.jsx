import React from 'react';

const ItemPage = (props) => {
console.log(props.user.title);
 // if (props.user === undefined) {
 //   return(
 //      <section className="column column__center column__8-of-12">
 //        You have no items
 //     </section>
 //   )
 // }
 // console.log(props.user.title);
 return(
     <div>
         <section className="column column__center column__8-of-12">
           <h2>{props.user.title}</h2>
         </section>
     </div>
 )
}

export default ItemPage;
