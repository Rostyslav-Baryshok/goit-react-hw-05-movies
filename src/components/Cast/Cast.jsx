import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'service/API';
import { CastList } from './Cast.styled';
import comingSoonImg from 'images/image-avatar.jpg';

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieCredits(movieId).then(data => setCast(data.data.cast));
  }, [movieId]);

  return (
    cast && (
      <CastList>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={profile_path ? BASE_IMAGE_URL + profile_path : comingSoonImg}
              alt={name}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </CastList>
    )
  );
};

export default Cast;
