import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const contacts = [
    {
      id: '1',
      name: 'John',
      email: 'john@example.com'
    },
    {
      id: '2',
      name: 'Doe',
      email: 'doe@example.com'
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
