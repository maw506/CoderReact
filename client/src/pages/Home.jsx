import React from "react";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  return (
    <>
      <article className="container">
        <h1 className="text-center">BIENVENIDO A MI TIENDA</h1>
        <section className="row d-flex mt-5">
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <ItemListContainer />
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <ItemListContainer />
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <ItemListContainer />
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-4">
            <ItemListContainer />
          </div>
        </section>
      </article>
    </>
  );
};

export default Home;
