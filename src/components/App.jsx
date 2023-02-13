import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/FIlter';
import ContactList from './ContactList/ContactList';
import css from './App.module.scss';

export default function App() {
  const getLocalData = (key) => {
    const contactParsed = JSON.parse(localStorage.getItem(`contacts`));
    if (contactParsed) {
      return contactParsed;
    }
    return [];
  };
  const [contacts, setContacts] = React.useState(getLocalData);
  const [filter, setFilter] = React.useState("");

  // React.useEffect(() => {
  //   const contact = localStorage.getItem(`contacts`);
  //   const contactParsed = JSON.parse(contact);
  //   if (contactParsed) {
  //     setContacts(contactParsed);
  //   }
  // }, []);
  React.useEffect(() => {
    localStorage.setItem(`contacts`, JSON.stringify(contacts));
  }, [contacts]);

  const contactCreated = (name, number) => {
    if (contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts((state) => [...state, contact]);
    }
  };
  const searchContact = (e) => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = (Id) => {
    setContacts((state) => state.filter((contact) => contact.id !== Id));
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((filter) =>
      filter.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <div className={css.app}>
      <h1 className={css.appHeader}>PhoneBook</h1>
      <ContactForm onSubmit={contactCreated} />
      <div>
        <h2 className={css.appHeaderSec}>Contacts</h2>
        <Filter value={filter} change={searchContact} />
        {contacts.length > 0 ? (<ContactList filterContact={getContacts()} removeContact={deleteContact} />) : (<p>Your Phonebook is empty!</p>)}
      </div>
    </div>
    );
};
