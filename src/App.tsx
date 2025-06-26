import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";
import {Checkout} from "./pages/Checkout";
import { PizzaDetails } from "./pages/PizzaDetails";
import { ErrorPage } from "./pages/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: <Cart />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pizza/:slug",
    element: <PizzaDetails/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
