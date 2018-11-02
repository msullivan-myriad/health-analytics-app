import React, { Component } from 'react';
import BasicTrailingCorrelationTable from "../componenets/basic-trailing-correlation-table";

class BasicTrailingCorrelationPage extends Component {

    constructor(props){
        super(props);
    }
    render() {

        return (

            <div>
                <p>This is the basic trailing data correlation table.  This table allows you to filter, compare, sort, and analyse the primary food data fields (Calories, Carbs, Fat, Sodium, Sugar) against your own custom values</p>
                <p>This table is similar to the basic single day table, but it also includes trailing data for each category.  Sometimes correlations between food and your markers are not restricted to simply the day of, this table is perfect for seeing if there is some kind of delayed correlation between dietary habits</p>
                <p>Green values imply a positive correlation, while the red values are a negative correlation</p>
                <br/>
                <BasicTrailingCorrelationTable/>
            </div>

        )
    }
}

export default BasicTrailingCorrelationPage;