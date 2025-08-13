import { Link } from 'react-router-dom'
import './Navbar.css' // optional if you want to style it

const Navbar = ({}) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  )
}
export default Navbar;