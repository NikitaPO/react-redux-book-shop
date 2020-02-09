import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Rating } from "semantic-ui-react";

const BookCard = book => {
  const {
    id,
    title,
    author,
    price,
    image,
    rating,
    addBookToCard,
    addedCount
  } = book;
  return (
    <Card className="book_card">
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra className="card_values">
        <div>
          <Icon name="rub" />
          {price}
        </div>
        <Rating
          key={id}
          icon="star"
          className="card_rating"
          defaultRating={rating}
          maxRating={5}
        />
      </Card.Content>
      <Button onClick={addBookToCard.bind(this, book)} positive>
        Добавить в корзину {addedCount ? `(${addedCount})` : null}
      </Button>
    </Card>
  );
};

export default BookCard;
