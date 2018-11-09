import { getPearsonCorrelation } from "../helpers/get-pearsons-correlation";
import dailyValuesJson from '../data/formatted-daily-values.json';
import mfpData from '../data/mfpdata-2.json';

class DataSetupService {


    getInitialDataObject() {

        //TODO: These keys should be dynamic
        const dataObject = {
            fiber: [],
            carbohydrates: [],
            calories: [],
            fat: [],
            sugar: [],
        };

        mfpData.forEach(day => {
            dataObject.fiber.push(day.data.fiber);
            dataObject.carbohydrates.push(day.data.carbohydrates);
            dataObject.calories.push(day.data.calories);
            dataObject.fat.push(day.data.fat);
            dataObject.sugar.push(day.data.sugar);
        })

        return dataObject;

    }

    getIndividualFoodCorrelationData() {

        const dvKeys = this.getDailyValuesKeys();
        const dvList = this.createDailyValuesList(dailyValuesJson, dvKeys);
        const individualFoodsData = {};

        mfpData.forEach(day => {

            day.foods.forEach(food => {

                individualFoodsData[food]='test';


                //Need to start adding every measurement to each food item here
                if (individualFoodsData.hasOwnProperty(food)) {
                    individualFoodsData[food]='duplicate!';
                }

                else {
                    individualFoodsData[food]='OG';
                }

            })

        })

        console.log(individualFoodsdata)

    }

    getBasicCorrelationData() {

        const dataObject = this.getInitialDataObject();
        const dvKeys = this.getDailyValuesKeys();
        const dvList = this.createDailyValuesList(dailyValuesJson, dvKeys);


        //List of all correlated object data

        const correlatedData = [];

        //Add a counter to enable keys in list
        let counter = 0;

        dvKeys.forEach(key => {

            if (key != 'Measurement') {

                const list = dvList[key];

                Object.keys(dataObject).forEach(doKey => {

                    //TODO: This will error out if there are not enough data points

                    const correlation1 = getPearsonCorrelation(list, dataObject[doKey]);
                    const correlationDirection1 = correlation1 > 0 ? 'positive' : 'negative';

                    const correlation2 = getPearsonCorrelation(list.slice(1), dataObject[doKey].slice(0,-1));
                    const correlationDirection2 = correlation2 > 0 ? 'positive' : 'negative';

                    const correlation3 = getPearsonCorrelation(list.slice(2), dataObject[doKey].slice(0,-2));
                    const correlationDirection3 = correlation3 > 0 ? 'positive' : 'negative';

                    const correlation4 = getPearsonCorrelation(list.slice(3), dataObject[doKey].slice(0,-3));
                    const correlationDirection4 = correlation4 > 0 ? 'positive' : 'negative';

                    const correlation5 = getPearsonCorrelation(list.slice(4), dataObject[doKey].slice(0,-4));
                    const correlationDirection5 = correlation5 > 0 ? 'positive' : 'negative';

                    const correlation_total = correlation1 + correlation2 + correlation3 + correlation4 + correlation5;

                    counter++;

                    correlatedData.push({
                        key: counter,
                        field : key,
                        compared_against : doKey,
                        correlation_total: Math.abs(correlation_total),
                        correlation_avg: Math.abs(correlation_total/5),
                        correlation_total_direction: correlation_total > 0 ? 'positive' : 'negative',
                        correlations: [
                            {
                                day: 1,
                                correlation : Math.abs(correlation1),
                                correlation_direction : correlationDirection1,
                            },
                            {
                                day: 2,
                                correlation : Math.abs(correlation2),
                                correlation_direction : correlationDirection2,
                            },
                            {
                                day: 3,
                                correlation : Math.abs(correlation3),
                                correlation_direction : correlationDirection3,
                            },
                            {
                                day: 4,
                                correlation : Math.abs(correlation4),
                                correlation_direction : correlationDirection4,
                            },
                            {
                                day: 5,
                                correlation : Math.abs(correlation5),
                                correlation_direction : correlationDirection5,
                            },
                        ]

                    })

                })

            }

        })

        correlatedData.sort((a, b) => {
            return b.correlation_total - a.correlation_total;
        })

        return correlatedData;

    }


    getFullCorrelationData() {

        const dataObject = this.getInitialDataObject();
        const dvKeys = this.getDailyValuesKeys();
        const dvList = this.createDailyValuesList(dailyValuesJson, dvKeys);

        const allLists = {};

        Object.assign(allLists, dataObject, dvList);

        const allListsKeys = Object.keys(allLists);


        //List of all correlated object data
        const correlatedData = [];

        //Add a counter to enable keys in list
        let counter = 0;

        allListsKeys.forEach(key => {

            const list = allLists[key];

            Object.keys(allLists).forEach(allListsKey => {
                //TODO: This will error out if there are not enough data points

                //Check to see if an inverted version of this row already exists
                const isAReverseDuplicate = correlatedData.find(row => {
                    if (row.field ===allListsKey && row.compared_against === key) {
                       return true;
                    }
                });

                //If it does, or if the record is equal to the current key skip it completely
                if (key !== allListsKey && !isAReverseDuplicate) {

                    const correlation1 = getPearsonCorrelation(list, allLists[allListsKey]);
                    const correlationDirection1 = correlation1 > 0 ? 'positive' : 'negative';

                    const correlation2 = getPearsonCorrelation(list.slice(1), allLists[allListsKey].slice(0,-1));
                    const correlationDirection2 = correlation2 > 0 ? 'positive' : 'negative';

                    const correlation3 = getPearsonCorrelation(list.slice(2), allLists[allListsKey].slice(0,-2));
                    const correlationDirection3 = correlation3 > 0 ? 'positive' : 'negative';

                    const correlation4 = getPearsonCorrelation(list.slice(3), allLists[allListsKey].slice(0,-3));
                    const correlationDirection4 = correlation4 > 0 ? 'positive' : 'negative';

                    const correlation5 = getPearsonCorrelation(list.slice(4), allLists[allListsKey].slice(0,-4));
                    const correlationDirection5 = correlation5 > 0 ? 'positive' : 'negative';

                    const correlation_total = correlation1 + correlation2 + correlation3 + correlation4 + correlation5;

                    counter++;

                    correlatedData.push({
                        key: counter,
                        field : key,
                        compared_against : allListsKey,
                        correlation_total: Math.abs(correlation_total),
                        correlation_avg: Math.abs(correlation_total/5),
                        correlation_total_direction: correlation_total > 0 ? 'positive' : 'negative',
                        correlations: [
                            {
                                day: 1,
                                correlation : Math.abs(correlation1),
                                correlation_direction : correlationDirection1,
                            },
                            {
                                day: 2,
                                correlation : Math.abs(correlation2),
                                correlation_direction : correlationDirection2,
                            },
                            {
                                day: 3,
                                correlation : Math.abs(correlation3),
                                correlation_direction : correlationDirection3,
                            },
                            {
                                day: 4,
                                correlation : Math.abs(correlation4),
                                correlation_direction : correlationDirection4,
                            },
                            {
                                day: 5,
                                correlation : Math.abs(correlation5),
                                correlation_direction : correlationDirection5,
                            },
                        ]

                    })

                }


            })


        })

        correlatedData.sort((a, b) => {
            return b.correlation_total - a.correlation_total;
        })

        return correlatedData;

    }

    getDailyValuesKeys() {
        return Object.keys(dailyValuesJson[0]).filter(key => {
            if (key != 'Measurement') {
                return true;
            }
        });
    }

    getAllListsValuesKeys() {

        //TODO: These keys should be dynamic
        const dataObject = {
            fiber: [],
            carbohydrates: [],
            calories: [],
            fat: [],
            sugar: [],
        };

        const dvKeys = this.getDailyValuesKeys();
        const dvList = this.createDailyValuesList(dailyValuesJson, dvKeys);

        const allLists = {};

        Object.assign(allLists, dataObject, dvList);

        return Object.keys(allLists);

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


}

export default DataSetupService;
