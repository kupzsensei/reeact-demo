import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateStudentPage from "./pages/create-student-page.jsx";
import IndexPage from "./pages/index.jsx";
import StepOne from "./components/step-one.jsx";
import StepTwo from "./components/step-two.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "create-student",
        element: <CreateStudentPage />,
        children: [
          {
            path: "",
            element: <StepOne />,
          },
          {
            path: "2",
            element: <StepTwo />,
          },
          {
            path: "2/3",
            element: <h1>STEP 3</h1>,
          },
          {
            path: "2/3/4",
            element: <h1>STEP 4</h1>,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
