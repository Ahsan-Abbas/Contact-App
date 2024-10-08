import React from 'react';
import { Link } from 'react-router-dom';

class AddContact extends React.Component {
    state = {
        name: '',
        email: '',
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === ' ' || this.state.email === '') {
            alert('Please enter a name & email first before submitting your form.');
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' });
        //this.props.navigate('/');
    };

    render() {
        return (
            <div className='ui main' style={{ paddingTop: '4rem' }}>
                <Link to="/">
                    <button className='ui button blue' style={{ float: 'right' }}>Contact List</button>
                </Link>
                <h2>Add Contact</h2>
                <form className='ui form' onSubmit={this.add}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;