import React, { useState } from 'react';
import classnames from 'classnames';
import './genericTableWithSearch.view.scss';
import { Table } from '../../components/table';
import { isEmpty } from 'lodash';
import { FaChevronCircleRight, FaChevronCircleLeft, FaSearch } from 'react-icons/fa';
import { InputField } from '../generic/inputField';

export const genericTableWithSearch = ( props ) => {
    const { handleSearch, handleShowNextPage, handleShowPreviousPage, currentIndex, maxItemsSize, countries } = props;
    // const [ active, setActive ] = useState( 0 );
    // console.log( 'activeIndexIs', active );
    

    return (
        <div className = 'ui-generic-table-with-search-container'>
            <div className = 'ui-generic-table-with-search-container__heading'> Countries </div>

            <InputField type='text' placeholder="Enter name of Country" iconPosition = 'left' onChange={ ( value ) => handleSearch( value ) } icon={FaSearch} renderIcon = { () => <FaSearch size={15} color='gray' /> }></InputField>

            {/* <div className = 'ui-generic-table-with-search-container__search-bar'> 
                <div className = 'ui-generic-table-with-search-container__search-bar__icon' onClick = { ( event ) => handleShowPreviousPage( event ) }>
                    <FaChevronCircleLeft
                        size = { 15 }
                    />
                </div>
                <input 
                    type="text" 
                    placeholder="Enter name of country" 
                    //style={elementStyle}
                    onChange={ ( event ) =>  handleSearch( event ) } 
                />
            </div> */}

            <Table
                {...props}
            />
            {
                !isEmpty( countries ) &&
                <div className = { 'ui-generic-table-with-search-container__navigation' }>
                {
                    currentIndex !==0 && 
                    <div className = { 'ui-generic-table-with-search-container__navigation__left-arrow'} onClick = { ( event ) => handleShowPreviousPage( event ) }>
                            <FaChevronCircleLeft
                                size = { 13 }
                            />
                    </div>
                }
                <p className = 'ui-generic-table-with-search-container__navigation__page-number' > { `${currentIndex + 1} of ${maxItemsSize} pages` }</p>
                {
                    currentIndex !== maxItemsSize-1 &&
                    <div className = { 'ui-generic-table-with-search-container__navigation__right-arrow'} onClick = { ( event ) => handleShowNextPage( event ) }>
                        <FaChevronCircleRight
                            size = { 13 }
                        />
                    </div>
                }
                </div>
            }
        </div>
    );
}