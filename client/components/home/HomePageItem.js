import React from 'react';
import {Link, IndexLink} from 'react-router';

const HomePageItem = (props) => (
      <article className="column column__3-of-12 item__thumbnail item" style={props.styles.base}>
        <img src={props.user.thumbnail} title="" />
        <h2>{props.user.title}</h2>
        <p>{props.user.category}</p>
        <IndexLink to={"details/" + props.user.title} activeClassName="active">View details</IndexLink>
      </article>
)


export {HomePageItem};
