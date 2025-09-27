import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: "1200",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: "800",
      image:
        "https://images.unsplash.com/photo-1521572089244-e5aaacacca6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fFNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      name: "Headphones",
      category: "Accessories",
      price: "150",
      image:
        "https://images.unsplash.com/photo-1691649485759-2ca657415fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
    },
    {
      id: 4,
      name: "Keyboard",
      category: "Accessories",
      price: "70",
      image:
        "https://images.unsplash.com/photo-1733063926938-70a9b1766557?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGtleWJvYXJkJTIwbWVjaGFuaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Mouse",
      category: "Accessories",
      price: "50",
      image:
        "https://images.unsplash.com/photo-1629429408708-3a59f51979c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      name: "Smartwatch",
      category: "Wearables",
      price: "200",
      image:
        "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 7,
      name: "Tablet",
      category: "Electronics",
      price: "600",
      image:
        "https://images.unsplash.com/photo-1601836211234-ca6cbde9a1cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRhYmxldHMlMjBpdGFifGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Monitor",
      category: "Electronics",
      price: "300",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 9,
      name: "Gaming Chair",
      category: "Furniture",
      price: "250",
      image:
        "https://images.unsplash.com/photo-1675683446104-0637f8f53339?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fEdhbWluZyUyMENoYWlyfGVufDB8fDB8fHww",
    },
    {
      id: 10,
      name: "Printer",
      category: "Electronics",
      price: "180",
      image:
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHJpbnRlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 11,
      name: "Backpack",
      category: "Accessories",
      price: "90",
      image:
        "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 12,
      name: "Camera",
      category: "Electronics",
      price: "950",
      image:
        "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 13,
      name: "Speakers",
      category: "Electronics",
      price: "220",
      image:
        "https://images.unsplash.com/photo-1601120289684-658fb970fe6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fFNwZWFrZXJzfGVufDB8fDB8fHww",
    },
    {
      id: 14,
      name: "Drone",
      category: "Electronics",
      price: "1300",
      image:
        "https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmVzfGVufDB8fDB8fHww",
    },
    {
      id: 15,
      name: "Power Bank",
      category: "Accessories",
      price: "60",
      image:
        "https://images.unsplash.com/photo-1706275399512-81a6c7267234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fFBvd2VyJTIwQmFua3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 16,
      name: "External Hard Drive",
      category: "Accessories",
      price: "110",
      image:
        "https://images.unsplash.com/photo-1602493054445-4a0b4fa7fdd6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEV4dGVybmFsJTIwSGFyZCUyMERyaXZlfGVufDB8fDB8fHww",
    },
    {
      id: 17,
      name: "Smart TV",
      category: "Electronics",
      price: "1400",
      image:
        "https://images.unsplash.com/photo-1615986200762-a1ed9610d3b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNtYXJ0JTIwVFZ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 18,
      name: "VR Headset",
      category: "Electronics",
      price: "500",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dnIlMjBoZWFkc2V0fGVufDB8fDB8fHww",
    },
    {
      id: 19,
      name: "Bluetooth Speaker",
      category: "Accessories",
      price: "120",
      image:
        "https://images.unsplash.com/photo-1589001181560-a8df1800e501?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Qmx1ZXRvb3RoJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 20,
      name: "Microwave Oven",
      category: "Appliances",
      price: "350",
      image:
        "https://plus.unsplash.com/premium_photo-1661439756811-e9b4bc978778?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fE1pY3Jvd2F2ZSUyME92ZW58ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 21,
      name: "Air Conditioner",
      category: "Appliances",
      price: "1100",
      image:
        "https://images.unsplash.com/photo-1681042803902-f79c240d8f03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fEFpciUyMENvbmRpdGlvbmVyfGVufDB8fDB8fHww",
    },
    {
      id: 22,
      name: "Refrigerator",
      category: "Appliances",
      price: "1600",
      image:
        "https://images.unsplash.com/photo-1716193696093-9c54b6a290e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmVmcmlnZXJhdG9yfGVufDB8fDB8fHww",
    },
    {
      id: 23,
      name: "Washing Machine",
      category: "Appliances",
      price: "900",
      image:
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2FzaGluZyUyME1hY2hpbmV8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 24,
      name: "Electric Kettle",
      category: "Appliances",
      price: "45",
      image:
        "https://images.unsplash.com/photo-1738520420636-a1591b84723e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWxlY3RyaWMlMjBLZXR0bGV8ZW58MHx8MHx8fDA%3D",
    },
  ],
};
export const productSlice = createSlice({
  name: "productCurd",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      product.name = action.payload.name;
      product.category = action.payload.category;
      product.price = action.payload.price;
      product.image = action.payload.image;
    },
  },
});

export const { addProduct, updateProduct, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
