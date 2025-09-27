import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

function AllProducts() {
  const products = useSelector((state) => state.app.products);

  const [search, setSearch] = useState("");
  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 sm:gap-0">
        <h1 className="text-3xl font-bold text-gray-800">
          All Products (
          <span className="text-green-800">{filteredProducts.length}</span>)
        </h1>

        <div className="relative w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search by name or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center hover:shadow-2xl hover:scale-105 transform transition duration-300"
            >
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                className="h-40 w-40 sm:h-48 sm:w-48 object-cover rounded-lg mb-4"
              />
              <div className="w-full text-center">
                <span className="text-sm text-gray-500 uppercase">
                  {product.category}
                </span>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-700 font-medium mb-4">
                  ${product.price}
                </p>
                <Link to={`/product/cart/${product.id}`}>
                  <button className="w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full w-full py-6 flex justify-center items-center">
            <h1 className="text-2xl font-semibold text-center text-gray-700">
              Product Not Found...!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
