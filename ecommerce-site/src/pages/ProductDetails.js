import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const product = useSelector((state) =>
    state.products.find((prod) => prod.id === parseInt(id))
  );

  if (!product) {
    return <div className="text-center mt-10">Product not found!</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full lg:w-1/2 object-cover rounded"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-600">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
