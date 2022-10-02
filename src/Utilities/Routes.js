import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard, { loader as UserLoader } from "../Components/Dashboard";
import NotFound from "../Errors/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "dashboard", element: <Dashboard />, loader: UserLoader },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
