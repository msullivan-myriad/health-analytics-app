import React, { Component } from 'react';
import BasicTrailingCorrelationTable from "../componenets/basic-trailing-correlation-table";
class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (

            <div>
                <p>This is the home page</p>
                <p>Perhaps eventually there will be more stuff on it</p>
                <BasicTrailingCorrelationTable/>
            </div>

        )
    }
}

export default HomePage;