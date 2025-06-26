import { ShoppingCart } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className="bg-green-500 text-white p-4 flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold md:ml-32">Pizzify</h1>
      </div>
      <div>
        <ShoppingCart size={40} className='md:mr-32' />
      </div>
    </div>
  );
};
