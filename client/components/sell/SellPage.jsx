import React from 'react';
import Form from "react-jsonschema-form";

// UI Schema
import sneakers_ui from '../../forms/UiSneakers.json';
import schema from '../../forms/SchemaSneakers.json'

const SellPage = (props) => {

// need to handle images through a cdn
console.log(props.user.item.thumbnail)

const log = (type) => console.log.bind(console, type);

 return(
     <Form className="new-item" schema={schema}
            uiSchema={sneakers_ui}
            onChange={log("changed")}
            onSubmit={onSubmit}
            onError={log("errors")} />
 )
}


// const onSubmit = ({formData}) => console.log("yay I'm valid!" + formData.sneakers);
const onSubmit = ({formData}) => Meteor.call('addSneaker', formData);

export default SellPage;
