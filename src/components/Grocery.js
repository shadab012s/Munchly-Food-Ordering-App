import React from "react";

const Grocery = () => {
  return (
    <div className="bg-green-50 py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-green-800 mb-6">
          Welcome to Our Grocery Store!
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Your one-stop destination for fresh, healthy, and organic groceries. We’ll be adding lots of exciting features soon!
        </p>

        {/* Image */}
        <div className="text-center mb-12">
          <img
            src="https://via.placeholder.com/800x400.png?text=Fresh+Groceries"
            alt="Grocery Store"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Description */}
        <div className="text-center mb-6">
          <p className="text-lg text-gray-700 mb-4">
            Explore a wide range of grocery products including fruits, vegetables, dairy, grains, snacks, and more. We are committed to providing high-quality products at affordable prices.
          </p>
          <p className="text-lg text-gray-700">
            Stay tuned for our upcoming features like product filtering, user reviews, and a personalized shopping experience.
          </p>
        </div>

        
        
      </div>
    </div>
  );
};

export default Grocery;
