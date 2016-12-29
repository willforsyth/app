import React from 'react';
import {Link, IndexLink} from 'react-router';

const HomePage = (props) => {
  console.log(props.user.item)
  if (props.user.item === undefined) {
    return(
      <p></p>
    )
  }
  return(
      <article className="column column__3-of-12 item__thumbnail">
        <h2>{props.user.item.title}</h2>
        <p>{props.user.item.category}</p>
        <IndexLink to={"details/" + props.user.item.title} activeClassName="active">View details</IndexLink>
      </article>
  )
}

export {HomePage};
