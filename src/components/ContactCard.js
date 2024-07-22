import React from 'react';
import user from '../images/user.jpg';

const CardContact = (prop) => {
    console.log(prop.contact);
    const { id, name, email } = prop.contact.contact;
    console.log(id, name, email);

    return (
        <div className='item'>
            <img className='ui avatar image' src={user} alt='user' />
            <div className='content'>
                <div className='header'> 
                    {name}
                </div>
                <div>
                    {email}
                </div>
            </div>
            <i className='trash alternate outline icon'
                style={{ color: 'red', marginTop: '7px', float: 'right'}}>
            </i>
        </div>
    );
};

export default CardContact;