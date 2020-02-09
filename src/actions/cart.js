export const addBookToCard = book => ({
  type: "ADD_BOOK_TO_CART",
  payload: book
});

export const removeBookFromCart = book => ({
  type: "REMOVE_BOOK_FROM_CART",
  payload: book
});
