import React from 'react';

const NotFound = (props) => {
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
         <p>404</p>
     </div>
 )
}

export default NotFound;
