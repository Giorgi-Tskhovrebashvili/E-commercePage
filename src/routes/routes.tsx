import { Navigate } from "react-router-dom";
import App from "../App";
import { About, Collections, Contact, Men, Women } from "../pages";
import { MainLayout } from "../common/components/_molecules";

export const route = [
  {
    path: "/",
    element: (
      <MainLayout>
        <App />
      </MainLayout>
    ),
  },
  {
    path: "/About",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
  },
  {
    path: "/Collections",
    element: (
      <MainLayout>
        <Collections />
      </MainLayout>
    ),
  },
  {
    path: "/Contact",
    element: (
      <MainLayout>
        <Contact />
      </MainLayout>
    ),
  },
  {
    path: "/Men",
    element: (
      <MainLayout>
        <Men />
      </MainLayout>
    ),
  },
  {
    path: "/Women",
    element: (
      <MainLayout>
        <Women />
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
