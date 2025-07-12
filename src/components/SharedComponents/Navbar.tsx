import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type { RootState } from "../../redux/store";

export const Navbar = () => {
  const cart = useSelector((state: RootState) => state.reducer.cart);

  return (
    <div className="bg-green-500 text-white py-3 px-5 md:px-0 flex justify-between items-center">
      <div>
        <Link to="/" className="text-xl md:text-3xl font-bold md:ml-32 cursor-pointer">
          Pizzify
        </Link>
      </div>
      <div className="flex justify-center md:mr-32">
        <Link to="/cart" className="relative">
          <ShoppingCart className="cursor-pointer w-5 h-5 md:w-10 md:h-10" />
          {cart.length > 0 && <span className="absolute -top-2 md:top-0 -right-2 w-[20px] h-[20px] bg-[#e21717] rounded-full flex justify-center items-center text-white text-xs p-1 md:p-3">{cart.length}</span>}
        </Link>
      </div>
    </div>
  );
};
