import { Link } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import heroImage from '../assets/vitaminC.png'; // Adjust the path as necessary
import logo from '../assets/Bio.png'; // Import your logo image

const HeroSection = () => (
  <div className="bg-white text-gray-800 min-h-screen flex flex-col">
    {/* Header */}
    <header>
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="My Store Logo" className="h-30 w-40" /> {/* Adjust the height as needed */}
        </Link>

        {/* Navigation Menu */}
        <ul className="flex gap-6 items-center">
          <Link to="/" className="hover:text-gray-500">Home</Link>
          <Link to="/products" className="hover:text-gray-500">Our Products</Link>
          <Link to="/about" className="hover:text-gray-500">About Us</Link>
          <Link to="/contact" className="hover:text-gray-500">Contact Us</Link>
        </ul>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          {/* Search Field */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 text-gray-800 rounded px-4 py-1 outline-none focus:ring-2 focus:ring-gray-500"
          />

          {/* User Icon */}
          <Link to="/login" className="flex items-center gap-2 hover:text-gray-500">
            <UserIcon className="h-6 w-6" />
            <span>Login / Register</span>
          </Link>

          {/* Cart Icon */}
          <Link to="/cart">
            <ShoppingCartIcon className="h-6 w-6 hover:text-gray-500" />
          </Link>
        </div>
      </nav>
    </header>

    {/* Hero Content */}
    <div className="flex-1 flex flex-col lg:flex-row justify-center items-center text-center lg:text-left container mx-auto py-20 gap-10">
      {/* Text Section */}
      <div className="lg:w-1/2 lg:pl-20"> {/* Added padding-left */}
        <h1 className="text-4xl font-bold mb-4">
          The Best Sustainable & Organic Vitamins and Supplements
        </h1>
        <p className="text-lg mb-6">
          When it comes to your health, of course, you want the very best. Not just for you, but also for the planet. Looking for vitamins and health supplements can be daunting and difficult as most companies lack ingredient traceability and full transparency on their sustainability efforts.
        </p>
        <Link 
          to="/products"
          className="bg-gray-800 text-white px-6 py-2 rounded font-medium hover:bg-gray-700"
        >
          Shop Now
        </Link>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={heroImage} // Using the imported image
          alt="Hero Section"
          className="rounded-lg w-full max-w-md"
        />
      </div>
    </div>
  </div>
);

export default HeroSection;
