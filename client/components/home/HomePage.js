import React from 'react';
import {Link, IndexLink} from 'react-router';

const HomePage = (props) => (
      <article className="column column__3-of-12 item__thumbnail" style={props.styles}>
        <h2>{props.user.title}</h2>
        <p>{props.user.category}</p>
        <IndexLink to={"details/" + props.user.title} activeClassName="active">View details</IndexLink>
        <img src={props.user.thumbnail} title="" />
        <p>{props.user.something}</p>
      </article>
)

export {HomePage};
