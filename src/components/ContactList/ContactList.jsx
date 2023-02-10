import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.scss';

export default function ContactList({ filter, removeContact }) {
  return (
    <>
      {filter.map((contact) => {
        return (
          <li key={contact.id} className={css.participantsEntry}>
            <p>{contact.name}: <span>{contact.number}</span></p>
            <button type="button" className={css.participantsBtn} onClick={() => removeContact(contact.id)}>delete</button>
          </li>
        );
      })}
    </>
  );
}

ContactList.propTypes = {
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};

// const ContactList = ({ contacts }) => {
  
//   const contactListEl = contacts.map(contact => (
//     <li key={contact.id} className={css.participantsEntry}>{contact.name}: {contact.number}</li>
//   ))
//   return (
//     <div>
//       <ul className={css.participants}>
//         {contactListEl}
//       </ul>
//     </div>
//   )
// };
// ContactList.defaultProps = { contacts: [] };
// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired
//     }))
// };