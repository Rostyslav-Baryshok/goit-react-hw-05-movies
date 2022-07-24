import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'service/API';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [review, setReview] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    API.getMovieReviews(movieId).then(data => setReview(data.data.results));
  }, [movieId]);

  return review && review.length ? (
    <ReviewsList>
      {review.map(({ author, content }) => (
        <li key={author}>
          <h2>{author}</h2>
          <p>{content}</p>
        </li>
      ))}
    </ReviewsList>
  ) : (
    <>
      <p>There is no reviews on selected movie!</p>
    </>
  );
};

export default Reviews;
