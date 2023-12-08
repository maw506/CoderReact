const CardArticle = ({
  title = "nombre del articlo",
  description = "valores importanets como precio y una breve descripcion",
  img,
}) => {
  //los valores que esta hardcode ahora deberia de recibirsde por props
  return (
    <>
      <div className="container_card">
        <div className="card">
          <img
            src="../img/camara_nikon.jpg"
            className="card-img-top"
            alt="imagen del producto"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardArticle;
