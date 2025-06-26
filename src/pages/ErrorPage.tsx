import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/SharedComponents/Footer";
import {Navbar} from "../components/SharedComponents/Navbar";

export const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-4 text-center bg-gray-50">
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">Oops!</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">Something went wrong</p>
        <p className="text-md text-gray-600 mb-6">The page you’re looking for doesn’t exist or there was a server error.</p>
        <button onClick={() => navigate("/")} className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
          Go to Home
        </button>
      </div>
      <Footer />
    </div>
  );
};

