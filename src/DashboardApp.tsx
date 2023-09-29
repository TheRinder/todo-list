import React from "react";
import { Provider, useSelector } from "react-redux";
import store, { RootState } from "./store";
import { AuthPage } from "./pages/Auth/AuthPage";
import { ThemeProvider } from "./theme/ToDoTheme";
import './theme/global.css'
import DashboardRouter from "./navigation/DashboradRouter";

const RouteOnAuth = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  return (
    <>
      {
        token && (
          <React.Suspense fallback={<div />}>
            <DashboardRouter />
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
    <ThemeProvider>
      <Provider store={store}>
        <RouteOnAuth />
      </Provider>
    </ThemeProvider>
  );
};

export default DashboardApp;