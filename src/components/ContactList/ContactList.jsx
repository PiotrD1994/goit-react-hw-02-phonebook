import React from "react";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onRemove }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button onClick={() => onRemove(contact.id)}>delete</button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
};

export default ContactList;