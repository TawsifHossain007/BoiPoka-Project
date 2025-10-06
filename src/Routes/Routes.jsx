import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPages from "../ErrorPages/ErrorPages";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPages></ErrorPages>,
    children: [
        {
            index:true,
            loader: ()=> fetch('./booksData.json'),
            Component: Home,
            path: '/'
        }
    ]
  },
]);
