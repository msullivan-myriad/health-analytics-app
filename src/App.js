import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/home-page.jsx"
import "antd/dist/antd.css"

const App = () => {

  return <HomePage/>;

};

ReactDOM.render(<App />, document.getElementById("app"));
