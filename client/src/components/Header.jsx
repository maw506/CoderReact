import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <>
      <header className="header row d-flex mb-5">
        <div className="col-12 col-md-4">
          <CartWidget />
        </div>
        <div className="col-12 col-md-7 text-end">
          <Link to={"/"}>
            <h1>ENFOQUE CREATIVO</h1>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
