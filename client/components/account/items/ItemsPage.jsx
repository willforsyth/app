import React from 'react';

const ItemsPage = (props) => {
 // if (props.user.item === undefined) {
 //   return(
 //      <section className="column column__center column__8-of-12">
 //        You have no items
 //        <button>Sell your sneaks</button>
 //     </section>
 //   )
 // }
 console.log(props.sneaker.title)
 return(
     <section className="column column__center column__8-of-12">
       <h2>{props.sneaker.title}</h2>
       <img src={props.sneaker.thumbnail} title="" />
     </section>
 )
}

export default ItemsPage;
