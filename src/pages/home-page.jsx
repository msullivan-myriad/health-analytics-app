import React, { Component } from 'react';
import DayCorrelationTable from '../componenets/day-correlation-table';
class HomePage extends Component {

    constructor(props){

        super(props);

    }

    render() {

        return (
            <div className="home">
                <div className="navbar" style={{height: '100px', backgroundColor: 'black'}}></div>
                <br/>

                <div style={{padding: '5%'}}>
                    <DayCorrelationTable/>
                </div>

            </div>

        )
    }
}

export default HomePage;