import React, { createContext, useState } from "react";

export const CustomContext = createContext();

export const Context = props => {
  const [books, setBooks] = useState([
    { name: "Книга 1", author: "Автор 1" },
    { name: "Книга 2", author: "Автор 2" },
    { name: "Книга 3", author: "Автор 3" },
  ]);

  const updateState = () => {};
  // const deleteBook
  const value = {
    books,
  };
  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
