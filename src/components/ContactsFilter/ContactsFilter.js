import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setStatusFilter } from 'redux/filter/Filter';

export default function ContactsFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = e => dispatch(setStatusFilter(e.target.value));

  return (
    <div>
      <h1>Search</h1>
      <input type="text" value={filter} onChange={handleFilterChange} />
    </div>
  );
}
