import { useNavigate } from "react-router-dom";
import { Footer } from "../components/SharedComponents/Footer";
import { Navbar } from "../components/SharedComponents/Navbar";
import { pizzas } from "../data/pizzas";

export const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-zinc-900 text-white p-5 flex-grow">
        <div className="bg-zinc-800 mt-5 p-10 rounded shadow-lg max-w-7xl mx-auto">
          {/* Cart Head */}
          <div className="flex justify-between mb-10">
            <h2 className="font-semibold text-2xl">Shopping Cart</h2>
            <h2 className="font-semibold text-2xl">1 item</h2>
          </div>
          {/* Table Head */}
          <div className="hidden sm:grid grid-cols-4 text-gray-400 text-sm font-semibold border-b pb-2">
            <p className="col-span-2">Product Details</p>
            <p>Quantity</p>
            <p className="text-right">Total</p>
          </div>
          {/* Cart Item */}
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="grid grid-cols-1 sm:grid-cols-4 items-center py-4 border-b text-sm">
              <div className="col-span-2">
                <h3 className="text-gray-400 font-semibold">{pizza.name}</h3>
                <h3 className="text-yellow-400">{pizza.category}</h3>
                <button className="text-blue-500 mt-1 cursor-pointer">Remove</button>
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <button className="border px-2 cursor-pointer">-</button>
                <span>1</span>
                <button className="border px-2 cursor-pointer">+</button>
              </div>
              <div className="text-right mt-2 sm:mt-0 font-medium">
                <h3 className="text-gray-400 font-semibold">₹159</h3>
              </div>
            </div>
          ))}

          {/* Checkout Button */}
          <div className="mt-10 flex justify-end">
            <button onClick={handleCheckout} className="w-full font-semibold cursor-pointer px-2 md:px-5 py-2 md:w-auto bg-green-500 hover:bg-green-800 text-sm sm:text-base block mx-auto md:mx-0">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
