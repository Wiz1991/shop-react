import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Nav({ cartSize }) {
  return (
    <header className="header">
      <h1 className="logo">
        <Link className="link" to="/">
          Shopify
        </Link>
      </h1>
      <ul className="main-nav">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="link" to="/cart">
            <span className="p1 fa-stack  has-badge" data-count={cartSize}>
              <i
                className="p3 fa fa-shopping-cart fa-stack-2x xfa-inverse"
                data-count="4b"></i>
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Nav;
