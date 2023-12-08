const ItemListContainer = ({ greeting }) => {
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
            <h5 className="card-title">nombre del articlo</h5>
            <p className="card-text">
              valores importanets como precio y una breve descripcion
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
