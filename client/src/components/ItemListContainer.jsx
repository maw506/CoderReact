import CardArticle from "./CardArticle";

const ItemListContainer = ({ greeting }) => {
  //aun esta hardcode pero esto deberia de maparse para algunos articulos o los principales
  return (
    <>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <CardArticle />
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <CardArticle />
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <CardArticle />
      </div>
      <div className="col-12 col-sm-12 col-md-4 col-lg-4">
        <CardArticle />
      </div>
    </>
  );
};

export default ItemListContainer;
