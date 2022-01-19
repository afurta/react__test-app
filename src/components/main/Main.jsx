import Card from "../card/Card";
import data from "../../data/data";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container __container">
        {data.map((elem, index) => {
          return <Card key={index} {...elem} />;
        })}
      </div>
    </div>
  );
};

export default Main;
