import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="font-bold text-white">Shopping Cart 🛒</h1>
        </Link>
        <Link to="/cart" className="text-gray-300 hover:text-white">
          View Cart
        </Link>
      </div>
    </div>
  );
}

export default Header;
