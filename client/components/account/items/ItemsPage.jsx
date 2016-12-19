import React from 'react';

const ItemsPage = (props) => {
 console.log(props.user.items)
 return(
   <main>
     <div>
       <h2>Item title: {props.user.items.title}</h2>
       <p>Category: {props.user.items.category}</p>
       <p>Description: {props.user.items.description}</p>
     </div>
     <div>
       <form action="" className="readonly editForm">
         <h2>Post sneaker</h2>
         <label>Title</label>
         <input name="itemTitle" type="text" defaultValue={props.user.items.title} readOnly />
          <label>Category</label>
         <input name="itemCategory" type="text" defaultValue={props.user.items.category} readOnly />
             <label>Description</label>
         <text name="itemDescription" type="email" defaultValue={props.user.items.description} readOnly />
           <input type="submit" />
           <a href="#" className="edit">Edit</a>
       </form>
     </div>
   </main>
 )
}

export default ItemsPage;
