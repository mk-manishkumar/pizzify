import { useState } from "react";
import { Footer } from "../components/SharedComponents/Footer";
import { Navbar } from "../components/SharedComponents/Navbar";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const cart = useSelector((state: RootState) => state.reducer.cart);

  const PLATFORM_FEE = 3;
  const DELIVERY_CHARGE = 10;

  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-zinc-900 text-white">
        <div className="bg-zinc-800 max-w-7xl mx-auto p-5 mt-15 rounded shadow-lg flex flex-col lg:flex-row gap-8">
          {/* Left - Customer Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Customer Details</h2>
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input id="name" type="text" placeholder="Enter your name" value={name} className="w-full bg-zinc-600 outline-0 px-3 py-2 rounded text-sm" onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input id="email" type="email" placeholder="you@example.com" value={email} className="w-full bg-zinc-600 outline-0 px-3 py-2 rounded text-sm " onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="mobile" className="block mb-2">
                  Mobile Number
                </label>
                <input id="mobile" type="tel" placeholder="+1 234 567 8901" value={phone} className="w-full bg-zinc-600 outline-0 px-3 py-2 rounded text-sm " onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label htmlFor="address" className="block mb-2">
                  Address
                </label>
                <textarea id="address" rows={5} value={address} className="w-full bg-zinc-600 outline-0 px-3 py-2 rounded text-sm resize-none" placeholder="123 Street, City, Country" onChange={(e) => setAddress(e.target.value)} />
              </div>
            </form>
          </div>
          {/* Right - Order Summary */}
          <div className="lg:w-1/3 w-full border rounded-md p-6 bg-gray-300 text-black">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Items({cart.length})</span>
              <span className="font-semibold">₹159</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Delivery Charge</span>
              <span className="font-semibold">₹10</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Platform Fee</span>
              <span className="font-semibold">₹3</span>
            </div>
            <div className="my-8">
              <label htmlFor="promoCode" className="block mb-3 text-sm font-medium">
                Promo Code
              </label>
              <input id="promoCode" type="text" placeholder="Enter your code" className="w-full border outline-0 px-3 py-2 rounded text-sm " />
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded cursor-pointer mt-2 select-none font-semibold">APPLY</button>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Total</span>
              <span className="font-semibold text-xl">₹172</span>
            </div>

            <button className="w-full bg-purple-500 hover:bg-purple-800 text-white py-1 rounded cursor-pointer mt-2 select-none font-semibold">PLACE ORDER</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
