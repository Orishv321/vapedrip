import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserMainView from "../view/users";

const router = createBrowserRouter([
  { path: "/", element: <UserMainView /> },
  { path: "/hami", element: <div>hami</div> },
]);
export default function Layout() {
  return (
    <div className="m-4">
      <RouterProvider router={router} />
    </div>
  );
}
