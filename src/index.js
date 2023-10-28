import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { PetsProviderWrapper } from "./context/pets.context";
import { AuthProviderWrapper } from "./context/Auth.Context";
import { ShopsProviderWrapper } from "./context/shops.context";
import { AdminProvider } from "./context/Admin.Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProviderWrapper>
    <PetsProviderWrapper>
      <ShopsProviderWrapper>
        <AdminProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AdminProvider>
      </ShopsProviderWrapper>
    </PetsProviderWrapper>
  </AuthProviderWrapper>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
