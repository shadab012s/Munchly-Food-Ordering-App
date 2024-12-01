import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Have questions or feedback? We’d love to hear from you. Reach out to us, and we’ll respond as soon as possible.
        </p>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:w-1/2 xl:w-1/3 mx-auto">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-pink-50"
              />
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-pink-50"
              />
            </div>
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-pink-50"
              />
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h2>
          <p className="text-gray-600">
            <span className="font-medium">Email:</span> support@munchly.com
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Phone:</span> +1-234-567-890
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Address:</span> New Delhi, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
