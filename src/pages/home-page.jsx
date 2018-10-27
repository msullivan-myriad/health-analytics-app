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

            }
            , {
                title: 'Correlation Total',
                dataIndex: 'correlation_total',
                key: 'correlation_total',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.correlation_total - b.correlation_total,

            }, {
                title: 'Correlation Average',
                dataIndex: 'correlation_avg',
                key: 'correlation_avg',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.correlation_avg - b.correlation_avg,

            }, {
                title: 'Day 1',
                dataIndex: 'correlations[0]',
                key: 'correlation_day_one',
                render: (value) => {
                   return value.correlation;
                },
                sorter: (a,b) => {
                    return a.correlations[0].correlation - b.correlations[0].correlation;
                }

            }, {
                title: 'Day 2',
                dataIndex: 'correlations[1]',
                key: 'correlation_day_two',
                render: (value) => {
                   return value.correlation;
                },
                sorter: (a,b) => {
                    return a.correlations[1].correlation - b.correlations[1].correlation;
                }

            }, {
                title: 'Day 3',
                dataIndex: 'correlations[2]',
                key: 'correlation_day_three',
                render: (value) => {
                   return value.correlation;
                },
                sorter: (a,b) => {
                    return a.correlations[2].correlation - b.correlations[2].correlation;
                }

            }, {
                title: 'Day 4',
                dataIndex: 'correlations[3]',
                key: 'correlation_day_four',
                render: (value) => {
                   return value.correlation;
                },
                sorter: (a,b) => {
                    return a.correlations[3].correlation - b.correlations[3].correlation;
                }

            }, {
                title: 'Day 5',
                dataIndex: 'correlations[4]',
                key: 'correlation_day_five',
                render: (value) => {
                   return value.correlation;
                },
                sorter: (a,b) => {
                    return a.correlations[4].correlation - b.correlations[4].correlation;
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