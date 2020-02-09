import React from "react";
import {
  Container,
  Card,
  Grid,
  Segment,
  Dimmer,
  Loader,
  Image
} from "semantic-ui-react";
import BookCard from "../containers/BookCard";
import Menu from "../containers/Menu";
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

    return (
      <Container>
        <Menu />
        {!isReady ? (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Загрузка...</Loader>
            </Dimmer>

            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : (
          <Grid columns="two">
            <Grid.Column width={12}>
              <Card.Group itemsPerRow={3}>
                {books.map((book, index) => (
                  <BookCard key={index} {...book} />
                ))}
              </Card.Group>
            </Grid.Column>
            <Grid.Column width={4}>
              <Filter setFilter={setFilter} filterBy={filterBy} />
            </Grid.Column>
          </Grid>
        )}
      </Container>
    );
  }
}
