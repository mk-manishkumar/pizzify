import { useState } from "react";
import { pizzas as pizzaData } from "../../data/pizzas";
import { Pizzas } from "./Pizzas";

export const PizzaSection = () => {
  const [category, setCategory] = useState<"all" | "veg" | "non-veg">("all");

  const filteredPizzas = pizzaData.filter((pizza) => (category === "all" ? true : pizza.category === category));

  return (
    <div className="bg-zinc-900 p-5">
      {/* FILTER BUTTONS */}
      <div className="flex justify-center items-center gap-4 my-4 max-[300px]:flex-col">
        {["all", "veg", "non-veg"].map((type) => (
          <button key={type} onClick={() => setCategory(type as "all" | "veg" | "non-veg")} className={`px-4 py-1 rounded md:text-xl cursor-pointer ${category === type ? "bg-[#ecf0f1] text-black" : "bg-green-400 text-black hover:bg-green-600 hover:text-white"}`}>
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PIZZAS GRID */}
      <Pizzas pizzas={filteredPizzas} />
    </div>
  );
};
