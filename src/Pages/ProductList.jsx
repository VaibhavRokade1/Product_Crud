import { useEffect, useState } from "react";
import { CgClose, CgModem } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateProduct } from "../features/productSlice";

function ProductList() {
  const products = useSelector((state) => state.app.products);
  const [search, setSearch] = useState("");
  const [modalProduct, setModalProduct] = useState(null);

  const [modalData, setModalData] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    if (modalProduct) {
      setModalData({
        id: modalProduct.id,
        name: modalProduct.name,
        category: modalProduct.category,
        price: modalProduct.price,
        image: modalProduct.image,
      });
    }
  }, [modalProduct]);

  const handleUpdateProduct = (e) => {
    const { name, value } = e.target;
    setModalData({ ...modalData, [name]: value });
  };

  const saveUpdates = (e) => {
    e.preventDefault();
    dispatch(updateProduct(modalData));
    setModalData({
      id: "",
      name: "",
      category: "",
      price: "",
      image: "",
    });
    setModalProduct(null);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const dispatch = useDispatch();

  const filteredProducts = products.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredProducts.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredProducts.length / recordsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Product List
      </h1>

      <div className="flex justify-between items-center w-full mb-4">
        <h2 className="text-2xl font-bold">
          All Products ({filteredProducts.length})
        </h2>
        <input
          type="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search products..."
          className="w-1/3 px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Id</th>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords.map((item, index) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="py-2 px-4">{indexOfFirstRecord + index + 1}</td>
                <td className="py-2 px-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 object-cover rounded"
                  />
                </td>
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.category}</td>
                <td className="py-2 px-4">${item.price}</td>
                <td className="py-2 px-4 text-center space-x-4">
                  <button
                    onClick={() => setModalProduct(item)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 cursor-pointer transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteProduct(item.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages).keys()].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === num + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {num + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-lg px-5 p-3 w-96 shadow-lg">
            <div className="flex items-center py-3 justify-between">
              <h2 className="text-2xl font-bold">Modify Product</h2>
              <button
                onClick={() => setModalProduct(null)}
                className="bg-red-600 text-white p-2 cursor-pointer rounded"
              >
                <CgClose />
              </button>
            </div>

            <hr className="text-gray-500 " />

            <div className="flex-col relative">
              <div className="font-bold text-gray-600 py-1">Preview :</div>

              {modalData.image ? (
                <img
                  src={modalData.image}
                  alt="Product Image"
                  className="bg-amber-100 w-full h-40 rounded-2xl object-contain"
                />
              ) : (
                <div className="bg-amber-100 w-full h-40 rounded-2xl flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>

            <form>
              <div className="flex-col gap-4">
                <div className="flex justify-between items-center mt-4">
                  <label
                    htmlFor="name"
                    className="w-25 font-medium text-gray-700"
                  >
                    Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={modalData.name}
                    onChange={handleUpdateProduct}
                    className="w-75 px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-blue-500s"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <label
                    htmlFor="category"
                    className="w-25 font-medium text-gray-700"
                  >
                    Category :
                  </label>
                  <input
                    id="category"
                    type="text"
                    name="category"
                    value={modalData.category}
                    onChange={handleUpdateProduct}
                    className="w-75 px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-blue-500s"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <label
                    htmlFor="name"
                    className="w-25 font-medium text-gray-700"
                  >
                    Price :
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={modalData.price}
                    onChange={handleUpdateProduct}
                    className="w-75 px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-blue-500s"
                  />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <label
                    htmlFor="image"
                    className="w-25 font-medium text-gray-700"
                  >
                    Image Url :
                  </label>
                  <input
                    id="image"
                    type="text"
                    name="image"
                    value={modalData.image}
                    onChange={handleUpdateProduct}
                    className="w-75 px-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex gap-2 justify-center py-4">
                  <button
                    onClick={saveUpdates}
                    type="button"
                    className="w-full bg-green-600 hover:bg-green-700 text-white p-2 px-4 cursor-pointer rounded"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
