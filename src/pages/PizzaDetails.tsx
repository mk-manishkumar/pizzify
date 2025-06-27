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
      <div className="bg-zinc-800 p-10 text-white grid md:grid-cols-2 gap-10 items-center h-[82.5vh]">
        <div>
          <img src={pizza.image} alt={pizza.name} className="w-full max-w-md mx-auto rounded-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{pizza.name}</h1>
          <p className="text-lg text-gray-300 mb-4">{pizza.description}</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
            <span className="text-white">{pizza.rating} ({pizza.ratingsCount} reviews)</span>
          </div>
          <div className="text-2xl font-bold">₹{pizza.price}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};
