import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import user from "../images/user.jpg";

const ContactDetail = (props) => {
    const { id } = useParams();
    const location = useLocation();
    const { contact } = location.state || {};  // Safely access state
    console.log(contact);

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="description">{contact.email}</div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetail;  // This is a default export
