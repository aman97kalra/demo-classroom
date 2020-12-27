import React from 'react';
import axios from 'axios';
import { SpaceProgram } from '../../views/spaceProgram';
import { cloneDeep, isNil } from 'lodash';

export class spaceX extends React.Component {

    constructor( props ) {
        super( props );

        let queryParams = window.location.search;
        queryParams = queryParams.replace( '?', '' );
        const filters = queryParams.split( '&' );
        const obj = {};
        filters.map( ( filter ) => {
            const value = filter.split( '=' );
            if( value.length === 2 ) {
                obj[ value[ 0 ] ] = value[ 1 ]; 
            }
        });
        
        this.state = {
            response: {},
            isLoading: false,
            filters: {
                ...obj
            }
        }
        this.url = 'https://api.spacexdata.com/v3/launches';
        
        // bind methods to this
        this.__bind();

    }

    appendFiltersToUrl( obj, url ) {
        let newUrl = url;
        const _keys = Object.keys( obj );
        _keys.map( ( key ) => {
            newUrl = this.addParamsToUrl( newUrl, key, obj[ key ] )
        });
        return newUrl;
    }

    componentDidMount() {
        // const apiUrl = this.appendFiltersToUrl( this.state.filters, this.url );
        this.fetchNetworkRequest( this.state.filters );
    }

    handleFilters( filterKey, filterValue ) {

        let newFilters;
        if( !isNil( this.state.filters[ filterKey ] ) ) {
            const clonedState = cloneDeep( this.state.filters );
            if( this.state.filters[ filterKey ] === filterValue ) {
                delete clonedState[ filterKey ];
                newFilters = clonedState;
            } else {
                clonedState[ filterKey ] = filterValue;
                newFilters = clonedState;
            }
        } else {
            newFilters = { ...this.state.filters, [ filterKey ]: filterValue };
        }

        // const newFilters = { ...this.state.filters, [ filterKey ]: filterValue };
        this.fetchNetworkRequest( newFilters );

    }

    fetchNetworkRequest( filters ) {
        this.setState( {
            isLoading: true,
            filters: filters
        }, () => {
            const apiUrl = this.appendFiltersToUrl( this.state.filters, this.url );
            this.updateUrl( apiUrl );
            axios.get( apiUrl ).then( ( response ) => {
                console.log( 'Network Request Successful', response );
                this.setState( {
                    response: response.data,
                    isLoading: false
                } );
            } ).catch( ( error ) => {
                console.log( error );
            } ).finally( () => {
                console.log( 'Network request Completed' );
            } );
        });
    }

    updateUrl( url ) {
        console.log( 'old url', url );
        const splitUrl = url.split( '?' );
        splitUrl.splice( 0, 1);
        let newUrl = splitUrl.join( '&' );
        console.log( 'new url' , newUrl );
        window.history.pushState(null, '', `?${newUrl}` ); 
    }

    addParamsToUrl( url, key, value ) {
        if( url.indexOf( '?' ) !== -1 ) {
            return `${ url }&${ key }=${ value }`
        } 
        return `${ url }?${ key }=${ value }`;
    }

    handleYearFilter( yearValue ) {
        console.log( 'Year Value', yearValue );
        // const modifiedUrl = this.addParamsToUrl( this.url, 'launch_year', yearValue );
        const newFilters = { ...this.state.filters, launch_year: yearValue }
        this.fetchNetworkRequest( newFilters );
    }

    async handleLaunchFilter( value ) {
        // const modifiedUrl = this.addParamsToUrl( this.url, 'launch_success', value  );
        // await this.fetchNetworkRequest( modifiedUrl );
        // this.updateUrl( modifiedUrl );

        const newFilters = { ...this.state.filters, launch_success: value }
        this.fetchNetworkRequest( newFilters );
    }

    async handleLandingFilter( value ) {
        const modifiedUrl = this.addParamsToUrl( this.url, 'land_success', value  );
        await this.fetchNetworkRequest( modifiedUrl );
        this.updateUrl( modifiedUrl );
    }

    __bind() {
        this.handleYearFilter = this.handleYearFilter.bind ( this );
        this.handleFilters = this.handleFilters.bind ( this );
        this.handleLaunchFilter = this.handleLaunchFilter.bind ( this );
        this.handleLandingFilter = this.handleLandingFilter.bind ( this );
        this.fetchNetworkRequest  = this.fetchNetworkRequest.bind( this );
    }

    render() {
        return(
            <div className = 'ui-space-program'>
                {
                    <SpaceProgram
                        items  = { this.state.response }
                        loading = { this.state.isLoading }
                        handleYearFilter = { this.handleYearFilter }
                        handleLandingFilter = { this.handleLandingFilter }
                        handleLaunchFilter = { this.handleLaunchFilter }
                        handleFilters = { this.handleFilters }
                    />
                }
            </div>
        );
    }

}