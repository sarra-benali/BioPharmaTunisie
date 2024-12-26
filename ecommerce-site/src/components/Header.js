import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

const Header = () => (
  <header className="bg-gray-800 text-white">
    <nav className="container mx-auto flex justify-between items-center p-4">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">My Store</Link>

      {/* Navigation Menu */}
      <ul className="flex gap-6 items-center">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/products" className="hover:text-gray-300">Our Products</Link>
        <Link to="/about" className="hover:text-gray-300">About Us</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
      </ul>

      {/* Search and Icons */}
      <div className="flex items-center gap-4">
        {/* Search Field */}
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-700 text-white rounded px-4 py-1 outline-none focus:ring-2 focus:ring-gray-500"
        />

        {/* User Icon */}
        <Link to="/login" className="flex items-center gap-2 hover:text-gray-300">
          <UserIcon className="h-6 w-6" />
          <span>Login / Register</span>
        </Link>

        {/* Cart Icon */}
        <Link to="/cart">
          <ShoppingCartIcon className="h-6 w-6 hover:text-gray-300" />
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
