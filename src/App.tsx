import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import HomePage from "./pages/1-home/HomePage";
import ProjectsPage from "./pages/2-projects/ProjectsPage";
import AboutPage from "./pages/3-about/AboutPage";
import ErrorPage from "./pages/0-error/ErrorPage";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
