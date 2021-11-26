import React from 'react';
import Movies from './Movies';
import SearchForm from './SearchForm';
import Title from './Title';
const Home = () => {
  return (
    <main>
      <Title />
      <SearchForm />
      <Movies />
    </main>
  );
};

export default Home;
