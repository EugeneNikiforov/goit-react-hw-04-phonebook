import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/FIlter';
import ContactList from './ContactList/ContactList';
import css from './App.module.scss';

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: "",
  };
  componentDidMount() {
    const contact = localStorage.getItem(`contacts`);
    const parsedContact = JSON.parse(contact);

    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts.length !== prevState.contacts.length) {
      localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts));
    }
  }

  contactCreated = ({ name, number }) => {
    const { contacts } = this.state;
    if (contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(({ contacts }) => ({contacts: [...contacts, contact],
      }));
    }
  };
  searchContact = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = (Id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== Id),
    }));
  };

  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((filter) =>
      filter.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
  return (
    <div className={css.app}>
      <h1 className={css.appHeader}>PhoneBook</h1>
      <ContactForm onSubmit={this.contactCreated} />
      <div>
        <h2 className={css.appHeaderSec}>Contacts</h2>
        <Filter value={filter} change={this.searchContact} />
        {contacts.length > 0 ? (<ContactList filter={this.getContacts()} removeContact={this.deleteContact} />) : (<p>Your Phonebook is empty!</p>)}
      </div>
    </div>
    );
  }
};
