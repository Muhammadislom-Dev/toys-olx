import Home from "../pages/Home";
import Product from "../pages/Product";
import Offer from "../pages/Offer";
export const ROUTES = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/product",
    component: Product,
  },
  {
    exact: false,
    path: "/product/:id",
    component: Offer,
  },
];
