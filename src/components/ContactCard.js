import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const CardContact = (prop) => {
    console.log(prop);
    const { id, name, email } = prop.contact.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link
                    to={`/contact/${id}`}
                    state={{ contact: prop.contact.contact }}
                >
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i
                className="trash alternate outline icon"
                style={{ color: "red", marginTop: "7px", float: "right" }}
                onClick={() => {
                    prop.clickHandler(id);
                }}
            ></i>
        </div>
    );
};

export default CardContact;
