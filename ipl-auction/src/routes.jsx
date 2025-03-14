import { createBrowserRouter } from "react-router-dom";
import NotFound from "./other/NotFound";
import Home from "./home/Home";
import Auction from "./dashboard/Auction";
export const routes = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auction",
    element: <Auction />,
  },
]);
