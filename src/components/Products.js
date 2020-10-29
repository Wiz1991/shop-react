import '../styles/products.css';
import Product from './Product';
function Products(props) {
  return (
    <div className="container">
      <div className="row">
        {props.products.map((product, index) => {
          return (
            <Product
              src={product.src}
              name={product.name}
              price={product.price}
              onClick={props.onClick}
              key={index}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Products;
