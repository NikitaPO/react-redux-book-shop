import React from "react";
import { Menu, Popup, Button, Icon } from "semantic-ui-react";
import Cart from "../containers/Cart";

const MenuComponent = ({ totalPrice, count, cart }) => (
  <Menu>
    <Menu.Item name="browse">
      <b>B</b>ooker
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Итого: &nbsp; <b>{totalPrice}</b> &nbsp; руб.
      </Menu.Item>
      <Popup
        trigger={
          <Menu.Item className="cart">
            <Button animated="vertical" className="cart_button">
              <Button.Content hidden>Корзина:</Button.Content>
              <Button.Content visible>
                <Icon name="shop" />(<b>{count}</b>)
              </Button.Content>
            </Button>
          </Menu.Item>
        }
        on="click"
        content={<Cart cart={cart}/>}
        position="bottom center"
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
