import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/index.js";
import Drink from "../../Pages/Drink/index.js";
import IngredientPage from "../../Pages/IngredientPage/index.js";
import HomePage from "../../Pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
   children: [
     {
       path: '/',
       element: <HomePage />
     },
     {
       path: '/drink/:id',
       element: <Drink />

     },{
       path: '/ingredient/:name',
       element: <IngredientPage  />
     }
   ]
  },
]);
