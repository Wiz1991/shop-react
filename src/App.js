import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import data from './components/productData.js';
import { useState } from 'react';

function App() {
  const [cart, setCartItems] = useState([]);
  const [products, setProducts] = useState(data);

  function handleClick(e) {
    let item = products.find((product) => product.id == e.target.id);
    const exists = cart.some((el) => el.id == item.id);
    if (!exists) {
      let product = {
        ...item,
        quantity: 1,
      };
      setCartItems([...cart, product]);
    } else {
      let updatedCart = [...cart];
      updatedCart.find((item) => item.id == e.target.id).quantity++;
      setCartItems(updatedCart);
    }
  }
  function onChangeProductQuantity(id, e) {
    const value = e.target.value;
    const valueInt = parseInt(value);
    let updatedCart = [...cart];
    let item = updatedCart.find((item) => item.id == id);

    if (value === '') {
      item.quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      item.quantity = valueInt;
    }
    setCartItems(updatedCart);
  }
  function onRemoveProduct(id) {
    console.log(id);
    let updatedCart = [...cart];
    updatedCart = updatedCart.filter((product) => product.id != id);
    setCartItems(updatedCart);
  }

  return (
    <Router>
      <Nav cartSize={cart.length} />
      <Switch>
        <Route exact path="/shop-react" component={Home} />
        <Route exact path="/products">
          <Products products={products} onClick={handleClick} />
        </Route>
        <Route exact path="/cart">
          <Cart
            products={cart}
            onChangeProductQuantity={onChangeProductQuantity}
            onRemoveProduct={onRemoveProduct}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
