import React, { useContext } from "react";
import { CustomContext } from "../../context/context";
import BookListItem from "./BookListItem/BookListItem";

const BookList = () => {
  const books = useContext(CustomContext).books;
  return (
    <div className="row ">
      <div
        className="listBooks_add-btn"
        // onClick={showForm}
      >
        <i className="material-icons medium">add</i>
      </div>
      <div className="books__container ">
        {books.map((elem, index) => (
          <BookListItem {...elem} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
