import React, { Component } from 'react';
import TrailingCorrelationTable from "../componenets/trailing-correlation-table";

class TrailingCorrelationPage extends Component {

    constructor(props){
        super(props);
    }
    render() {

        return (

            <div>
                <p>This is the trailing correlation table</p>
                <br/>
                <TrailingCorrelationTable/>
            </div>

        )
    }
}

export default TrailingCorrelationPage;