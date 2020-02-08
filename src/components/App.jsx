import React from "react";
import { Container, Card, Grid } from "semantic-ui-react";
import Menu from "./Menu";
import BookCard from "./BookCard";
import Filter from "../containers/Filter";

export default class App extends React.Component {
  UNSAFE_componentWillMount() {
    const { setBooks } = this.props;
    fetch("/books.json")
      .then(response => response.json())
      .then(data => setBooks(data));
  }

  render() {
    const { books, isReady, setFilter, filterBy } = this.props;
    console.log(filterBy);

    return (
      <Container>
        <Menu />
        <Grid columns="two">
          <Grid.Column width={12}>
            <Card.Group itemsPerRow={3}>
              {!isReady
                ? "Загрузка..."
                : books.map((book, index) => (
                    <BookCard key={index} {...book} />
                  ))}
            </Card.Group>
          </Grid.Column>
          <Grid.Column width={4}>
            <Filter setFilter={setFilter} filterBy={filterBy} />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}
