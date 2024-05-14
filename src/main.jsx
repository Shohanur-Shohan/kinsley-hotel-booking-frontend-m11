import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { HelmetProvider } from "react-helmet-async";
import FirebaseAuthProvider from "./providers/FirebaseAuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <FirebaseAuthProvider>
        <RouterProvider router={router} />
      </FirebaseAuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
