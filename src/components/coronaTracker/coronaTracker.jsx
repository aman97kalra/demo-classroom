import React from 'react';
import axios from 'axios';
import { Card } from '../../views/card';
import { GenericTableWithSearch } from '../genericTableWithSearch';
import { WorldStatsView } from '../../views/worldStats';
import './coronaTracker.scss';

export class coronaTracker extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            response: {},
            isLoading: true
        }
        // bind methods to this
        this.__bind();

    }

    componentDidMount() {
        const apiUrl = 'https://api.covid19api.com/summary';
        axios.get( apiUrl ).then( ( response ) => {
            console.log( 'Network Request Successful', response.data );
            this.setState( {
                response: response.data,
                isLoading: false
            } );
        } ).catch( ( error ) => {
            console.log( error );
        } ).finally( () => {
            console.log( 'Network request Completed' );
        } );
    }

    __bind() {
        // this.handleFieldChange = this.handleFieldChange.bind ( this );
        // this.renderNewUrl = this.renderNewUrl.bind ( this );
    }

    render() {
        return(
            <div className = 'ui-corona-tracker'>
                {
                    this.state.isLoading ? 
                    <div> Loading Content </div>:
                    <>
                    <Card
                        width = { '70' }
                    >
                        <WorldStatsView
                            globalData = { this.state.response.Global }
                            countries = { this.state.response.Countries }
                            title = { 'World Statistics' }
        
                        />
                    </Card>
                    <Card
                        width = { '70' }
                    >
                         <GenericTableWithSearch
                             countries = { this.state.response.Countries }
                             chunkSize = { 10 }
                         />
                    </Card>
                    </>
                }
            </div>
        );
    }

}