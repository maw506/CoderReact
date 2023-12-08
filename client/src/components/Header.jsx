import CartWidget from "./CartWidget";

const Header = () => {
  return (
    <>
      <header className="header row d-flex mb-5">
        <div className="col-12 col-md-6 text-start">
          <h1>MI TIENDA</h1>
          {/* <img src="./img/" alt="logo" /> */}
        </div>
        <div className="col-12 col-md-6 text-end">
          <CartWidget />
        </div>
      </header>
    </>
  );
};

export default Header;
