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
                <p>This is the all single day correlation table.  This table allows you to filter, compare, sort, and analyse every diet and custom metric against EVERY SINGLE OTHER custom metric every diet and custom metric against EVERY SINGLE OTHER custom metric.  This can be a powerful tool in finding deeper correlations and trends among your own custom fields</p>
                <p>The filter option filters BOTH THE 'field' and 'compared against' column at the same time.  Don't rely  on a field you are looking for to be in one specific column over the other</p>
                <br/>
                <AllSingleDayCorrelationTable/>
            </div>

        )
    }
}

export default AllSingleDayCorrelationsPage;