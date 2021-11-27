import React from 'react';
import { useGlobalContext } from '../context';
const SearchForm = () => {
  const { search, setSearch, error } = useGlobalContext();

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
      {error.show && <div className='error'>{error.msg}</div>}
    </div>
  );
};

export default SearchForm;
