import React, { useContext, useState, useEffect } from 'react';

export const apiEndPoint = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
console.log(apiEndPoint);

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: '' });
  const [search, setSearch] = useState('marvel');

  const call = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    call(`${apiEndPoint}&s=${search}`);
  }, [search]);
  return (
    <AppContext.Provider
      value={{ isLoading, movies, error, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
