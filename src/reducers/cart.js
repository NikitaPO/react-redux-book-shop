const initialState = {
  items: [
    {
      id: 0,
      title: "Происхождение",
      author: "Дэн Браун",
      image:
        "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
      price: 710,
      rating: 3
    },
    {
      id: 1,
      title: "1984",
      author: "Джордж Оруэлл",
      image:
        "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/129098--.jpg",
      price: 415,
      rating: 5
    },
    {
      id: 2,
      title: "Девушка в тумане",
      author: "Донато Карризи",
      image:
        "https://cv2.litres.ru/pub/c/elektronnaya-kniga/cover_415/27066425-donato-karrizi-devushka-v-tumane.jpg",
      price: 464,
      rating: 4
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case "REMOVE_BOOK_FROM_CART":
      return {
        ...state,
        items: state.items.filter(book => book.id !== action.payload)
      };
    default:
      return state;
  }
};
