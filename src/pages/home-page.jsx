import React, { Component } from 'react';
import IndividualFoodCorrelationTable from "../componenets/individual-food-correlation-table";

class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {

        return (

            <div>
                <p>This is the home page</p>
                <IndividualFoodCorrelationTable/>
            </div>

        )
    }
}

export default HomePage;