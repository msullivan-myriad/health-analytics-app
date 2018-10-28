import React, { Component } from 'react';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class TrailingCorrelationExpansionRecord extends Component {

    constructor(props){

        super(props);
        this.correlations = this.props.record.correlations;
        console.log(this.correlations);


        this.chartData = this.correlations.map(day => {

            const correlation = Math.round((day.correlation * 1000)/10);

            let name;

            if (day.day === 1) {
                name = 'Day Of';
            }

            else if (day.day === 2) {
                name = 'One Day';
            }

            else if (day.day === 3) {
                name = 'Two Days';
            }

            else if (day.day === 4) {
                name = 'Three Days';
            }

            else if (day.day === 5) {
                name = 'Four Days';
            }


            return {
                name: name,
                correlation: correlation,
            }
        })

    }

    render() {

        const data = [
            {name: 'Day Of', correlation: 59.1},
            {name: 'One Day', correlation: 30.2},
            {name: 'Two Days', correlation: 12.6},
            {name: 'Three Days', correlation: 7.0},
            {name: 'Four Days', correlation: 2.1},
            ];

        return (

            <div>
                <ComposedChart
                    width={600}
                    height={400}
                    data={this.chartData}
                    margin={{top: 20, right: 20, bottom: 20, left: 20}}
                >
                    <CartesianGrid stroke='#f5f5f5'/>
                    <XAxis dataKey="name"/>
                    <YAxis type="number" domain={[0,100]}/>
                    <Tooltip/>
                    <Bar dataKey='correlation' barSize={40} fill='#413ea0'/>
                    <Line type='monotone' dataKey='correlation' stroke='#ff7300'/>
                </ComposedChart>
            </div>

        )

    }
}

export default TrailingCorrelationExpansionRecord;