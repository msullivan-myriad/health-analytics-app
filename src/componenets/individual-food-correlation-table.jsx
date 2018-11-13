import React, { Component } from 'react';
import DataSetupService from '../services/data-setup-service';
import { Table } from 'antd';

class IndividualFoodCorrelationTable extends Component {

    constructor(props){

        super(props);

        this.foodColumnWidth = 250;
        this.mainColumnWidths = 150;

        this.dataSetupService = new DataSetupService;
        this.correlationData = this.getFormattedFoodItemsData();
        this.columns =  this.getFormattedColumnsData();
        this.tableScrollSize = (this.columns.length - 1)  *  this.mainColumnWidths + this.foodColumnWidth;

        console.log(this.tableScrollSize);
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
                key: 'food',
                width: this.foodColumnWidth,
                fixed: 'left'
            }
        ];

        keys.sort().forEach(theKey => {

            columns.push({
                title: theKey,
                dataIndex: theKey,
                key: theKey,
                width: this.mainColumnWidths,
                sorter: (a, b) => {
                    if(a[theKey] < b[theKey]) { return -1; }
                    if(a[theKey] > b[theKey]) { return 1; }
                    return 0;
                }
            })
        })

        return columns;

    }


    render() {

        return (
            <div>
                <Table dataSource={this.correlationData} columns={this.columns} size="middle" scroll={{ x: this.tableScrollSize, y: 800 }}/>
            </div>
        )
    }
}

export default IndividualFoodCorrelationTable;