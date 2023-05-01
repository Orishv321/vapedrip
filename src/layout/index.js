import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import UserMainView from "../view/users";
import Admin from "../view/admin";

const router = createBrowserRouter([
    {path: "/", element: <UserMainView/>},
    {path: "/2a$12$XF4", element: <Admin/>},
]);
export default function Layout() {
    return (
        <div className="m-4">
            <RouterProvider router={router}/>
        </div>
    );
}
