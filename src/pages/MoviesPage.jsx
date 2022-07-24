import { SearchForm } from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as API from 'service/API';

const MoviesPage = () => {
  const [data, setData] = useState(null);
  const { search } = useLocation();

  useEffect(() => {
    const query = search.slice(8);
    if (!query) {
      return;
    }

    API.getSearchMovies(query).then(data => {
      setData(data.data.results);
    });
  }, [search]);

  return (
    <>
      <SearchForm />
      {data && <MovieList data={data} />}
    </>
  );
};

export default MoviesPage;
