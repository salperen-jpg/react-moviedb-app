import React from 'react';
import { useGlobalContext } from '../context';
const SearchForm = () => {
  const { search, setSearch } = useGlobalContext();

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className='section-center search-form'>
      <form action='' className='my-form' onSubmit={submitHandler}>
        <input
          type='text'
          className='input'
          placeholder='Search....'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchForm;
