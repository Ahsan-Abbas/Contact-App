import React from "react";
import { Link } from "react-router-dom";
import CardContact from "./ContactCard";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <CardContact
        contact={{ contact }}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></CardContact>
    );
  });

  return (
    <div className="ui celled list" style={{ paddingTop: "3rem" }}>
      <Link to="/add">
        <button className="ui button blue" style={{ float: "right" }}>
          Add Contact
        </button>
      </Link>
      <h2>ContactList</h2>
      {renderContactList}
    </div>
  );
};

export default ContactList;
