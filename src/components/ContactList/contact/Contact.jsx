import { Li } from './Contact.styled';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { isAlredyExistInContacts } from 'components/ContactEditor/ContactEditor';
import { toast } from 'react-hot-toast';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts)
  const NameRef = useRef(null);
  const NumberRef = useRef(null);

  const handleDelete = () => {
    dispatch(deleteContact(id))
  }
  const handleUpdate = () => {
    if (isAlredyExistInContacts(NameRef.current.value, contacts)) {
      toast.error('Contact alredy exists')
    } else {
      dispatch(updateContact({ name: NameRef.current.value, number: NumberRef.current.value, id }))
    }
  }

  return (
    <Li>
      <input ref={NameRef} defaultValue={name} type='text' />:
      <input ref={NumberRef} defaultValue={number} type='text' />
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleUpdate}>Save changes</button>
    </Li>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
