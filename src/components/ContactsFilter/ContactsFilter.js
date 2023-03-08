import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setStatusFilter } from 'redux/filter/Filter';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useRef } from 'react';
export default function ContactsFilter() {
  const dispatch = useDispatch();
  const filterRef = useRef();
  const handleFilterChange = () =>
    dispatch(setStatusFilter(filterRef.current.value));
  return (
    <div>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          ref={filterRef}
          focusBorderColor="lime"
          type="text"
          placeholder="Contact name or number"
          onChange={handleFilterChange}
        />
      </InputGroup>
    </div>
  );
}
