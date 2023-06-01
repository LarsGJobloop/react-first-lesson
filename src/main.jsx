// Import the two Objects (/Node modules) we need for setting
// our application up
import React from "react";
import ReactDOM from "react-dom/client";

// Grab the root element (mounting point) from the HTML
const applicationRoot = document.getElementById("root")

// Pass the root element on to ReactDOM to let it handle
// the complex work of setting everything up
const application = ReactDOM.createRoot(applicationRoot)

// Finally tell our application that we want to start rendering
// and pass in the JSX (HTML inside JavaScript) we want to display
application.render(
  <h1>Hello World</h1>
)