import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { pizzas } from "../data/pizzas";
import type { Pizza } from "../data/pizzas";
import { slugify } from "../utils/slugify";
import { Navbar } from "../components/SharedComponents/Navbar";
import { Footer } from "../components/SharedComponents/Footer";

export const PizzaDetails = () => {
  const { slug } = useParams();
  const [pizza, setPizza] = useState<Pizza | null>(null);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    const match = pizzas.find((p) => slugify(p.name) === slug);
    setPizza(match || null);
  }, [slug]);

  if (!pizza) {
    return <div className="text-white text-center mt-10">Pizza not found 🍕</div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-zinc-800 p-10 text-white grid md:grid-cols-2 gap-10 items-center ">
        <div>
          <img src={pizza.image} alt={pizza.name} className="w-full max-w-md mx-auto rounded-lg" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{pizza.name}</h1>
          <p className="text-lg text-gray-300 mb-4">{pizza.description}</p>
          <p className="bg-yellow-400 w-20 text-center text-black rounded py-1 mb-4">{pizza.category}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">⭐</span>
            <span className="text-white">
              {pizza.rating} ({pizza.ratingsCount} reviews)
            </span>
          </div>
          <div className="text-2xl font-bold">₹{pizza.price}</div>
          {/* Quantity Selector */}
          <div className="flex items-center my-6 border rounded overflow-hidden w-max">
            <button onClick={decrement} className="cursor-pointer px-4 py-2 text-black-600 text-xl border-r">
              -
            </button>
            <div className="px-6 py-2 text-black-600 text-lg border-r">{quantity}</div>
            <button onClick={increment} className="cursor-pointer px-4 py-2 text-black-600 text-xl">
              +
            </button>
          </div>
          <div className="mt-6">
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300 font-bold">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
