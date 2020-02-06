import React from "react";
import { connect } from "react-redux";
import { setBooks } from "../actions/books";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import Menu from "../components/Menu";
import BookCard from "../components/BookCard";

class App extends React.Component {
  UNSAFE_componentWillMount() {
    const { setBooks } = this.props;
    fetch("/books.json")
      .then(response => response.json())
      .then(data => setBooks(data));
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : books.map((book, index) => <BookCard key={index} {...book} />)}
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => {
  return {
    setBooks: books => dispatch(setBooks(books))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
