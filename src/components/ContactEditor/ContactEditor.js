import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { ErrorMessage, Formik } from 'formik';
import {
  InvalidValue,
  Label,
  StyledField,
  StyledForm,
} from './ContactEditor.styled';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Button } from '@chakra-ui/react';

const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const scheme = yup.object().shape({
  number: yup
    .string()
    .trim()
    .matches(phoneRegexp, '+380xxxxxxxxx')
    .required('required'),
  name: yup
    .string()
    .min(3, 'at least 3 symbols')
    .max(40, 'at most 40 symbols')
    .required('required'),
});
const initialValues = {
  number: '',
  name: '',
};

export const isAlredyExistInContacts = (name, contacts) => {
  return contacts.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
};

export const ContactEditor = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const onSubmit = (value, { resetForm }) => {
    const { name, number } = value;
    if (isAlredyExistInContacts(name, contacts)) {
      toast.error('contact already exist');
    } else {
      dispatch(addContact({ name, number }));
      resetForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={scheme}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <Label>Name</Label>
          <StyledField type="text" name="name" />
          <ErrorMessage component={InvalidValue} name="name" />
          <Label>Number</Label>
          <StyledField type="tel" name="number" />
          <ErrorMessage component={InvalidValue} name="number" />
          <Label htmlFor="">
            <Button type="submit" colorScheme="purple" size="lg">
              Add contact
            </Button>
          </Label>
        </StyledForm>
      </Formik>
    </>
  );
};
