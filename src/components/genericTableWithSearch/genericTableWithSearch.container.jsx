import React from 'react';
import { find, get, isEmpty, isUndefined, toUpper, chunk, size, forEach, toLower, includes, debounce, trim } from 'lodash';
import { Card } from '../../views/card';
import { genericTableWithSearch as GenericTableWithSearchView } from '../../views/genericTableWithSearch';


export class GenericTableWithSearch extends React.Component {

    constructor( props ) {
        super( props );
        // bind methods to this
        this.__bind();
        const _countries = this.selectedCountries();
        console.log( props );
        this.state = {
            searchQuery: '',
            currentIndex: 0,
            maxItemsSize: chunk( this.props.countries, this.props.chunkSize ),
            countries: _countries
        }

    }

    __bind() {
        this.handleSearch = this.handleSearch.bind( this );
        //this.delayedHandleSearch = debounce(this.handleSearch, 300 );
        this.selectedCountries  = this.selectedCountries.bind( this );
        this.handleShowNextPage = this.handleShowNextPage.bind( this );
        this.handleShowPreviousPage = this.handleShowPreviousPage.bind( this );
    }

    componentDidMount() {
        const groupOfCountries = chunk( this.props.countries, this.props.chunkSize );
        console.log( this.props );
        this.setState( {
            maxItemsSize: size( groupOfCountries )
        });
    }

    handleSearch( value ) {
        // const searchQuery = trim( event.target.value );
        const searchQuery = trim( value );
        console.log( 'handleSearch', searchQuery );
        const _updatedCountries = this.selectedCountries( searchQuery, this.state.currentIndex );
        this.setState({
            searchQuery: searchQuery,
            countries: _updatedCountries
        });
    }

    handleShowNextPage( event ) {
        if( this.state.currentIndex === 19 ) {

        } else {
            const _updatedCountries = this.selectedCountries( undefined , this.state.currentIndex+1 );

            this.setState({
                currentIndex: this.state.currentIndex+1,
                countries: _updatedCountries
            });
        }
        console.log( 'handleShowNextPage', this.state.currentIndex );
    }

    handleShowPreviousPage( event ) {
        if( this.state.currentIndex === 0 ) {

        } else {
            const _updatedCountries = this.selectedCountries( undefined , this.state.currentIndex-1 );
            this.setState({
                currentIndex: this.state.currentIndex-1,
                countries: _updatedCountries
            });
        }
        console.log( 'handleShowPreviousPage', this.state.currentIndex );
    }

    selectedCountries( query = '', currentIndex = 0 ) {
        const countries = get( this.props, 'countries', [] );
        if( isEmpty( query ) ) {
            const groupOfCountries = chunk( countries,  this.props.chunkSize );
            console.log( groupOfCountries, groupOfCountries[0], size( groupOfCountries ) );
            
            // infinte loop maximum depth exceeded
            // this.setState( {
            //     maxItemsSize: size( groupOfCountries )
            // });
            return groupOfCountries[ currentIndex ];
            // return countries;
        } else if( !isEmpty( query ) ) {
            const _countries = [];

            // const selectedCountry = find( countries, ( country ) => {
            //     return toUpper( country.Country ) === toUpper( this.state.searchQuery ) // case insensitive comparison
            // } );
            // if( !isUndefined ( selectedCountry ) ) {
            //     _countries.push( selectedCountry );
            // }

           forEach( countries, ( country ) => {
                if( includes( toLower( country.Country ), toLower( query ) ) ) {
                    _countries.push( country );
                }
            } );
            
            return _countries;
        }
    }


    render() {
        return(
               <GenericTableWithSearchView
                    { ...this.props }
                    { ...this.state }
                    countries = { this.state.countries }
                    handleSearch = { this.handleSearch }
                    handleShowNextPage = { this.handleShowNextPage }
                    handleShowPreviousPage = { this.handleShowPreviousPage }
               />
        );
    }

}

GenericTableWithSearch.defaultProps = {
    chunkSize: 10
};

