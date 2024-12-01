import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err); // Inspect the error object structure

  // Safely access status and statusText, with fallback values
  const status = err?.status || "Unknown Error";
  const statusText = err?.statusText || "Something went wrong. Please try again later.";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h1 className="text-5xl font-extrabold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Error {status}</h2>
        <h3 className="text-xl text-gray-600 mb-4">{statusText}</h3>
        <p className="text-lg text-gray-500 mb-6">
          Something went wrong while loading the page. Don't worry, we're already working on it.
        </p>
        <a
          href="/"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
