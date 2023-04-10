import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import AppliedJobs from "./pages/AppliedJobs";
import Blogs from "./pages/Blogs";
import ErrorPage from "./pages/ErrorPage";
import { dataLoader, jobLoader } from "./utilities/dataLoader";
import Details from "./pages/Details";
import { getLocalStorageData } from "./utilities/localStorage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: 'details/:jobID',
        element: <Details/>,
        loader: async({params})=>  jobLoader(params.jobID)
      },
      {
        path: 'statistics',
        element: <Statistics/>
      },
      {
        path: 'appliedjobs',
        element: <AppliedJobs/>,
        loader: ()=> getLocalStorageData()
      },
      {
        path: 'blogs',
        element: <Blogs/>
      },
      {
        path: '*',
        element: <ErrorPage/>
      },

    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
