import React from "react";
import { Icon, List, Button } from "semantic-ui-react";

const Cart = ({ items, removeBookFromCart }) => {
  return (
    <List divided verticalAlign="middle">
      {items.length > 0 ? (
        items.map((item, index) => (
          <List.Item key={index} className="cart_item">
            <List.Content>
              <Button
                onClick={removeBookFromCart.bind(this, item.id)}
                size="mini"
                color="red"
                className="cart_button"
                icon
              >
                <Icon name="delete"></Icon>
              </Button>
            </List.Content>
            <List.Content className="book_text">
              {item.title} - {item.author}
            </List.Content>
            <List.Content>
              <b>({index})</b>
            </List.Content>
          </List.Item>
        ))
      ) : (
        <List.Item>Тут пока пусто...</List.Item>
      )}
    </List>
  );
};

export default Cart;
