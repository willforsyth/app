import React from 'react';
import {Link, IndexLink} from 'react-router';

const HomePage = (props) => {
    // if (props.sneaker === undefined) {
    //   return(
    //     <p></p>
    //   )
    // }
  return(
      <article className="column column__3-of-12 item__thumbnail">
        <h2>{props.sneaker.title}</h2>
        <p>{props.sneaker.category}</p>
        <IndexLink to={"details/" + props.sneaker.title} activeClassName="active">View details</IndexLink>
        <img src={props.sneaker.thumbnail} title="" />
      </article>
  )
}

export {HomePage};
