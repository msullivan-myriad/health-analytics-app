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

        const columns =  this.getFormattedColumnsData();

        console.log(columns);

    }

    getFormattedColumnsData() {

        const keys = this.dataSetupService.getAllListsValuesKeys();
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


        const dataSource = [{
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street'
        }, {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street'
        }];

        const columns = [{
            title: 'Food',
            dataIndex: 'food',
            key: 'food',
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        }];


        return (
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}

export default IndividualFoodCorrelationTable;