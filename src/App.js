import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/home-page.jsx"
import BasicSingleDayCorrelationPage from "./pages/basic-single-day-correlation-page";
import BasicTrailingCorrelationPage from "./pages/basic-trailing-correlation-page";
import AllSingleDayCorrelationsPage from "./pages/all-single-day-correlations-page";
import AllTrailingCorrelationPage from "./pages/all-trailing-correlation-page";

const App = () => {

    return (

        <Router>
            <div className="application-wrapper">
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/basic-single-day-correlations/">Basic Single Day</Link>
                        </li>

                        <li>
                            <Link to="/basic-trailing-correlations/">Basic Trailing Correlations</Link>
                        </li>

                        <li>
                            <Link to="/all-single-day-correlations/">All Single Day</Link>
                        </li>

                        <li>
                            <Link to="/all-trailing-correlations/">All Trailing Correlations</Link>
                        </li>

                    </ul>
                </nav>

                <div className="page-body" style={{padding: '5%'}}>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/basic-single-day-correlations/" component={BasicSingleDayCorrelationPage} />
                    <Route path="/basic-trailing-correlations/" component={BasicTrailingCorrelationPage} />
                    <Route path="/all-single-day-correlations/" component={AllSingleDayCorrelationsPage} />
                    <Route path="/all-trailing-correlations/" component={AllTrailingCorrelationPage} />
                </div>

            </div>
        </Router>

    );


};

ReactDOM.render(<App />, document.getElementById("app"));
