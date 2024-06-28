import React from "react";
import ReactDOM from "react-dom/client";
import AppData from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SwiggyAbout from "./page/SwiggyAbout";
import Search from "./page/Search";
import Error from "./page/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppData />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <SwiggyAbout />,
  },
  {
    path: "search",
    element: <Search />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
