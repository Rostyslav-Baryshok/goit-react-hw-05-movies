import axios from 'axios';
import { BASE_URL, API_KEY } from 'constans/movies-api';

async function getMoviesWithErrorHandling(url) {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return new Error('Not found');
  }
}

export function getMoviesTrending() {
  return getMoviesWithErrorHandling(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
}

export function getSearchMovies(query) {
  return getMoviesWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`
  );
}

export function getMovieDetails(movieId) {
  return getMoviesWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}

export function getMovieCredits(movieId) {
  return getMoviesWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function getMovieReviews(movieId) {
  return getMoviesWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
}
