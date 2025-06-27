export type Pizza = {
  id: number;
  name: string;
  category: "veg" | "non-veg";
  price: number;
  rating: number;
  ratingsCount: number;
  image: string;
  description: string;
};

export const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Deluxe Veggie",
    category: "veg",
    price: 149,
    rating: 4.5,
    image: "/pizzaImages/Deluxe_Veggie.jpg",
    description: "Deluxe Veggie Pizza is a garden on a crust! Each slice is bursting with a colorful array of fresh, crisp vegetables, including bell peppers, onions, mushrooms, olives, and sweet corn. We combine these vibrant veggies with a rich, tangy tomato sauce and a generous layer of melted, gooey mozzarella cheese. Every bite offers a delightful medley of textures and a harmonious blend of savory flavors, making it a truly satisfying and wholesome meal for any vegetable lover. It's simple, delicious, and packed with goodness!",
    ratingsCount: 200,
  },
  {
    id: 2,
    name: "Chicken Fiesta",
    category: "non-veg",
    price: 199,
    rating: 4.2,
    image: "/pizzaImages/chicken_fiesta.png",
    description: "Chicken Fiesta Pizza is a flavor-packed delight that brings the fiesta to your taste buds! This pizza features tender, marinated chicken pieces seasoned with a zesty blend of spices, complemented by a vibrant mix of bell peppers, red onions, and jalapeños. All of this is layered on a crispy crust with a rich tomato sauce and topped with a generous amount of melted cheese. Each bite is a fiesta of flavors, combining the savory goodness of chicken with the freshness of vegetables and a hint of spice. Perfect for those who love a hearty and exciting pizza experience!",
    ratingsCount: 333,

  },
  {
    id: 3,
    name: "Green Wave",
    category: "veg",
    price: 159,
    rating: 4.3,
    image: "/pizzaImages/Mexican_Green_Wave.jpg",
    description: "Green Wave Pizza is a refreshing and vibrant choice for pizza lovers! This delightful creation features a medley of fresh green ingredients, including spinach, green bell peppers, and artichoke hearts, all layered on a crispy crust. The base is topped with a zesty pesto sauce that adds a burst of flavor, while a generous sprinkle of mozzarella cheese melts to perfection. Each bite offers a harmonious blend of earthy greens and savory cheese, making it a perfect option for those seeking a light yet satisfying pizza experience. It's a slice of nature's goodness!",
    ratingsCount: 418,

  },
  {
    id: 4,
    name: "Chicken Pepperoni",
    category: "non-veg",
    price: 195,
    rating: 4.6,
    image: "/pizzaImages/CHICKEN_PEPPERONI.png",
    description: "Chicken Pepperoni Pizza is a delicious twist on the classic pepperoni pizza, featuring tender slices of seasoned chicken instead of traditional pork pepperoni. This pizza is topped with a rich tomato sauce, a generous layer of melted mozzarella cheese, and a sprinkle of zesty Italian herbs. The chicken adds a lean protein boost while still delivering that savory, slightly spicy flavor that pepperoni lovers crave. Each bite is a satisfying combination of crispy crust, gooey cheese, and flavorful chicken, making it a perfect choice for those who enjoy a hearty and flavorful pizza.",
    ratingsCount: 374,

  },
  {
    id: 5,
    name: "Peppy Paneer",
    category: "veg",
    price: 179,
    rating: 4.4,
    image: "/pizzaImages/Peppy_Paneer.jpg",
    description: "Peppy Paneer Pizza is a delightful vegetarian option that brings together the rich flavors of paneer cheese and a medley of vibrant vegetables. This pizza features a crispy crust topped with a zesty tomato sauce, generous chunks of marinated paneer, and an array of colorful veggies like bell peppers, onions, and tomatoes. The combination of the creamy paneer and the fresh vegetables creates a satisfying and flavorful experience. Finished with a sprinkle of aromatic herbs and spices, this pizza is perfect for those who crave a hearty yet refreshing vegetarian meal.",
    ratingsCount: 319,
  },
  {
    id: 6,
    name: "Chicken Sausage",
    category: "non-veg",
    price: 249,
    rating: 4.7,
    image: "/pizzaImages/chicken_sausage.png",
    description: "Indulge in the savory goodness of our Chicken Sausage Pizza! This delightful pizza boasts juicy, flavorful chicken sausage as its star ingredient, providing a rich and satisfying bite in every piece. The sausage is expertly seasoned to perfection, ensuring a perfect balance of savory flavors that complement the other toppings. Nestled on a bed of classic tomato sauce and melted cheese, this pizza delivers a hearty and incredibly delicious experience. It’s a simple yet profoundly satisfying choice for anyone who loves a good, robust sausage on their pizza.",
    ratingsCount: 248,
  },
];
