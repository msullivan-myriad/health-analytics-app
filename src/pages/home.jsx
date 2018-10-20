import React, { Component } from 'react';
import { csvJSON } from "../helpers/csv-to-json";
import { getPearsonCorrelation } from "../helpers/get-pearsons-correlation";
import dailyValuesJson from '../data/daily-values-csv-to-json.json';
import mfpData from '../data/mfpdata.json';


class HomePage extends Component {

    constructor(props){
        super(props);

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

        console.log(dailyValuesJson);

        const dvKeys = this.getDailyValuesKeys(dailyValuesJson);

        const dvList = this.createDailyValuesList(dailyValuesJson, dvKeys);

        console.log(dvKeys);
        console.log(dvList);

    }

    getDailyValuesKeys(dailyValues) {
        return Object.keys(dailyValues[0]);
    }

    //Create object of lists of daily value numbers when given a daily values object
    //Could be worth passing two dates to this in the future rather than blindly relying on
    //the length of the list
    createDailyValuesList(dailyValues, dailyValuesKeys) {

        const dailyValuesLists = {};

        dailyValuesKeys.forEach(key => {

            dailyValuesLists[key] = [];

        })

        dailyValues.forEach(values => {

                dailyValuesKeys.forEach(objKey => {

                    dailyValuesLists[objKey].push(values[objKey]);

                })

        })

        return dailyValuesLists;

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