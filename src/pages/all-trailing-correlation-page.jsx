import React, { Component } from 'react';
import AllTrailingCorrelationTable from "../componenets/all-trailing-correlation-table";

class AllTrailingCorrelationPage extends Component {

    constructor(props){
        super(props);
    }
    render() {

        return (

            <div>
                <p>Some text about the all single day correlations table here</p>
                <p>This is the all single day correlation table.  This table allows you to filter, compare, sort, and analyse every diet and custom metric against EVERY SINGLE OTHER custom metric every diet and custom metric against EVERY SINGLE OTHER custom metric.  This can be a powerful tool in finding deeper correlations and trends among your own custom fields</p>
                <p>The filter option filters BOTH THE 'field' and 'compared against' column at the same time.  Don't rely  on a field you are looking for to be in one specific column over the other</p>
                <br/>

                <p>This table is similar to the all single day table, but it also includes trailing data for each category.  Sometimes correlations between food and your markers are not restricted to simply the day of, this table is perfect for seeing if there is some kind of delayed correlation between dietary habits</p>
                <p>Green values imply a positive correlation, while the red values are a negative correlation</p>
                <br/>
                <AllTrailingCorrelationTable/>
            </div>

        )
    }
}

export default AllTrailingCorrelationPage;