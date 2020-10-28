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

  return (
    <Router>
      <Nav cartSize={cart.length} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products">
          <Products products={products} />
        </Route>
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
