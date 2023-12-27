import { useParams } from "react-router-dom";
import { elements } from "../extra/elements";
import CardArticle from "./CardArticle";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const articulos = elements;

  const article = articulos.find((articulo) => articulo.id.toString() === id);
  // Actualmente solo traigo la tarjeta con el artículo para mostrar los datos,
  // pero lo ideal sería generar una vista nueva con todos los detalles y especificaciones del artículo seleccionado.
  return (
    <>
      <article className="container">
        <section className="row d-flex"></section>
        <h1>NOMBRE DEL PRODUCTO</h1>
        <p>Item ID: {id}</p>
        <p>DETALLE:</p>
        <img src="" alt="Imagen del producto" />
        <CardArticle
          name={article.name}
          description={article.description}
          img={article.img}
        />
      </article>
    </>
  );
};

export default ItemDetailContainer;
