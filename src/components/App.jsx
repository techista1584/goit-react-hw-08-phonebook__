import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, setFilter } from './redux/actions';
import { fetchContacts } from './redux/operations';
import { getContacts, getFilter } from './redux/selectors';
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

  console.log('contacts', contacts);

  const handleAddContact = newContact => {
    // Placeholder for future Redux action
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    // Placeholder for future Redux action
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    // Placeholder for future Redux dispatch to update filter
    dispatch(setFilter(newFilter));
  };

  // Calculate filtered contacts directly within the App component
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Layout>
      // <h1 className={css.Title}>Phonebook</h1>
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
