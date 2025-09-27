import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 px-6 py-6 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0">
        <div className="text-sm text-center md:text-center">
          &copy; 2025 MyStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
