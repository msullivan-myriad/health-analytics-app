import React, { Component } from 'react';
import BasicSingleDayCorrelationTable from '../componenets/basic-single-day-correlation-table';

class SingleDayCorrelationPage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (

            <div>
                <p>Some text about the single day correlation table here</p>
                <br/>
                <BasicSingleDayCorrelationTable/>
            </div>

        )
    }
}

export default SingleDayCorrelationPage;