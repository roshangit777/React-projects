import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Recipe from "./Components/Recipe.jsx";
import { Provider } from "react-redux";
import recipeStore from "./store/index.js";
import CatagoryRecipe from "./Components/CatagoryRecipe.jsx";

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
        path: "/recipe",
        element: <Recipe />,
      },
      {
        path: `/catagory`,
        element: <CatagoryRecipe />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={recipeStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
