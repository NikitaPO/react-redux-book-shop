import React from "react";
import { connect } from "react-redux";
import { setBooks } from "../actions/books";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    console.log(this.props);
    const { books } = this.props.books;
    const { setBooks } = this.props;
    const newBooks = [
      {
        id: 0,
        title: "Shopping card " + new Date()
      }
    ];
    return (
      <div>
        <h1>{books[0].title}</h1>
        <button
          onClick={setBooks.bind(this, newBooks)}
          className="btn btn-dark shadow"
        >
          SET NEW BOOKS
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
