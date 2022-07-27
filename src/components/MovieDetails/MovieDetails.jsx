import { useEffect, useState } from 'react';
import { useParams, useNavigate, Outlet } from 'react-router-dom';
import * as api from 'service/api';
import {
  Wrapper,
  Title,
  Text,
  Container,
  Overview,
  Box,
  ContainerLink,
  MovieTitle,
  MovieImage,
  Button,
} from './MovieDetails.styled';

import { Link } from 'components/Navigation/Navigation.styled';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    api.getMovieDetails(movieId).then(data => setMovie(data.data));
  }, [movieId]);

  return (
    <>
      <Button type="button" onClick={() => navigate(-1)}>
        Back
      </Button>

      {movie && (
        <>
          <Wrapper>
            <div>
              <MovieImage
                src={BASE_IMAGE_URL + movie.poster_path}
                alt={movie.title}
              />
            </div>
            <Container>
              <MovieTitle>{movie.title}</MovieTitle>
              <Box>
                <Title>Genres:</Title>
                <Text>{movie.genres.map(genre => genre.name).join(', ')}</Text>
              </Box>

              <Box>
                <Title>Rate:</Title>
                <p>{movie.popularity}</p>
              </Box>

              <Box>
                <Title>Release date:</Title>
                <p>{movie.release_date}</p>
              </Box>

              <Overview>Overview</Overview>
              <p>{movie.overview}</p>
            </Container>
          </Wrapper>

          <ContainerLink>
            <h2>Additional information:</h2>

            <Link to={`/movies/${movieId}/cast`} replace={true}>
              Cast
            </Link>
            <Link to={`/movies/${movieId}/reviews`} replace={true}>
              Reviews
            </Link>
          </ContainerLink>
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
