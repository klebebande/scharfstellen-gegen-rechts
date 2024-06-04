// import './index.css';

// import "bootstrap/dist/css/bootstrap.css";
// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./components/app/App";
// import { BrowserRouter } from "react-router-dom";

// // Get the root container element
// const container = document.getElementById("root");

// // Create a root
// const root = createRoot(container);

// // Initial render
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

// src/main.jsx
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);