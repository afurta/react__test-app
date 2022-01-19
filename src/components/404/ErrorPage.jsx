import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error__page __container">
      <div className="error">
        <div>Page not found</div>
        <Link to="/" className="">
          Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
