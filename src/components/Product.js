const { default: Products } = require('./Products');

function Product(props) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid4">
        <div className="product-image4">
          <img src={props.src} />
        </div>
        <div className="product-content">
          <h3 className="title">{props.name}</h3>
          <div className="price">${props.price}</div>
          <button id={props.id} onClick={props.onClick} className="add-to-cart">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
export default Product;
