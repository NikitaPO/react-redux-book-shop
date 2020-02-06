import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export default class FilterMenu extends Component {
  render() {
    return (
      <Menu vertical>
        <Menu.Item>Все</Menu.Item>
        <Menu.Item>Популярные</Menu.Item>
        <Menu.Item>Цена (сначала дешевые)</Menu.Item>
        <Menu.Item>Цена (сначала дорогие)</Menu.Item>
        <Menu.Item>Автор</Menu.Item>
        <Menu.Item className="search">
          <Input icon="search" placeholder="Найти книги..." />
        </Menu.Item>
      </Menu>
    );
  }
}
