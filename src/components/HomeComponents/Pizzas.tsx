import { slugify } from "../../utils/slugify";
import { Link } from "react-router-dom";
import { pizzas } from "../../data/pizzas";


export const Pizzas = () => {
  return (
    <div className="w-[90%] mx-auto text-white mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-10">
      {pizzas.map((pizza) => (
        <div key={pizza.id} className="md:w-80 p-5 border-1 border-white text-center flex flex-col gap-4">
          <img src={pizza.image} alt={pizza.name} />
          <Link to={`/pizza/${slugify(pizza.name)}`} className="text-2xl font-bold hover:underline">
            {pizza.name}
          </Link>
          <p className="">
            Category: <span className="bg-yellow-400 text-black p-1 select-none rounded">{pizza.category}</span>
          </p>
          <p className="">
            Price: <span className="font-bold">₹{pizza.price}</span>
          </p>
          <p className="">Rating: {pizza.rating} ★</p>
        </div>
      ))}
    </div>
  );
};
