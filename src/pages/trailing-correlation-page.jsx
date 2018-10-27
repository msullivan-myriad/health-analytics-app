import React, { Component } from 'react';
import DayCorrelationTable from '../componenets/day-correlation-table';

class TrailingCorrelationPage extends Component {

    constructor(props){
        super(props);
    }
    render() {

        return (

            <div>
                <p>This is the trailing correlation table</p>
                <br/>
                <DayCorrelationTable/>
            </div>

        )
    }
}

export default TrailingCorrelationPage;