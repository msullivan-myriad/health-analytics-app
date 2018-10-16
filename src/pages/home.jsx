import React, { Component } from 'react';
import { csvJSON } from "../helpers/csv-to-json";
import { getPearsonCorrelation } from "../helpers/get-pearsons-correlation";

class HomePage extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {

        console.log('Do something here for now');

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