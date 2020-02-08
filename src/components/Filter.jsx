import React from "react";
import { Input, Menu } from "semantic-ui-react";

class Filter extends React.Component {
  handleItemClick = (event, { name }) => {
    const { setFilter } = this.props;
    setFilter(name);
  };

  render() {
    const { activeFilterItem } = this.props;

    return (
      <Menu vertical>
        <Menu.Item
          name="all"
          active={activeFilterItem === "all"}
          onClick={this.handleItemClick}
        >
          Все
        </Menu.Item>
        <Menu.Item
          name="popular"
          active={activeFilterItem === "popular"}
          onClick={this.handleItemClick}
        >
          Популярные
        </Menu.Item>
        <Menu.Item
          name="price_low"
          active={activeFilterItem === "price_low"}
          onClick={this.handleItemClick}
        >
          Цена(сначала дешевые)
        </Menu.Item>
        <Menu.Item
          name="price_hight"
          active={activeFilterItem === "price_hight"}
          onClick={this.handleItemClick}
        >
          Цена(сначала дорогие)
        </Menu.Item>
        <Menu.Item
          name="author"
          active={activeFilterItem === "author"}
          onClick={this.handleItemClick}
        >
          Автор
        </Menu.Item>
        <Menu.Item className="search">
          <Input icon="search" placeholder="Найти книги..." />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Filter;
