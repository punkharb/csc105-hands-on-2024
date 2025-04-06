import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const FavouritesPage = () => {
  const navigate = useNavigate();

  const favouritesSchema = z.object({
    number: z.number().min(1).max(100),
    query: z.enum(["love", "like"]),
    size: z.enum(["small", "medium", "large"]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(favouritesSchema),
  });

  const onSubmit = (data) => {
    navigate(`/fav/${data.number}?q=${data.query}&size=${data.size}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen bg-green-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
          <h1 className="text-xl font-bold">This is the Favourites Page</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
            <div>
              <label>Number (1-100):</label>
              <input type="number" {...register("number")} className="block w-full mt-2 border rounded-md p-2" />
              {errors.number && <p className="text-red-500">{errors.number.message}</p>}
            </div>

            <div>
              <label>Query:</label>
              <div className="space-x-4 mt-2">
                <input type="radio" value="love" {...register("query")} /> Love
                <input type="radio" value="like" {...register("query")} /> Like
              </div>
              {errors.query && <p className="text-red-500">{errors.query.message}</p>}
            </div>

            <div>
              <label>Size:</label>
              <select {...register("size")} className="block w-full mt-2 border rounded-md p-2">
                <option value="">Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              {errors.size && <p className="text-red-500">{errors.size.message}</p>}
            </div>

            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;
