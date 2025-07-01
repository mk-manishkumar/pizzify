import { slugify } from "../../utils/slugify";
import { Link } from "react-router-dom";
import type { Pizza } from "../../data/pizzas";

type PizzasProps = {
  pizzas: Pizza[];
};

export const Pizzas = ({ pizzas }: PizzasProps) => {
  return (
    <div className="w-[90%] mx-auto text-white mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-10">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="md:w-80 p-5 border border-white text-center flex flex-col gap-4 rounded-lg hover:shadow-xl transition">
          <img src={pizza.image} alt={pizza.name} className="rounded-md w-full h-48 object-cover" />
          <Link to={`/pizza/${slugify(pizza.name)}`} className="text-2xl font-bold hover:underline">
            {pizza.name}
          </Link>
          <p>
            Category: <span className="bg-yellow-400 text-black p-1 select-none rounded">{pizza.category}</span>
          </p>
          <p>
            Price: <span className="font-bold">₹{pizza.price}</span>
          </p>
          <p className="text-yellow-400">
             {pizza.rating} ★
          </p>
        </div>
      ))}
    </div>
  );
};
