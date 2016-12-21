import React from 'react';

const ItemsPage = (props) => {
 console.log(props.user.item)
 return(
     <section className="column column__center column__8-of-12">
       <h2>{props.user.item.title}</h2>
       <p>{props.user.item.category}</p>
       <p>{props.user.item.thumbnail}</p>
     </section>
 )
}

export default ItemsPage;
