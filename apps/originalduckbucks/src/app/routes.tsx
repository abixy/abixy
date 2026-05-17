import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Catalog } from "./components/Catalog";
import { Customize } from "./components/Customize";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Catalog },
      { path: "customize/:designId", Component: Customize },
      { path: "cart", Component: Cart },
      { path: "checkout", Component: Checkout },
    ],
  },
]);
