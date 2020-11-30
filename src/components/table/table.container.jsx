import React from 'react';
import { pullAt, cloneDeep, get } from 'lodash';
//import { LiveClasses as MainScreen } from '../../views/mainScreen';
import axios from 'axios';
import { Card } from '../../views/card';
import { TableView } from '../../views/generic/table';


export class Table extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            
        }
        // bind methods to this
        this.__bind();

    }

    __bind() {
        this.handleSort = this.handleSort.bind( this );
    }

    handleSort( event, column ) {
        console.log( column );

    }


    render() {
        const columns = [ 'Country', 'TotalConfirmed', 'TotalDeaths', 'TotalRecovered']
        const columnsHeader = [ 'Country', 'Total Confirmed', 'Total Deaths', 'Total Recovered']
        return(
            <TableView
                columns = { columns }
                columnsHeader = { columnsHeader }
                { ... this.props }
                handleSort = { this.handleSort }
            />
        );
    }

}