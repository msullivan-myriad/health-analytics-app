import React, { Component } from 'react';
import DataSetupService from '../services/data-setup-service';
import { Table } from 'antd';

class AllSingleDayCorrelationTable extends Component {

    constructor(props){

        super(props);

        this.dataSetupService = new DataSetupService;

        this.correlationData = this.dataSetupService.getFullCorrelationData();

        this.allListsValuesKeys = this.dataSetupService.getAllListsValuesKeys();
        this.allListsValuesKeysFilters = this.formatAllListValuesKeysToFilter(this.allListsValuesKeys);

        this.correlationDirectionFilters = [
            {
                text: 'Positive',
                value: 'positive',
            },
            {
                text: 'Negative',
                value: 'negative',
            }
        ];

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


    }

    formatAllListValuesKeysToFilter(dvk) {

        return dvk.slice(1).sort().map(key => {
                return { text: key, value: key};
        })

    }

    render() {


        const columns = [
            {
                title: 'Field',
                dataIndex: 'field',
                key: 'field',
                render: (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
                sorter: (a, b) => {
                    if(a.field< b.field) { return -1; }
                    if(a.field> b.field) { return 1; }
                    return 0;
                }

            }, {
                title: 'Compared Against',
                dataIndex: 'compared_against',
                key: 'compared_against',
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
                    if(a.correlations[0].correlation_direction < b.correlations[0].correlation_direction) { return -1; }
                    if(a.correlations[0].correlation_direction> b.correlations[0].correlation_direction) { return 1; }
                    return 0;
                },
                filters: this.correlationDirectionFilters,
                onFilter: (value, record) => {
                    return record.correlations[0].correlation_direction.indexOf(value) === 0;
                },
                filterMultiple: false,

            }

        ];

        return (
            <div>
                <Table dataSource={this.correlationData} columns={columns} size="middle"/>
            </div>
        )
    }
}

export default AllSingleDayCorrelationTable;