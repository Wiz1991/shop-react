import '../styles/products.css';

function Products(props) {
  return (
    <div className="container">
      <div className="row">
        {props.products.map((product,index) => {
          return (
            <div className="col-md-3 col-sm-6" key={index}>
              <div className="product-grid4">
                <div className="product-image4">
                  <img src={product.src} />
                </div>
                <div className="product-content">
                  <h3 className="title">{product.name}</h3>
                  <div className="price">${product.price}</div>
                  <button className="add-to-cart">ADD TO CART</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Products;
