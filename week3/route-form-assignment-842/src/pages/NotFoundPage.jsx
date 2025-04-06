import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold">404 - Page Not Found</h2>
        <Link to="/" className="text-blue-500 hover:underline mt-4 block">Go back to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
