import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppData from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SwiggyAbout from "./page/SwiggyAbout";
import Search from "./page/Search";
import Error from "./page/Error";
import Home from "./page/Home";
// import RestaurantMenu from "";

const root = ReactDOM.createRoot(document.getElementById("root"));
const RestaurantMenu = lazy(() => import("./page/RestaurantMenu"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppData />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <SwiggyAbout />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "restaurant/:id",
        element: (
          <Suspense fallback="Loading....">
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
