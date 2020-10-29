import { Link } from 'react-router-dom';
import '../styles/cart.css'

function Header(props) {
  const itemCount = props.products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);

  return (
    <header className="container">
      <h1>Shopping Cart</h1>

      <ul className="breadcrumb">
        <li>Home</li>
        <li>Cart</li>
      </ul>

      <span className="count">{itemCount} items in the cart</span>
    </header>
  );
}

function ProductList(props) {
  return (
    <section className="container">
      <ul className="products">
        {props.products.map((product, index) => {
          return (
            <li className="row" key={index}>
              <div className="col left">
                <div className="thumbnail">
                  <a>
                    <img src={product.src} alt={product.name} />
                  </a>
                </div>
                <div className="detail">
                  <div className="name">
                    <a>{product.name}</a>
                  </div>
                  <div className="price">{formatCurrency(product.price)}</div>
                </div>
              </div>

              <div className="col right">
                <div className="quantity">
                  <input
                    type="text"
                    className="quantity"
                    step="1"
                    value={product.quantity}
                    onChange={props.onChangeProductQuantity.bind(this, product.id)}
                  />
                </div>

                <div className="remove">
                  <svg
                    onClick={props.onRemoveProduct.bind(this, product.id)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Summary(props) {
  const total = props.products.reduce((total, product) => {
    return total + product.price * +product.quantity;
  }, 0);

  return (
    <section className="container">
      <div className="promotion">
        <label htmlFor="promo-code">Have A Promo Code?</label>
        <input type="text" />
        <button type="button"/>
      </div>
      <div className="summary">
        <ul>
          <li className="total">
            Total <span>{formatCurrency(total)}</span>
          </li>
        </ul>
      </div>

      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </section>
  );
}



function Cart(props) {
  return (
    <div class="cart-container">
      <Header products={props.products} />

      {props.products.length > 0 ? (
        <div>
          <ProductList
            products={props.products}
            onChangeProductQuantity={props.onChangeProductQuantity}
            onRemoveProduct={props.onRemoveProduct}
          />

          <Summary
            products={props.products}
          />
        </div>
      ) : (
        <div className="empty-product">
          <h3>There are no products in your cart.</h3>
          <Link className="start" to="/products">Shopping now</Link>
        </div>
      )}
    </div>
  );
}

export default Cart;



function formatCurrency(value) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}