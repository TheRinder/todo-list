import React from "react";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./store";
import { AuthPage } from "./pages/Auth/AuthPage";

const RouteOnAuth = () => {
  const { token } = useSelector((state: RootState) => state.auth)
  console.log(token);

  return (
    <>
      {
        token && (
          <React.Suspense fallback={<div />}>

          </React.Suspense>)
      }
      {
        !token && (
          <React.Suspense fallback={<div />}>
            <AuthPage />
          </React.Suspense>)
      }
    </>
  )
}


export const DashboardApp = () => {
  return (
    <Provider store={store}>
      <RouteOnAuth />
    </Provider>
  );
};

export default DashboardApp;