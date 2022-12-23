import React from "react";
import { createRoot } from "react-dom/client";
import { Main } from "./components";
import store from "./store/index";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StudentView } from "./views/StudentView";
import { CampusView } from "./views/CampusView";
import students from "../server/mocks/students.json";
import campuses from "../server/mocks/campuses.json";
import { ErrorView } from "./components/Error";
// import { Layout } from './components/layout';

/* Import and destructure main from src/component/index.js 
and anything else you may need here */

const container = document.getElementById("root");
const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorView />,
  },
  {
    path: "/campuses",
    element: <CampusView />,
    errorElement: <ErrorView />,
    loader: () => {
      // console.log("loading campuses");
      return campuses;
    },
  },
  {
    path: "/students",
    element: <StudentView />,
    errorElement: <ErrorView />,
    loader: () => {
      // console.log("loading students");
      return students;
    },
  },
  {
    path: "/students/:studentId",
    element: <StudentView />,
    errorElement: <ErrorView />,
    loader: () => {
      // console.log("loading students");
      return students;
    },
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
