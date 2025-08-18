import { Link } from 'react-router-dom';
import './Navbar.css'; // optional if you want to style it

const Navbar = ({ cartQuantity }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">
        🛒
        {cartQuantity > 0 && (
          <span className="cart-count" data-testid="cart-count">
            {' '}
            {cartQuantity}
          </span>
        )}
      </Link>
    </nav>
  );
};
export default Navbar;
