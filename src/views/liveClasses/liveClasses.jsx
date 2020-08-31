import React, { useState } from 'react';
import classnames from 'classnames';
import './liveClasses.scss';

export const LiveClasses = ( props ) => {
    const { classes } = props;
    const [ active, setActive ] = useState( 0 );
    console.log( 'activeIndexIs', active );

    return (
        <div className = 'ui-live-classes-container'>
            <div className = 'ui-live-classes-container__heading'> { props.heading } </div>
            <div className = 'ui-live-classes-container__sub-heading'> { props.subheading } </div>
            <div className = 'ui-live-classes-container__items'>
                {
                    classes.map( ( item, index ) => {
                        const className = classnames( 'ui-live-classes-container__items__item', {
                            'ui-live-classes-container__items__item--active': index === active 
                        } );
                        return (
                            <div className = { className } onClick = { () => setActive( index ) }>
                                <p> { `Class ${ item }` }</p>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}