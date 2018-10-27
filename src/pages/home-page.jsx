import React, { Component } from 'react';
import DataSetupService from '../services/data-setup-service';

class HomePage extends Component {

    constructor(props){

        super(props);
        this.dataSetupService = new DataSetupService;

        this.correlationData = this.dataSetupService.getCorrelationData();

        console.table(this.correlationData);

    }

    render() {
        return (
            <div className="home">
                <div class="navbar" style={{height: '100px', backgroundColor: 'black'}}></div>
                <br/>
                <p>This is some home page content</p>
            </div>
        )
    }
}

export default HomePage;