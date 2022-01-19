import { Link } from "react-router-dom";
import data from "../../data/data";
import "./cardItem.css";

const CardItem = () => {
  const article = window.location.pathname.split("/");
  const item = data.filter(elem => elem.id == article[article.length - 1])[0];
  return (
    <div className="cardItem">
      <div className="cardItem__container __container">
        {item === undefined ? (
          <div className="error">
            <div>Page not found</div>
            <Link className="" to="/">
              Home
            </Link>
          </div>
        ) : (
          <div className="cardItem__card card">
            <div
              className="card__category"
              style={{ background: `${item.CategoryColor}` }}
            >
              Category {item.Category === "" ? "" : `| ${item.Category}`}
            </div>
            <div
              className="card__img"
              style={
                item.imgSource
                  ? {
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + `/img/${item.imgSource}`
                      })`,
                    }
                  : { background: `${item.Photo}` }
              }
            ></div>

            <div
              className="card__author"
              style={{ color: `${item.CategoryColor}` }}
            >
              {item.Author}
            </div>
            <div className="card__header">{item.header}</div>
            <div className="card__text">{item.Text}</div>
            <Link
              to="/"
              className="card__btn"
              style={{ background: `${item.CategoryColor}` }}
            >
              Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardItem;
