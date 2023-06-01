// Import the two Objects (/Node modules) we need for setting
// our application up
import React from "react";
import ReactDOM from "react-dom/client";

// To separate the setup of our application
// from the interface we define the rest in
// a seperate file and imported here
import { App } from "./App";

// For CSS that is used throughout your application
// you can put them inside here
import "./styles/normalize.css"

// Grab the root element (mounting point) from the HTML
const applicationRoot = document.getElementById("root")

// Pass the root element on to ReactDOM to let it handle
// the complex work of setting everything up
const application = ReactDOM.createRoot(applicationRoot)

// Finally tell our application that we want to start rendering
// and pass in the JSX (HTML inside JavaScript) we want to display
application.render(
  <App />
)