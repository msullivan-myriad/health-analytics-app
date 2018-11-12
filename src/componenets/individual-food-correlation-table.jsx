import React, { Component } from 'react';
import DataSetupService from '../services/data-setup-service';
import { Table } from 'antd';

class IndividualFoodCorrelationTable extends Component {

    constructor(props){

        super(props);

        this.dataSetupService = new DataSetupService;
        this.correlationData = this.getFormattedFoodItemsData();
        this.columns =  this.getFormattedColumnsData();

        console.log(this.correlationData);

    }

    getFormattedFoodItemsData() {
        const foodData = this.dataSetupService.getFoodItemsWithDailyValueAverages();
        let currentKeyValue = 1;

        const correlationData = Object.keys(foodData).map(theKey => {

            const foodDataTempObject = foodData[theKey];
            foodDataTempObject.food = theKey;
            foodDataTempObject.key = currentKeyValue;
            currentKeyValue++;

            return foodDataTempObject;
        })

        return correlationData;
    }

    getFormattedColumnsData() {

        const keys = this.dataSetupService.getDailyValuesKeys();
        const columns = [
            {
                title: 'Food',
                dataIndex: 'food',
                key: 'food'
            }
        ];

        keys.sort().forEach(theKey => {

            columns.push({
                title: theKey,
                dataIndex: theKey,
                key: theKey,
            })
        })

        return columns;

    }


    render() {

        return (
            <div>
                <Table dataSource={this.correlationData} columns={this.columns} size="small"/>
            </div>
        )
    }
}

export default IndividualFoodCorrelationTable;