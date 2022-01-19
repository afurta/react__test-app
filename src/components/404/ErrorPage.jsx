import { NavLink } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error__page __container">
      <div className="error">
        <div>Page not found</div>
        <NavLink to={process.env.PUBLIC_URL} className="">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
