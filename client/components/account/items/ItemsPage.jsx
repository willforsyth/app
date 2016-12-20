import React from 'react';

const ItemsPage = (props) => {
 console.log(props.user.items)
 return(
     <section>
       <h2>Item title: {props.user.items.title}</h2>
       <p>Category: {props.user.items.category}</p>
       <p>Description: {props.user.items.description}</p>
     </section>
 )
}

export default ItemsPage;
