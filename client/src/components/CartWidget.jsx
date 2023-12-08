const CartWidget = ({ cant = "3" }) => {
  return (
    <>
      <div className="cart-widget">
        <i className="bi bi-cart4 h1 text-light"></i>
        <div className="qty-display">{cant}</div>
      </div>
    </>
  );
};

export default CartWidget;
