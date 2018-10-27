import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./pages/home-page.jsx"
import SingleDayCorrelationPage from "./pages/single-day-correlation-page";
import TrailingCorrelationPage from "./pages/trailing-correlation-page";

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
                            <Link to="/single-day-correlation/">Single Day Correlation</Link>
                        </li>
                        <li>
                            <Link to="/trailing-correlation/">Trailing Correlation</Link>
                        </li>
                    </ul>
                </nav>

                <div className="page-body" style={{padding: '5%'}}>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/single-day-correlation/" component={SingleDayCorrelationPage} />
                    <Route path="/trailing-correlation/" component={TrailingCorrelationPage} />
                </div>

            </div>
        </Router>

    );



};

ReactDOM.render(<App />, document.getElementById("app"));
