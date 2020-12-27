import React, { useState } from 'react';
import { CardWithImage } from '../generic/cardWithImage';
import { get, isEmpty, map, range } from 'lodash';
import { Button } from '../generic/button';

import './spaceProgram.scss';

export const SpaceProgram = ( props ) => {
    const items = get( props, 'items', [] );
    const filterYears = range( 2006, 2020, 1);
    const { loading, handleFilters } = props;
    const filtersArray = [ 
        { title: 'Launch Year' , id: 'launch_year', values: filterYears },
        { title: 'Successful Launch' , id: 'launch_success' , values: [ true, false ] },
        { title: 'Successful Landing' , id: 'land_success', values: [ true, false ]  } 
    ];
    const [ active, setActive ] = useState( 0 );
    console.log( 'activeIndexIs', active );


    return(
        <div className = 'ui-space-program-view'>
            <p className = 'ui-space-program-view__title'> SpaceX Launch Programs</p>
            <div className = 'ui-space-program-view__content'>
                <div className = 'ui-space-program-view__content__filters'>
                    <p className = 'ui-space-program-view__content__filters__title'> Filters </p>
                        {
                            map( filtersArray, ( item ) => {
                                return (
                                    <>
                                    <p className = 'ui-space-program-view__content__filters__label'> { item.title } </p>
                                    <div className = 'ui-space-program-view__content__filters__year__values'>
                                    {   
                                        map( item.values , ( value, index ) => {
                                            return (
                                                <Button
                                                    onClick = { () => { handleFilters( item.id, value ); setActive( index ); } }
                                                    size = { 'small' }
                                                    color = { 'lightGreen' }
                                                    value = { `${ value }` }
                                                    // isActive = { index === active }
                                                    activeClassName = { 'view-generic-button--active'}
                                                />
                                            )
                                        })
                                    }  
                                    </div>
                                    </>
                                )
                            })
                        }
                </div>

                {/* <div className = 'ui-space-program-view__filters__successful-launch'>
                    <p className = 'ui-space-program-view__filters__successful-launch__label'> Successful Launch </p>
                    <button onClick = { () => { handleLaunchFilter( true ) } }> { 'True'} </button>
                    <button onClick = { () => { handleLaunchFilter( false ) } }> { 'False' } </button>
                </div>
                <div className = 'ui-space-program-view__filters__successful-landing'>
                    <p className = 'ui-space-program-view__filters__successful-landing__label'> Successful Landing </p>
                    <button onClick = { () => { handleLandingFilter( true ) } }> { 'True'} </button>
                    <button onClick = { () => { handleLandingFilter( false ) } }> { 'False' } </button>
                </div> */}
                
            {
                loading ? <p> Loading Content</p>:
                <div className = 'ui-space-program-view__content__cards'> 
                    {
                        isEmpty( items ) ? <p className = 'ui-space-program-view__content__cards__no-data-found'> No Results Found </p>:
                        map( items, ( item, index ) => {
                            return (
                                <CardWithImage
                                    item = { item }
                                    key = { index }
                                />
                            );
                        })
                    }
                </div>
            }
            </div>
            <div className = 'ui-space-program-view__footer'>
                <p className = 'ui-space-program-view__footer__title'>Developed By: </p>
                <p className = 'ui-space-program-view__footer__value'> Aman Kalra</p>
            </div>
            
        </div>
    );  
};
