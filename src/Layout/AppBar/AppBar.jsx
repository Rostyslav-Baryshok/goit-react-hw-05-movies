import { Container, Link } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Container>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Container>
  );
};
