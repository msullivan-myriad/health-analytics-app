import React, { Component } from 'react';
import AllTrailingCorrelationTable from "../componenets/all-trailing-correlation-table";

class AllTrailingCorrelationPage extends Component {

    constructor(props){
        super(props);
    }
    render() {

        return (

            <div>
                <p>This is the ALL trailing correlation table</p>
                <br/>
                <AllTrailingCorrelationTable/>
            </div>

        )
    }
}

export default AllTrailingCorrelationPage;