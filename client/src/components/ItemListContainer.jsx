import React from "react";
import { useParams, Link } from "react-router-dom";
import CardArticle from "./CardArticle";
import { elements } from "../extra/elements";

const ItemListContainer = ({ greeting }) => {
  const { categoria } = useParams();

  const articulos = elements;

  // Verifica si la categoría está presente o si es la página de inicio
  const isHomePage = !categoria;

  // Filtra los artículos según la categoría o muestra todos si es la página de inicio
  const filteredArticulos = isHomePage
    ? articulos
    : articulos.filter(
        (articulo) => articulo.category.toString() === categoria
      );

  return (
    <>
      <div className="container">
        <div className="row d-flex">
          {!isHomePage && (
            <h1 className="text-center">
              {categoria === "1"
                ? "CAMARAS"
                : categoria === "2"
                ? "FLASHES"
                : "LENTES"}
            </h1>
          )}
          {filteredArticulos && filteredArticulos.length > 0 ? (
            filteredArticulos.map((articulo) => (
              <div
                key={articulo.id}
                className="col-12 col-sm-12 col-md-4 col-lg-4"
              >
                <Link to={`/detalle/${articulo.id}`}>
                  <CardArticle
                    name={articulo.name}
                    description={articulo.description}
                    img={articulo.img}
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>No se encontraron artículos.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
