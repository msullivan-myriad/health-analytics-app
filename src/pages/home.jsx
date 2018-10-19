import React, { Component } from 'react';
import { csvJSON } from "../helpers/csv-to-json";
import { getPearsonCorrelation } from "../helpers/get-pearsons-correlation";
import dailyValues from '../data/daily-values-csv-to-json.json';
import mfpData from '../data/mfpdata.json';


class HomePage extends Component {

    constructor(props){
        super(props);

        console.log('Daily values: ');
        console.log(dailyValues);
        console.log('MFP Data: ');
        console.log(mfpData);

        const sodium = [];
        const carbohydrates = [];
        const calories = [];
        const fat = [];
        const sugar = [];

        mfpData.forEach(day => {
            sodium.push(day.sodium);
            carbohydrates.push(day.carbohydrates);
            calories.push(day.calories);
            fat.push(day.fat);
            sugar.push(day.sugar);
        })

        /*
        console.log('Sodium: ', sodium);
        console.log('Carbs: ', carbohydrates);
        console.log('Calories: ', calories);
        console.log('Fat: ', fat);
        console.log('Sugar: ', sugar);
        */

        const dailyValuesLists = {};

        const objectKeys = Object.keys(dailyValues[0]);

        console.log('Object Keys:', objectKeys);

        objectKeys.forEach(key => {

            dailyValuesLists[key] = [];

        })

        dailyValues.forEach(values => {

                console.log(values);

                objectKeys.forEach(objKey => {

                    dailyValuesLists[objKey].push(values[objKey]);

                })

        })

        console.log('Daily values lists object: ', dailyValuesLists);

    }

    componentDidMount() {
    }

    render(){
        return (
            <div className="home">
                <p>This is some home page content</p>
            </div>
        )
    }
}

export default HomePage;