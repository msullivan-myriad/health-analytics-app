import React, { Component } from 'react';
import BasicTrailingCorrelationTable from "../componenets/basic-trailing-correlation-table";
import AllSingleDayCorrelationTable from "../componenets/all-single-day-correlation-table";
class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        /*
        <BasicTrailingCorrelationTable/>
        */

        return (

            <div>
                <p>This is the home page</p>
                <p>Perhaps eventually there will be more stuff on it</p>
                <AllSingleDayCorrelationTable/>
            </div>

        )
    }
}

export default HomePage;