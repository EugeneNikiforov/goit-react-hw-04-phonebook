import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.scss';

export default function ContactForm({ onSubmit }) {
    const [name, setName] = React.useState("");
    const [number, setNumber] = React.useState("");

    const nameId = nanoid();
    const numberId = nanoid();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, number);
        resetForm();
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "name") {
            setName(value);
        } else if (name === "number") {
            setNumber(value);
        } else {
            alert(`Something happen (-_-)`);
        }
    };
    
    const resetForm = () => {
        setName("");
        setNumber("");
    };

    return (
        <div className={css.contacts}>
            {/* <h1 className={css.contactsHeader}>PhoneBook</h1> */}
            <form onSubmit={handleSubmit}>
                <div className={css.contactsInnerBlock}>
                    <p className={css.contactsName}>Name</p>
                    <input
                        onChange={handleChange}
                        className={css.contactsInput}
                        value={name}
                        id={nameId}
                        minLength={4}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <p className={css.contactsName}>Number</p>
                    <input
                        onChange={handleChange}
                        className={css.contactsInput}
                        value={number}
                        minLength={7}
                        id={numberId}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button className={css.contactsButton} type="submit">Add contact</button>
                </div>
            </form>
        </div>
    )
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};