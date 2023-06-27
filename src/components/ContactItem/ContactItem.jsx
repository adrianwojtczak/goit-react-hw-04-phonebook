import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactItem.module.css';

export const ContactItem = ({ contact, onDeleteContact }) => (
  <li className={styles.item}>
    <span className={styles.name}>
      {contact.name}: {contact.number}
    </span>
    <button
      type="button"
      onClick={() => onDeleteContact(contact.id)}
      className={styles.button}
    >
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
