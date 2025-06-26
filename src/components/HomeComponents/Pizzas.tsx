import { slugify } from "../../utils/slugify";
import { Link } from "react-router-dom";

type Pizza = {
  id: number;
  name: string;
  category: "veg" | "non-veg";
  price: number;
  rating: number;
  image: string;
};

const PIZZAS: Pizza[] = [
  {
    id: 1,
    name: "Deluxe Veggie",
    category: "veg",
    price: 149,
    rating: 4.5,
    image: "/pizzaImages/Deluxe_Veggie.jpg",
  },
  {
    id: 2,
    name: "Chicken Fiesta",
    category: "non-veg",
    price: 199,
    rating: 4.2,
    image: "/pizzaImages/chicken_fiesta.png",
  },
  {
    id: 3,
    name: "Green Wave",
    category: "veg",
    price: 159,
    rating: 4.3,
    image: "/pizzaImages/Mexican_Green_Wave.jpg",
  },
  {
    id: 4,
    name: "Chicken Pepperoni",
    category: "non-veg",
    price: 195,
    rating: 4.6,
    image: "/pizzaImages/CHICKEN_PEPPERONI.png",
  },
  {
    id: 5,
    name: "Peppy Paneer",
    category: "veg",
    price: 179,
    rating: 4.4,
    image: "/pizzaImages/Peppy_Paneer.jpg",
  },
  {
    id: 6,
    name: "Chicken Sausage",
    category: "non-veg",
    price: 249,
    rating: 4.7,
    image: "/pizzaImages/chicken_sausage.png",
  },
];

export const Pizzas = () => {
  return (
    <div className="w-[90%] mx-auto text-white mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center mb-10">
      {PIZZAS.map((pizza) => (
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
