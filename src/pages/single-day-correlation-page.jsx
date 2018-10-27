import React, { Component } from 'react';
import DayCorrelationTable from '../componenets/day-correlation-table';

class SingleDayCorrelationPage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (

            <div>
                <p>Some text about the single day correlation table here</p>
                <br/>
                <DayCorrelationTable/>
            </div>

        )
    }
}

export default SingleDayCorrelationPage;