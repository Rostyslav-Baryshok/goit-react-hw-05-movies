import { GlobalStyle } from 'style-config/GlobalStyle';

import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MoviesDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route
            path="/movies/:movieId/*"
            element={<MoviesDetailsPage />}
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
