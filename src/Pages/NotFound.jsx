import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="text-9xl font-extrabold text-gray-300 mb-4">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
