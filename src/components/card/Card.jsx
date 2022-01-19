import "./Card.css";

const Card = props => {
  let link = process.env.PUBLIC_URL;

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
      <a
        className="card__btn"
        style={{ background: `${props.CategoryColor}` }}
        href={link + `/article/${props.id}`}
      >
        Call to action
      </a>
    </div>
  );
};

export default Card;
