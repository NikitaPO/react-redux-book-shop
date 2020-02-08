import React from "react";
import { Menu, Popup, Icon } from "semantic-ui-react";

const MenuComponent = ({ totalPrice, count }) => (
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
            <div>
              Корзина (<b>{count}</b>)
            </div>{" "}
          </Menu.Item>
        }
        on="click"
        content={123}
        position="bottom center"
      />
    </Menu.Menu>
  </Menu>
);

export default MenuComponent;
