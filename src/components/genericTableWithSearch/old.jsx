import React from 'react';
import { find, get, isEmpty, isUndefined, toUpper, chunk, size, forEach, toLower, includes } from 'lodash';
import { Card } from '../../views/card';
import { genericTableWithSearch as GenericTableWithSearchView } from '../../views/genericTableWithSearch';


export class GenericTableWithSearch extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            searchQuery: '',
            currentIndex: 0,
            maxItemsSize: 0
        }
        // bind methods to this
        this.__bind();

    }

    __bind() {
        this.handleSearch = this.handleSearch.bind( this );
        this.selectedCountries  = this.selectedCountries.bind( this );
        this.handleShowNextPage = this.handleShowNextPage.bind( this );
        this.handleShowPreviousPage = this.handleShowPreviousPage.bind( this );
    }

    componentDidMount() {
        const groupOfCountries = chunk( this.props.countries, this.props.chunkSize );
        this.setState( {
            maxItemsSize: size( groupOfCountries )
        });
    }

    handleSearch( event ) {
        const searchQuery = event.target.value;
        console.log( 'handleSearch', searchQuery );
        this.setState({
            searchQuery: searchQuery
        });
    }

    handleShowNextPage( event ) {
        if( this.state.currentIndex === 20 ) {

        } else {
            this.setState({
                currentIndex: this.state.currentIndex+1
            });
        }
        console.log( 'handleShowNextPage', this.state.currentIndex );
    }

    handleShowPreviousPage( event ) {
        if( this.state.currentIndex === 0 ) {

        } else {
            this.setState({
                currentIndex: this.state.currentIndex-1
            });
        }
        console.log( 'handleShowPreviousPage', this.state.currentIndex );
    }

    selectedCountries( ) {
        const countries = get( this.props, 'countries', [] );
        if( isEmpty( this.state.searchQuery ) ) {
            const groupOfCountries = chunk( countries,  this.props.chunkSize );
            console.log( groupOfCountries, groupOfCountries[0], size( groupOfCountries ) );
            // this.setState( {
            //     maxItemsSize: size( groupOfCountries )
            // });
            return groupOfCountries[ this.state.currentIndex ];
            // return countries;
        } else if( !isEmpty( this.state.searchQuery ) ) {
            const _countries = [];

            // const selectedCountry = find( countries, ( country ) => {
            //     return toUpper( country.Country ) === toUpper( this.state.searchQuery ) // case insensitive comparison
            // } );
            // if( !isUndefined ( selectedCountry ) ) {
            //     _countries.push( selectedCountry );
            // }

           forEach( countries, ( country ) => {
                if( includes( toLower( country.Country ), toLower( this.state.searchQuery) ) ) {
                    _countries.push( country );
                }
            } );
            
            return _countries;
        }
    }


    render() {
        return(
               <GenericTableWithSearchView
                    { ...this.props}
                    countries = { this.selectedCountries() }
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

