import React from "react";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  return (
    <>
      <article className="container">
        <h1 className="text-center">BIENVENIDO A MI TIENDA</h1>
        <section className="row d-flex mt-5">
          <ItemListContainer />
        </section>
      </article>
    </>
  );
};

export default Home;
