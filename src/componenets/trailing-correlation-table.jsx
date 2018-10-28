import React, { Component } from 'react';
import DataSetupService from '../services/data-setup-service';
import { Table } from 'antd';
import TrailingCorrelationExpansionRecord from "./trailing-correlation-expansion-record";

class TrailingCorrelationTable extends Component {

    constructor(props){

        super(props);

        this.dataSetupService = new DataSetupService;

        this.correlationData = this.dataSetupService.getCorrelationData();
        this.dailyValuesKeys = this.dataSetupService.getDailyValuesKeys();
        this.dailyValuesKeysFilters = this.formatDailyValuesKeysToFilter(this.dailyValuesKeys);
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

    formatDailyValuesKeysToFilter(dvk) {

        return dvk.slice(1).sort().map(key => {
                return { text: key, value: key};
        })

    }

    formatCorrelationValue(value, direction) {
        const processedValue = Math.round(value * 1000)/10 + '%';
        return <p className={direction}>{processedValue}</p>;
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
                title: 'Day Of',
                dataIndex: 'correlations[0]',
                key: 'day_of',
                render: (value, record)=> {
                    return this.formatCorrelationValue(value.correlation, record.correlations[0].correlation_direction);
                },
                sorter: (a,b) => {
                    return a.correlations[0].correlation - b.correlations[0].correlation;
                },

            }, {
                title: 'One Day After',
                dataIndex: 'correlations[1]',
                key: 'one_day_after',
                render: (value, record) => {
                    return this.formatCorrelationValue(value.correlation, record.correlations[1].correlation_direction);
                },
                sorter: (a,b) => {
                    return a.correlations[1].correlation - b.correlations[1].correlation;
                },

            }, {
                title: 'Two Days After',
                dataIndex: 'correlations[2]',
                key: 'two_days_after',
                render: (value, record) => {
                    return this.formatCorrelationValue(value.correlation, record.correlations[2].correlation_direction);
                },
                sorter: (a,b) => {
                    return a.correlations[2].correlation - b.correlations[2].correlation;
                },

            }, {
                title: 'Three Days After',
                dataIndex: 'correlations[3]',
                key: 'three_days_after',
                render: (value, record) => {
                    return this.formatCorrelationValue(value.correlation, record.correlations[3].correlation_direction);
                },
                sorter: (a,b) => {
                    return a.correlations[3].correlation - b.correlations[3].correlation;
                },

            }, {
                title: 'Four Days After',
                dataIndex: 'correlations[4]',
                key: 'four_days_after',
                render: (value, record) => {
                    return this.formatCorrelationValue(value.correlation, record.correlations[4].correlation_direction);
                },
                sorter: (a,b) => {
                    return a.correlations[4].correlation - b.correlations[4].correlation;
                },


            }, {
                title: 'Overall',
                dataIndex: 'correlation_avg',
                key: 'average',
                render: (value, record) => {
                    return this.formatCorrelationValue(value, record.correlation_total_direction);
                },
                sorter: (a, b) => {
                    return a.correlation_avg - b.correlation_avg;

                }
            }

        ];

        return (
            <div>
                <Table
                    dataSource={this.correlationData}
                    columns={columns}
                    size="middle"
                    expandedRowRender={
                        record => <TrailingCorrelationExpansionRecord record={record}/>
                    }
                />
            </div>
        )
    }
}

export default TrailingCorrelationTable;