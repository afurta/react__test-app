import { Link } from "react-router-dom";
import "./Card.css";

const Card = props => {
  return (
    <div className="card">
      <div
        className="card__category"
        style={{ background: `${props.CategoryColor}` }}
      >
        Category {props.Category === "" ? "" : `| ${props.Category}`}
      </div>
      <div
        className="card__img"
        style={
          props.imgSource
            ? {
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + `/img/${props.imgSource}`
                })`,
              }
            : { background: `${props.Photo}` }
        }
      ></div>
      <div className="card__author" style={{ color: `${props.CategoryColor}` }}>
        {props.Author}
      </div>
      <div className="card__header">{props.header}</div>
      <div className="card__text">{props.Text}</div>
      <Link
        to={"/article/" + `${props.id}`}
        className="card__btn"
        style={{ background: `${props.CategoryColor}` }}
        // href={`/article/${props.id}`}
      >
        Call to action
      </Link>
    </div>
  );
};

export default Card;
