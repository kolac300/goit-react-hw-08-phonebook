import { useSelector } from 'react-redux';
import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';
import { Contact } from './contact/Contact';
import { SearchWrapper } from './Contacts.styled';




const getFiltredContacts = (contacts, filter) => {
  if (contacts.length) {
    return contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(filter
          .toLowerCase()))
  }
  return []
};
export const ContactList = () => {
  const contacts = useSelector(selectAllContacts)
  const filter = useSelector(selectFilter);
  const filtredContacts = getFiltredContacts(contacts, filter)
  return (
    <>
      <SearchWrapper>
        <ul>
          {filtredContacts.map(contact => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </ul>
      </SearchWrapper>
    </>
  );
};
