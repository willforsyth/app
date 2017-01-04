import React from 'react';
import {Link, IndexLink} from 'react-router';

const HomePage = (props) => {
  return(
      <article className="column column__3-of-12 item__thumbnail">
        <h2>{props.user.title}</h2>
        <p>{props.user.category}</p>
        <IndexLink to={"details/" + props.user.title} activeClassName="active">View details</IndexLink>
        <img src={props.user.thumbnail} title="" />
      </article>
  )
}

export {HomePage};
