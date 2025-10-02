import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import AllFoods from "./pages/AllFoods.jsx";
import UpdateFood from "./pages/UpdateFood.jsx";
import FoodDetails from "./components/FoodDetails.jsx";
import AddFood from "./pages/AddFood.jsx";
import CartPage from "./pages/CartPage.jsx";
import CartProvider from "./components/provider/CartProvider.jsx";
import AuthProvider from "./components/provider/AuthProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/allFoods",
        loader: () => fetch("http://localhost:5000/foods"),
        element: <AllFoods />,
      },
      {
        path: "/add",
        element: <AddFood />,
      },
      {
        path: "/UpdateFood/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
        element: <UpdateFood />,
      },
      {
        path: "/foodDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/foods/${params.id}`),
        element: <FoodDetails />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
