import { Pizzas } from "./Pizzas";

export const PizzaSection = () => {
  return (
    <div className="bg-zinc-800 p-5">
      <div className="flex justify-center items-center gap-4 my-4 max-[300px]:flex-col">
        <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-800 md:text-xl cursor-pointer">ALL</button>
        <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-800 md:text-xl cursor-pointer">VEG</button>
        <button className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-800 md:text-xl cursor-pointer">NON VEG</button>
      </div>
      <div>
        <Pizzas />
      </div>
    </div>
  );
};
