import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { ErrorMessage, Field, Formik } from 'formik';
import { InvalidValue, Label, StyledForm } from './ContactEditor.styled';
import { selectAllContacts } from 'redux/contacts/selectors';

const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const scheme = yup.object().shape({
  number: yup
    .string()
    .trim()
    .matches(phoneRegexp, 'add correct format phone +380ххххххххх')
    .required(),
  name: yup.string().min(3).max(40).required(),
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
      <h1>Phone Book</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={scheme}
        onSubmit={onSubmit}
      >
        <StyledForm>
          <Label>Name</Label>
          <Field type="text" name="name" />
          <ErrorMessage component={InvalidValue} name="name" />
          <Label>Number</Label>
          <Field type="tel" name="number" />
          <ErrorMessage component={InvalidValue} name="number" />
          <Label htmlFor="">
            <button type="submit">Add contact</button>
          </Label>
        </StyledForm>
      </Formik>
    </>
  );
};
