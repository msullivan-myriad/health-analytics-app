import React, { Component } from 'react';
import { csvJSON } from "../helpers/csv-to-json";
import { getPearsonCorrelation } from "../helpers/get-pearsons-correlation";
//import dailyValuesJson from '../data/daily-values-csv-to-json.json';
import dailyValuesJson from '../data/formatted-daily-values.json';
import mfpData from '../data/mfpdata.json';


class HomePage extends Component {

    constructor(props){
        super(props);

        const dataObject = {
            sodium: [],
            carbohydrates: [],
            calories: [],
            fat: [],
            sugar: [],
        };

        mfpData.forEach(day => {
            dataObject.sodium.push(day.sodium);
            dataObject.carbohydrates.push(day.carbohydrates);
            dataObject.calories.push(day.calories);
            dataObject.fat.push(day.fat);
            dataObject.sugar.push(day.sugar);
        })

        const dvKeys = this.getDailyValuesKeys(dailyValuesJson);
        const dvList = this.createDailyValuesList(dailyValuesJson, dvKeys);


        //List of all correlated object data

        const correlatedData = [];

        dvKeys.forEach(key => {

            if (key != 'Measurement') {

                let list = dvList[key];

                Object.keys(dataObject).forEach(doKey => {

                    let correlation = getPearsonCorrelation(list, dataObject[doKey]);
                    let correlationDirection = correlation > 0 ? 'positive' : 'negative';


                    correlatedData.push({
                        'key' : key,
                        'compared_against' : doKey,
                        'correlation' : Math.abs(correlation),
                        'correlation_direction' : correlationDirection,
                    })


                })


            }

        })


        correlatedData.sort((a, b) => {
            return b.correlation - a.correlation;
        })

        console.table(correlatedData);

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


                    if (objKey != 'Measurement') {
                        dailyValuesLists[objKey].push(values[objKey]);
                    }

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