

import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../utils/UserContext";

const Footer = () => {
  const data = useContext(UserContext); // Access user data from context

  return (
    <footer className="flex justify-between bg-pink-50 shadow-2xl sm:bg-yellow-50 lg:bg-green-50 p-4 mt-auto">
      {/* Left Section */}
      <div className="text-sm">
        <p>&copy; 2024 Munchly. All rights reserved.</p>
        <p className="text-gray-500">Satisfy your cravings!</p>
      </div>

      {/* Center Links */}
      <div className="flex items-center">
        <ul className="flex space-x-4 text-sm">
          {/* <li> <Link to="/about"> about us
            
          </li> */}
        
            <li>
            <Link to="/about" className="hover:text-gray-700">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-700">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:text-gray-700">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/terms" className="hover:text-gray-700">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="text-sm">
        <p className="font-semibold">Logged in as:</p>
        <p className="font-bold">{data.loggedInUser || "Guest"}</p>
      </div>
    </footer>
  );
};

export default Footer;
