import React, { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import FormList from './FormList/FormList';
import Layout from './Layout/Layout';
import GlobalTitle from './Layout/Title';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = window.localStorage.getItem('contacts');
    if (contacts) {
      setContacts(JSON.parse(contacts));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    const isContactExist = contacts.some(({ name }) => name === contact.name);
    if (isContactExist) {
      Notiflix.Notify.failure(`${contact.name} is already in contacts.`);
    } else {
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(
      (contact) => contact.id !== contactId
    ));
  };

  const filterContact = () => {
    const filterLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterLowerCase)
    );
  };

  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = filterContact();

  return (
    <Layout>
      <GlobalTitle title="Phonebook" />
      <FormList onSubmit={addContact} />

      <GlobalTitle title="Contacts" />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        onDelete={deleteContact}
        contacts={filteredContacts}
      />
    </Layout>
  );
};

export default App;
