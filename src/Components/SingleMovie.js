import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { apiEndPoint } from '../context';

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  console.log(movie);

  const call = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Resonse === 'False') {
      setError({ show: true, msg: data.Error });
      setIsLoading(false);
    } else {
      setMovie(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    call(`${apiEndPoint}&i=${id}`);
  }, [id]);

  if (isLoading) {
    return <div className='loading'>Loading...</div>;
  }

  if (error.show) {
    return (
      <div className='error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='primary-btn'>
          Back to Movies
        </Link>
      </div>
    );
  }
  const {
    Poster: img,
    Title: title,
    Released: released,
    Actors: actors,
    Rated: rated,
    Awards: awards,
  } = movie;
  return (
    <article>
      <div className='section-title'>
        <h1 className='movie-title'>{title}</h1>
        <div className='underline'></div>
      </div>
      <div className='section-center single-movie'>
        <div className='img-container'>
          <img src={img} alt={title} />
          <div className='img-icons'>
            <p>
              <i class='fas fa-thumbs-up'></i>
              <span>{Math.floor(Math.random(1, 100) * 10000)}</span>
            </p>
            <p>
              <i class='fas fa-thumbs-down'></i>
              <span>{Math.floor(Math.random(1, 1000) * 100)}</span>
            </p>
          </div>
        </div>
        <div className='movie-detail'>
          <div>
            <span className='att'>Content :</span>
            <span className='subject'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              eligendi a fugit maiores officiis mollitia. Velit inventore
              voluptas error! Vero dolorem enim non fugit esse?
            </span>
          </div>
          <div className='single-info'>
            <span className='att'>Actors : </span>
            <span>{actors}</span>
          </div>
          <div className='single-info'>
            <span className='att'>Released : </span>
            <span>{released}</span>
          </div>
          <div className='single-info'>
            <span className='att'>Awards : </span>
            <span className='awards'>
              {awards === 'N/A' ? 'Unknown' : awards}
            </span>
          </div>
        </div>
      </div>
      <div className='btn-container'>
        <Link to='/' className='primary-btn'>
          Back to Movies
        </Link>
      </div>
    </article>
  );
};

export default SingleMovie;
