

import React, { useContext } from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

const About = () => {
  const { loggedInUser } = useContext(UserContext); // Using useContext to access loggedInUser directly

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-12">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">About Us</h1>

        {/* Dynamic User Info */}
        {loggedInUser ? (
          <div className="mb-6">
            <p className="text-lg text-gray-600">
              Welcome back, <span className="text-blue-600">{loggedInUser}</span>! We're happy to have you here.
            </p>
          </div>
        ) : (
          <div className="mb-6">
            <p className="text-lg text-gray-600">
              Hello, Guest! Please log in to enjoy a personalized experience.
            </p>
          </div>
        )}

        {/* About Munchly Project */}
        <div className="mb-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Munchly</h2>
          <p className="text-lg text-gray-700 mb-4">
            Munchly is a user-friendly food ordering platform that connects you with the best local restaurants. Whether you’re craving a quick snack or a full meal, Munchly makes ordering easy, fast, and fun.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Built using modern web technologies like React, Tailwind CSS, and Jest, Munchly ensures a smooth and responsive experience across
          </p>
          <p className="text-lg text-gray-700">
            Join Munchly today and enjoy a seamless food ordering experience at your fingertips!
          </p>
        </div>

        {/* User Component */}
        <div className="mb-6">
          <User name={"Munchly"} location={"Delhi"} />
        </div>

        {/* UserClass Component */}
        <div>
          <UserClass name={"Munchly"} location={"Delhi"} />
        </div>
      </div>
    </div>
  );
};

export default About;
