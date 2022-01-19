import React from "react";
import "./BookListItem";

const BookListItem = ({ name, author }) => {
  return (
    <div className="col s12 m3">
      <div className="card blue-grey darken-1">
        <div className="cardClose">
          <i
            // data-id={id}
            className="small material-icons"
            // onClick={e => deleteHandler(e)}
          >
            close
          </i>
        </div>
        <div className="cardEdit">
          <i
            className="small material-icons"
            // data-id={id}
            // onClick={editForm}
          >
            edit
          </i>
        </div>
        <div className="card-content white-text">
          {/* <img src={img} height="205px" width="145px" alt="img" /> */}
          <span className="card-title">{name}</span>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
};

export default BookListItem;
