import React, { Component } from 'react';
import BasicTrailingCorrelationTable from "../componenets/basic-trailing-correlation-table";

class BasicTrailingCorrelationPage extends Component {

    constructor(props){
        super(props);
    }
    render() {

        return (

            <div>
                <p>This is the trailing correlation table</p>
                <br/>
                <BasicTrailingCorrelationTable/>
            </div>

        )
    }
}

export default BasicTrailingCorrelationPage;