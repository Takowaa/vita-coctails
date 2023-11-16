import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/index.js";
import Drink from "../../Pages/Drink/index.js";
import IngredientPage from "../../Pages/IngredientPage/index.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

  },
  {
    path: '/drink/:id',
    element: <Drink />

  },{
  path: '/ingredient/:name',
    element: <IngredientPage  />
  }
]);