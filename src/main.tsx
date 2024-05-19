import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Context } from "./common/context/Index";
import { route } from "./routes/routes";

const router = createBrowserRouter(route);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);
