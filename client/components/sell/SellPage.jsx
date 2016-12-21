import React from 'react';
import Form from "react-jsonschema-form";

// UI Schema
import sneakers_ui from '../../forms/UiSneakers.json';
import schema from '../../forms/SchemaSneakers.json'

const SellPage = () => {

    // // need to handle images through a cdn
    //   console.log(props.user.item);
    //   console.log(props.user.username);

    const log = (type) => console.log.bind(console, type);

     return(
         <Form className="new-item editForm" schema={schema}
                uiSchema={sneakers_ui}
                onChange={log("changed")}
                onSubmit={onSubmit, onSubmitNotification}
                onError={log("errors")} />
     )
}

const onSubmitNotification = ({formData}) => console.log("yay I'm valid!");
// const onSubmit = ({formData}) => console.log("yay I'm valid!" + formData.sneakers);
const onSubmit = ({formData}) => Meteor.call('addSneaker', formData);

export default SellPage;
