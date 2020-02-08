import React from "react";
import { Input, Menu } from "semantic-ui-react";

const Filter = ({ filterBy, setFilter }) => (
  <Menu vertical>
    <Menu.Item
      active={filterBy === "all"}
      onClick={setFilter.bind(this, "all")}
    >
      Все
    </Menu.Item>
    <Menu.Item
      active={filterBy === "popular"}
      onClick={setFilter.bind(this, "popular")}
    >
      Популярные
    </Menu.Item>
    <Menu.Item
      active={filterBy === "price_low"}
      onClick={setFilter.bind(this, "price_low")}
    >
      Цена(сначала дешевые)
    </Menu.Item>
    <Menu.Item
      active={filterBy === "price_hight"}
      onClick={setFilter.bind(this, "price_hight")}
    >
      Цена(сначала дорогие)
    </Menu.Item>
    <Menu.Item
      active={filterBy === "author"}
      onClick={setFilter.bind(this, "author")}
    >
      Автор
    </Menu.Item>
    <Menu.Item className="search">
      <Input icon="search" placeholder="Найти книги..." />
    </Menu.Item>
  </Menu>
);

export default Filter;
