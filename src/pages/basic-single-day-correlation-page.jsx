import React, { Component } from 'react';
import BasicSingleDayCorrelationTable from '../componenets/basic-single-day-correlation-table';

class SingleDayCorrelationPage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (

            <div>
                <p>This is the basic single day correlation table.  This table allows you to filter, compare, sort, and analyse the primary food data fields (Calories, Carbs, Fat, Sodium, Sugar) against your own custom values</p>
                <br/>
                <BasicSingleDayCorrelationTable/>
            </div>

        )
    }
}

export default SingleDayCorrelationPage;