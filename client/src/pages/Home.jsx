import React from "react";
import ItemListContainer from "../components/ItemListContainer";

const Home = () => {
  return (
    <>
      <article className="container">
        <h2 className="text-center">HOME PAGE</h2>
        <section className="row d-flex mt-5">
          <ItemListContainer />
        </section>
      </article>
    </>
  );
};

export default Home;
