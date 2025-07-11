import { useState, useCallback, useMemo, useEffect } from "react";
import { Footer } from "../components/SharedComponents/Footer";
import { Navbar } from "../components/SharedComponents/Navbar";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import { OrderPopup } from "../components/OrderPopup";

export const Checkout = () => {
  const cart = useSelector((state: RootState) => state.reducer.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const formValid = name && email && phone && address;

  const PLATFORM_FEE = 3;
  const DELIVERY_CHARGE = 10;

  const itemsGrossCost = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const discount = promoCode === "DISCOUNT50" ? 50 : 0;

  const finalCost = useMemo(() => {
    return itemsGrossCost + DELIVERY_CHARGE + PLATFORM_FEE - discount;
  }, [itemsGrossCost, discount]);

  const handlePromoCode = useCallback(() => {
    if (promoCode === "DISCOUNT50") {
      toast.success("Promo code applied: DISCOUNT50");
    } else {
      toast.error("Invalid promo code");
    }
  }, [promoCode]);

  const handleOrder = () => {
    setShowPopup(true);
  };

  const goToHome = () => {
    setShowPopup(false);
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setPromoCode("");
    dispatch(clearCart());
    navigate("/");
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/");
    }
  }, [cart.length, navigate]);


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className={`flex-grow bg-zinc-900 text-white transition-all duration-300 ${showPopup ? "blur-sm pointer-events-none" : ""}`}>
        <div className="bg-zinc-800 max-w-7xl mx-auto p-5 mt-15 rounded shadow-lg flex flex-col lg:flex-row gap-8">
          {/* Left - Customer Details */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">Customer Details</h2>
            <form className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input id="name" type="text" placeholder="Enter your name" value={name} className="w-full bg-zinc-600 outline-0 px-3 py-2 rounded text-sm" onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input id="email" type="email" placeholder="you@example.com" value={email} className="w-full bg-zinc-600 outline-0 px-3 py-2 rounded text-sm " onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="mobile" className="block mb-2">
                  Mobile Number
                </label>
                <input id="mobile" type="tel" placeholder="+1 234 567 8901" value={phone} className="w-full bg-zinc-600 outline-0 px-3 py-2 rounded text-sm " onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="address" className="block mb-2">
                  Address
                </label>
                <textarea id="address" rows={5} value={address} className="w-full bg-zinc-600 outline-0 px-3 py-2 rounded text-sm resize-none" placeholder="123 Street, City, Country" onChange={(e) => setAddress(e.target.value)} required />
              </div>
            </form>
          </div>

          {/* Right - Order Summary */}
          <div className="lg:w-1/3 w-full border rounded-md p-6 bg-gray-300 text-black">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Items({cart.length})</span>
              <span className="font-semibold">₹{itemsGrossCost}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Delivery Charge</span>
              <span className="font-semibold">₹{DELIVERY_CHARGE}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Platform Fee</span>
              <span className="font-semibold">₹{PLATFORM_FEE}</span>
            </div>
            <hr className="my-4" />

            {/* Promo Code Section */}
            <div className="my-8">
              <label htmlFor="promoCode" className="block mb-3 text-sm font-medium">
                Promo Code
              </label>
              <input id="promoCode" type="text" value={promoCode} placeholder="Enter your code" className="w-full border outline-0 px-3 py-2 rounded text-sm " onChange={(e) => setPromoCode(e.target.value)} />
              <button onClick={handlePromoCode} className="w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded cursor-pointer mt-2 select-none font-semibold">
                APPLY
              </button>
            </div>

            <hr className="my-4" />

            {/* Final Cost */}
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">Total</span>
              <span className="font-semibold text-xl">₹{finalCost}</span>
            </div>

            <button disabled={!formValid} onClick={handleOrder} className={`w-full rounded mt-2 select-none font-semibold text-white py-1 ${formValid ? "cursor-pointer bg-purple-500 hover:bg-purple-800" : "cursor-not-allowed bg-purple-300"}`}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />

      {/* Popup Modal */}
      {showPopup && <OrderPopup name={name} finalCost={finalCost} onClose={goToHome} />}
    </div>
  );
};
