import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'pages/MovieDetailsPage/MovieDetailsPage.styled';
import { Form, Input } from './SearchForm.styled';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchForm = () => {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  const { pathname, search } = useLocation();

  useEffect(() => {
    const searchQuery = search.slice(8);
    if (!searchQuery) {
      return;
    }

    setQuery(searchQuery);
  }, [search]);

  const handleStateChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return toast.warn('Please insert valid request!');
    }

    navigate(`${pathname}?search=${query}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        placeholder="Search movies"
        onChange={handleStateChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
