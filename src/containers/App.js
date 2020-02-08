import { connect } from "react-redux";
import * as booksActions from "../actions/books";
import App from "../components/App";
import { bindActionCreators } from "redux";
import orderBy from "lodash/orderBy";

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case "popular":
      return orderBy(books, "rating", "desc");
    case "price_low":
      return orderBy(books, "price", "asc");
    case "price_hight":
      return orderBy(books, "price", "desc");
    case "author":
      return orderBy(books, "author", "asc");
    default:
      return books;
  }
};

const filterBooks = (books, searchQuery) => {
  return books.filter(
    book =>
      book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );
};

const mapStateToProps = ({ books, filter }) => ({
  books:
    books.items &&
    sortBy(filterBooks(books.items, filter.searchQuery), filter.filterBy),
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
