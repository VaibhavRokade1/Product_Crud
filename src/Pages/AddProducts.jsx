import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";
import { toast, ToastContainer } from "react-toastify";

function AddProducts() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.category &&
      formData.image &&
      formData.price
    ) {
      dispatch(addProduct(formData));
      setFormData({ name: "", category: "", price: "", image: "" });
      toast.success("Product Added Successfully...");
    } else {
      toast.warning("All fields are required!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Add New Product
      </h1>

      {/* Form */}
      <form className="bg-white shadow-lg rounded-lg p-6 space-y-6">
        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-gray-700 font-medium">
            Product Name
          </label>
          <input
            value={formData.name}
            onChange={handleFormData}
            name="name"
            type="text"
            placeholder="Enter product name"
            className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-gray-700 font-medium">Category</label>
          <select
            onChange={handleFormData}
            name="category"
            value={formData.category}
            className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Clothing">Clothing</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-gray-700 font-medium">Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleFormData}
            placeholder="Enter price"
            className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <label className="w-1/3 text-gray-700 font-medium">Image URL</label>
          <input
            type="text"
            placeholder="Enter image URL"
            value={formData.image}
            name="image"
            onChange={handleFormData}
            className="w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleAddProduct}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            Add Product
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default AddProducts;
