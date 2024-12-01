

// import React, { useContext } from "react";
// import { Link } from "react-router-dom";

// import UserContext from "../utils/UserContext";
// import appstoreImg from"./img/app.jpg";
// import playstoreImg from"./img/play.jpg";
// import payImg from"./img/pay.jpg";

// const Footer = () => {
//   const data = useContext(UserContext); // Access user data from context

//   return (
//     <footer className="flex justify-between bg-pink-50 shadow-2xl sm:bg-yellow-50 lg:bg-purple-50 p-4 mt-auto">
//       {/* Left Section */}
//       <div className="text-sm">
//         <p>&copy; 2024 Munchly. All rights reserved.</p>
//         <p className="text-gray-500">Satisfy your cravings!</p>
//       </div>

//       {/* Center Links */}
//       <div className="flex items-center">
//         <ul className="flex space-x-4 text-sm">
//           {/* <li> <Link to="/about"> about us
            
//           </li> */}
        
//             <li>
//             <Link to="/about" className="hover:text-gray-700">
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-gray-700">
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/privacy" className="hover:text-gray-700">
//               Privacy Policy
//             </Link>
//           </li>
//           <li>
//             <Link to="/terms" className="hover:text-gray-700">
//               Terms of Service
//             </Link>
//           </li>
//         </ul>
//       </div>

//       {/* Right Section */}
//       <div className="text-sm">
//         <p className="font-semibold">Logged in as:</p>
//         <p className="font-bold">{data.loggedInUser || "Guest"}</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext"; // Adjust the import if the path is different

import appstoreImg from './img/app.jpg';
import playstoreImg from './img/play.jpg';
import payImg from './img/pay.png';

const Footer = () => {
  const data = useContext(UserContext); // Access user data from context

  return (
    <footer className="flex flex-wrap justify-between bg-pink-50 shadow-2xl sm:bg-yellow-50 lg:bg-purple-50  p-4 mt-auto">
      {/* Left Section */}
      <div className="w-full sm:w-1 lg:w-1/4 mb-4">
        <h4 className="text-lg font-semibold">Contact</h4>
        <p><strong>Address:</strong> New Delhi</p>
        <p><strong>Phone:</strong> <a href="tel:+11111250" className="text-blue-600 hover:underline">Call us</a></p>
        <h4 className="text-lg font-semibold mt-4">Follow Us</h4>
        <div className="flex space-x-4 mt-2">
          <i className="fab fa-facebook-f cursor-pointer hover:text-blue-600"></i>
          <i className="fab fa-twitter cursor-pointer hover:text-blue-400"></i>
          <i className="fab fa-instagram cursor-pointer hover:text-pink-500"></i>
          <i className="fab fa-pinterest-p cursor-pointer hover:text-red-600"></i>
          <i className="fab fa-youtube cursor-pointer hover:text-red-700"></i>
        </div>
      </div>

      {/* Center Links Section */}
      <div className="w-full sm:w-1/4 lg:w-1/4 mb-4">
        <h4 className="text-lg font-semibold">About</h4>
        <ul>
          <li><Link to="/about" className="text-sm text-gray-700 hover:underline">About Us</Link></li>
          <li><Link to="/delivery" className="text-sm text-gray-700 hover:underline">Delivery Information</Link></li>
          <li><Link to="/terms" className="text-sm text-gray-700 hover:underline">Terms & Conditions</Link></li>
          <li><Link to="/contact" className="text-sm text-gray-700 hover:underline">Contact Us</Link></li>
        </ul>
      </div>

      {/* My Account Section */}
      <div className="w-full sm:w-1/4 lg:w-1/4 mb-4">
        <h4 className="text-lg font-semibold">My Account</h4>
        <ul>
          <li><Link to="/login" className="text-sm text-gray-700 hover:underline">Sign In</Link></li>
          <li><Link to="/cart" className="text-sm text-gray-700 hover:underline">View Cart</Link></li>
          <li><Link to="/wishlist" className="text-sm text-gray-700 hover:underline">My Wishlist</Link></li>
          <li><Link to="/track-order" className="text-sm text-gray-700 hover:underline">Track My Order</Link></li>
          <li><Link to="/help" className="text-sm text-gray-700 hover:underline">Help</Link></li>
        </ul>
      </div>

      {/* Install App Section */}
      <div className="w-full sm:w-1/4 lg:w-1/4 mb-4">
        <h4 className="text-lg font-semibold">Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="flex space-x-4 mt-2">
          <img src={appstoreImg} alt="App Store" className="w-32 h-10 object-contain border rounded-md" />
          <img src={playstoreImg} alt="Play Store" className="w-32 h-10 object-contain border rounded-md" />
        </div>
        <p className="mt-4">Secured Payment Gateways</p>
        <img src={payImg} alt="Payment Methods" className="w-32 h-10 object-contain" />
      </div>

      {/* Bottom Copyright */}
      <div className="w-full text-center mt-4">
        <p className="text-sm text-gray-600">&copy; Munchly {new Date().getFullYear()}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
