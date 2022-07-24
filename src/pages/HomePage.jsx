import { useState, useEffect } from 'react';
import MovieLinkList from '../components/MovieList/MovieList';
import * as API from 'service/API';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.getMoviesTrending()
      .then(data => {
        return data.data.results;
      })
      .then(setData);
  }, []);

  return (
    <>
      <h1>Trending today:</h1>
      <MovieLinkList data={data} />
    </>
  );
};

export default HomePage;
