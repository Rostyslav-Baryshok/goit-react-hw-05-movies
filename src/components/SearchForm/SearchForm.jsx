import { useState } from 'react';
import { Button } from 'components/MovieDetails/MovieDetails.styled';

import { FormStyle, FieldStyle } from './SearchForm.styled';
import { Formik } from 'formik';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
  name: '',
};

export const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleStateChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = resetForm => {
    if (query.trim() === '') {
      return toast.warn('Please insert valid request!');
    }
    resetForm();
  };

  return (
    <Formik initialValues={initialValues}>
      <FormStyle onSubmit={handleSubmit}>
        <FieldStyle
          name="name"
          type="text"
          value={query}
          placeholder="Search movies"
          onChange={handleStateChange}
        />
        <Button type="submit">Search</Button>
      </FormStyle>
    </Formik>
  );
};
