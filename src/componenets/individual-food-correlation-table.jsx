import React, { Component } from 'react';
import DataSetupService from '../services/data-setup-service';
import { Table } from 'antd';

class IndividualFoodCorrelationTable extends Component {

    constructor(props){

        super(props);

        this.dataSetupService = new DataSetupService;
        this.correlationData = this.dataSetupService.getFoodItemsWithDailyValueAverages();

        //Need some kind of logic about accuracy of the number
        console.log(this.correlationData);

    }

    render() {

        return (
            <div>
                <p>Nothing here yet</p>
            </div>
        )
    }
}

export default IndividualFoodCorrelationTable;