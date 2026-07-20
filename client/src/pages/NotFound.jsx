import { Link } from "react-router-dom";

export default function NotFound() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6">

      <div className="bg-white shadow-2xl rounded-3xl p-10 text-center max-w-lg w-full">

        <h1 className="text-8xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-4">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          🏠 Back to Home
        </Link>

      </div>

    </div>

  );

}