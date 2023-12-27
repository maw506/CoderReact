import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  return (
    <>
      <article className="container">
        <section className="row d-flex"></section>
        <h1>NOMBRE DEL PRODUCTO</h1>
        <p>Item ID: {id}</p>
        <p>DETALLE:</p>
        <img src="" alt="Imagen del producto" />
      </article>
    </>
  );
};

export default ItemDetailContainer;
