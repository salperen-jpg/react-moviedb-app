import React from 'react';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const defaultImg =
  'https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg';

const Movies = () => {
  const { isLoading, movies } = useGlobalContext();
  if (isLoading) {
    return <div className='loading'>...Loading</div>;
  }
  return (
    <section className='section-center movies'>
      {movies.map((movie) => {
        const { Title, Year, imdbID: id, Type, Poster: img } = movie;
        return (
          <Link to={`/movies/${id}`} key={id} className='movie'>
            <div>
              <img src={img === 'N/A' ? defaultImg : img} alt={Title} />
              <div className='movie-info'>
                <h4 className='title'>{Title}</h4>
                <p className='year'>{Year}</p>
                <div>
                  <span className='type'> Type : </span>
                  <span>{Type}</span>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
