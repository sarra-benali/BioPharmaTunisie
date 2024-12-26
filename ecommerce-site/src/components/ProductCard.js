import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg">
    <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
    <h2 className="text-lg font-bold mt-2">{product.name}</h2>
    <p className="text-gray-600">${product.price}</p>
    <Link
      to={`/product/${product.id}`}
      className="mt-2 inline-block bg-blue-500 text-white py-1 px-4 rounded"
    >
      View Details
    </Link>
  </div>
);

export default ProductCard;
