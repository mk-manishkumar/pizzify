import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/SharedComponents/Footer";
import { Navbar } from "../components/SharedComponents/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import type { RootState } from "../redux/store";
import { removeItem, decrementQuantity, incrementQuantity } from "../redux/cartSlice";

export const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.reducer.cart);

  const removeItemsFromCart = useCallback(
    (pizza: { id: number; name: string }) => {
      dispatch(removeItem(pizza.id));
      toast.success(`${pizza.name} removed from cart`);
    },
    [dispatch]
  );

  const increment = useCallback(
    (id: number) => {
      dispatch(incrementQuantity(id));
    },
    [dispatch]
  );

  const decrement = useCallback(
    (id: number) => {
      dispatch(decrementQuantity(id));
    },
    [dispatch]
  );

  const handleCheckout = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  // If cart is empty, show empty cart message
  if (cart.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow bg-zinc-900 p-5 text-white flex flex-col items-center justify-center">
          <div className="text-white text-center mt-10 text-2xl">Your cart is empty 🍕</div>
          <button onClick={() => navigate("/")} className="cursor-pointer mt-5 bg-green-500 hover:bg-green-800 text-white px-4 py-2 rounded">
            Go to Home
          </button>
        </div>
        <Footer />
      </div>
    );
    
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="bg-zinc-900 text-white p-5 flex-grow">
        <div className="bg-zinc-800 mt-5 p-10 rounded shadow-lg max-w-7xl mx-auto">
          {/* Cart Head */}
          <div className="flex justify-between gap-2 mb-10">
            <h2 className="font-semibold text-lg md:text-2xl">Shopping Cart</h2>
            <h2 className="font-semibold text-lg md:text-2xl">
              {cart.length} {cart.length > 1 ? "items" : "item"}
            </h2>
          </div>
          {/* Table Head */}
          <div className="hidden sm:grid grid-cols-4 text-gray-400 text-sm font-semibold border-b pb-2">
            <p className="col-span-2">Product Details</p>
            <p className="text-center">Quantity</p>
            <p className="text-right">Total</p>
          </div>
          {/* Cart Item */}
          {cart.map((pizza) => (
            <div key={pizza.id} className="grid grid-cols-1 sm:grid-cols-4 items-center py-4 text-sm border-b sm:border-b-0">
              <div className="col-span-2">
                <h3 className="text-gray-400 font-semibold">{pizza.name}</h3>
                <h3 className="text-yellow-400">{pizza.category}</h3>
                <button onClick={() => removeItemsFromCart(pizza)} className="text-blue-500 mt-1 cursor-pointer hover:underline">
                  Remove
                </button>
              </div>
              <div className="flex items-center justify-center mt-2 sm:mt-0">
                <button onClick={() => decrement(pizza.id)} className="border px-2 cursor-pointer">
                  -
                </button>
                <span className="border-b border-t px-2">{pizza.quantity}</span>
                <button onClick={() => increment(pizza.id)} className="border px-2 cursor-pointer">
                  +
                </button>
              </div>
              <div className="text-right mt-2 sm:mt-0 font-medium">
                <h3 className="text-gray-400 font-semibold">₹{pizza.quantity * pizza.price}</h3>
              </div>
            </div>
          ))}

          <hr className="my-4 hidden sm:block" />

          {/* Checkout Button */}
          <div className="mt-10 flex justify-end">
            <button onClick={handleCheckout} className={"w-full font-semibold  px-2 md:px-5 py-2 md:w-auto  text-sm sm:text-base block mx-auto md:mx-0 bg-green-500 hover:bg-green-800 cursor-pointer"}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
};
