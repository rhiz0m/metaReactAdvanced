import React from "react";
import { useQuery } from "@tanstack/react-query";
import "tailwindcss/tailwind.css"

const fetchUser = async () => {
    const response = await fetch("https://randomuser.me/api/?results=1")
    if (!response.ok) {
throw new Error("Network error was not ok!")
    }
    return response.json()
}

const FetchDataReactQuery = () => {
const { data, isLoading, isError, error } = useQuery({
  queryKey: ["randomuser"],
  queryFn: fetchUser,
})


      if (isLoading) {
    return <h1 className="text-center text-xl mt-10">Loading user data...</h1>;
  }

    if (isError) {
    return (
      <h1 className="text-center text-xl text-red-500 mt-10">
        Error: {error.message}
      </h1>
    );
  }

  const { name, picture } = data.results[0]

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Customer Data</h1>
      <div className="text-center">
        <img
          className="rounded-full mx-auto mb-4 w-32 h-32"
          src={picture.large}
          alt="Profile"
        />
        <h2 className="text-xl font-medium">
          {name.first} {name.last}
        </h2>
      </div>
    </div>
  );
}

export default FetchDataReactQuery