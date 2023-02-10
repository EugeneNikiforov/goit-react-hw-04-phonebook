import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
// import ContactList from '../ContactList/ContactList';
// import Filter from '../Filter/FIlter';
import css from './ContactForm.module.scss';


export default class ContactForm extends Component {
    // state = {...initialState};
    state = {
        name: "",
        number: ""
    };
    nameId = nanoid();
    numberId = nanoid();
    
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     const id = nanoid();
        
    //     const { name } = this.state;
    //     const { number } = this.state;
    //     const newContact = { name, number, id };
    //     this.setState((prevState) => ({
    //     ...initialState, contacts: [...prevState.contacts, newContact],
    // }));
    // };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm();
    };
    
    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    
    resetForm = () => {
        this.setState({ name: "", number: "" });
    };

    render() {
        const { name } = this.state;
        const { number } = this.state;
        return (
            <div className={css.contacts}>
                {/* <h1 className={css.contactsHeader}>PhoneBook</h1> */}
                <form onSubmit={this.handleSubmit}>
                    <div className={css.contactsInnerBlock}>
                        <p className={css.contactsName}>Name</p>
                        <input
                            onChange={this.handleChange}
                            className={css.contactsInput}
                            value={name}
                            id={this.nameId}
                            minLength={4}
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                        <p className={css.contactsName}>Number</p>
                        <input
                            onChange={this.handleChange}
                            className={css.contactsInput}
                            value={number}
                            minLength={7}
                            id={this.numberId}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                        <button className={css.contactsButton} type="submit">Add contact</button>
                    </div>
                </form>
                {/* <h2 className={css.contactsHeaderSec}>Contacts</h2> */}
                {/* <p className={css.contactsFind}>Finder</p> */}
                {/* <input
                    onChange={this.finder}
                    className={css.contactsFinder}
                    placeholder="Search people by name..."
                    value={filter}
                    type="text"
                    name="filter"
                /> */}
                {/* <Filter value={filter} contacts={this.state.contacts} /> */}
                {/* <ContactList contacts={this.state.contacts} /> */}
            </div>
        )
    };
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};