import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { selectAllContacts } from 'redux/contacts/selectors';
import { isAlredyExistInContacts } from 'components/ContactEditor/ContactEditor';
import { toast } from 'react-hot-toast';
import { Button, Input, Stack } from '@chakra-ui/react';

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
    <li>
      <Stack direction='row' spacing={4} align='center'>
        <Input ref={NameRef}
          defaultValue={name}
          focusBorderColor='lime'
        />
        <Input ref={NumberRef}
          defaultValue={number}
          focusBorderColor='lime'
        />
        <Button colorScheme="purple" variant="solid" onClick={handleDelete}>
          Delete
        </Button>
        <Button colorScheme="purple" variant="solid" onClick={handleUpdate}>
          Save
        </Button>
      </Stack>
      <br />
    </li>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
