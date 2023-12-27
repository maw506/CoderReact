const CardArticle = ({
  name = "nombre del articlo",
  description = "valores importanets como precio y una breve descripcion",
  img,
}) => {
  return (
    <>
      <div className="container_card">
        <div className="card">
          <img
            src={img}
            className="card-img-top"
            alt="imagen del producto"
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </>
  ); 
};

export default CardArticle;



