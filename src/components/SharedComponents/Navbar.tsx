import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-green-500 text-white p-3 md:p-4 flex justify-between items-center">
      <div>
        <Link to={"/"} className="text-xl md:text-3xl font-bold md:ml-32 cursor-pointer">
          Pizzify
        </Link>
      </div>
      <div>
        <ShoppingCart className="md:mr-32 cursor-pointer w-5 h-5 md:w-10 md:h-10" />
      </div>
    </div>
  );
};
