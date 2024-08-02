import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Logincontext from "./context/Logincontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Logincontext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Logincontext>
);
