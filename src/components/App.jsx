// App.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, addContacts, deleteContacts } from './redux/operations'; // Removed setFilter
import { getContacts, getFilter } from './redux/selectors';
import { setFilter } from './redux/filterSlice'; // Added this line
import Layout  from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './Layout/Title.module.css';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContacts(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const handleSetFilter = newFilter => {
    dispatch(setFilter(newFilter)); // Dispatch setFilter action
  };

  // Calculate filtered contacts directly within the App component
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
        <ContactForm addContact={handleAddContact} contacts={contacts} />
      <h2 className={css.Title2}>Contacts</h2>
      <Filter filter={filter} setFilter={handleSetFilter} />
      <ContactList
        contacts={filteredContacts} // Passing the filteredContacts as prop
        deleteContact={handleDeleteContact}
      />
    </Layout>
  );
};
