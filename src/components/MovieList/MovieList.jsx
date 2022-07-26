import PropTypes from 'prop-types';
import { MovieList, MovieItem, MovieLink, LinkText } from './MovieList.styled';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

const MovieLinkList = ({ data }) => {
  return (
    data && (
      <MovieList>
        {data.map(({ id, title, poster_path }) => {
          return (
            <MovieItem key={id}>
              <MovieLink to={`/movies/${id}`}>
                <img src={BASE_IMAGE_URL + poster_path} alt={title} />
                <LinkText> {title}</LinkText>
              </MovieLink>
            </MovieItem>
          );
        })}
      </MovieList>
    )
  );
};

MovieLinkList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, title: PropTypes.string })
  ),
};

export default MovieLinkList;
