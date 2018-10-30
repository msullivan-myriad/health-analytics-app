import React, { Component } from 'react';
import AllSingleDayCorrelationTable from '../componenets/all-single-day-correlation-table';

class AllSingleDayCorrelationsPage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (

            <div>
                <p>Some text about the all single day correlations table here</p>
                <br/>
                <AllSingleDayCorrelationTable/>
            </div>

        )
    }
}

export default AllSingleDayCorrelationsPage;