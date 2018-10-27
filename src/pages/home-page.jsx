import React, { Component } from 'react';
import DataSetupService from '../services/data-setup-service';
import { Table } from 'antd';

class HomePage extends Component {

    constructor(props){

        super(props);

        this.dataSetupService = new DataSetupService;

        this.correlationData = this.dataSetupService.getCorrelationData();
        this.dailyValuesKeys = this.dataSetupService.getDailyValuesKeys();
        this.dailyValuesKeysFilters = this.formatDailyValuesKeysToFilter(this.dailyValuesKeys);
        this.comparedAgainstFilters = [
                    {
                        text: 'Calories',
                        value: 'calories',
                    }, {
                        text: 'Carbohydrates',
                        value: 'carbohydrates',
                    }, {
                        text: 'Fat',
                        value: 'fat',
                    }, {
                        text: 'Sodium',
                        value: 'sodium',
                    }, {
                        text: 'Sugar',
                        value: 'sugar',
                    }];


        console.table(this.correlationData);


    }

    formatDailyValuesKeysToFilter(dvk) {

        return dvk.map(key => {
            return { text: key, value: key}
        })

    }

    render() {


        const columns = [
            {
                title: 'Field',
                dataIndex: 'field',
                key: 'field',
                filters: this.dailyValuesKeysFilters,
                onFilter: (value, record) => record.field.indexOf(value) === 0,
                sorter: (a, b) => {
                    if(a.field< b.field) { return -1; }
                    if(a.field> b.field) { return 1; }
                    return 0;
                }

            }, {
                title: 'Compared Against',
                dataIndex: 'compared_against',
                key: 'compared_against',
                filters: this.comparedAgainstFilters,
                onFilter: (value, record) => record.compared_against.indexOf(value) === 0,
                render: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
                sorter: (a, b) => {
                    if(a.compared_against < b.compared_against) { return -1; }
                    if(a.compared_against > b.compared_against) { return 1; }
                    return 0;
                }

            }, {
                title: 'Correlation',
                dataIndex: 'correlations[0]',
                key: 'correlation',
                render: (value) => {
                   return Math.round(value.correlation * 1000)/10 + '%';
                },
                sorter: (a,b) => {
                    return a.correlations[0].correlation - b.correlations[0].correlation;
                },


            }, {
                title: 'Correlation Direction',
                dataIndex: 'correlations[0]',
                key: 'correlation_direction',
                render: (value) => {
                   return value.correlation_direction.charAt(0).toUpperCase() + value.correlation_direction.slice(1).toLowerCase();
                },
                sorter: (a,b) => {
                    return a.correlations[0].correlation_direction - b.correlations[0].correlation_direction;
                }

            }

        ];

        return (
            <div className="home">
                <div className="navbar" style={{height: '100px', backgroundColor: 'black'}}></div>
                <br/>

                <div style={{padding: '5%'}}>
                    <Table dataSource={this.correlationData} columns={columns} size="middle"/>
                </div>

            </div>

        )
    }
}

export default HomePage;