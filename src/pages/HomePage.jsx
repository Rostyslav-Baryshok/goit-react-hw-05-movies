import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList/MovieList';
import * as api from 'service/api1';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api
      .getMoviesTrending()
      .then(data => {
        return data.data.results;
      })
      .then(setData);
  }, []);

  return (
    <>
      <h1>Trending today:</h1>
      <MovieList data={data} />
    </>
  );
};

export default HomePage;
