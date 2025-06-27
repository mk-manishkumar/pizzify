import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="bg-green-500 text-white p-4 flex justify-between items-center">
      <div>
        <Link to={"/"} className="text-3xl font-bold md:ml-32 cursor-pointer">
          Pizzify
        </Link>
      </div>
      <div>
        <ShoppingCart size={40} className="md:mr-32 cursor-pointer" />
      </div>
    </div>
  );
};
