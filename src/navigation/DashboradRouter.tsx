import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const DashboardPage = React.lazy(async () => (await import('../pages/Dashboard/DashboardPage')));

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardPage />,
  },
])

const DashboardRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default DashboardRouter;