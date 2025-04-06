import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const FavouriteDetailPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const size = searchParams.get("size");

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-green-100">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-xl font-bold">Favourite Detail Page</h1>
          <p className="mt-4">
            {query && size
              ? `Your favourite post is ${query}. Post ID is ${id}. Size is ${size}.`
              : `Post ID is ${id}. No additional details provided.`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavouriteDetailPage;
