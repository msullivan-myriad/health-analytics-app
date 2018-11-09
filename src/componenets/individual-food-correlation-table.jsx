import React, { Component } from 'react';
import DataSetupService from '../services/data-setup-service';
import { Table } from 'antd';

class IndividualFoodCorrelationTable extends Component {

    constructor(props){

        super(props);

        this.dataSetupService = new DataSetupService;
        this.correlationData = this.dataSetupService.getIndividualFoodCorrelationData();

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