import React from 'react';
import './header.scss';
import {  Button } from '../generic/button'

export const header = ( props ) => {
    const { items = [] } = props;
    return (
        <div className = 'ui-site-header'> 
        {
            items.map( ( item, index ) => {
                if( item === 'Login') {
                    return (
                        <Button 
                            color = { 'orange' }
                            value = { 'Log In' }
                            size  = { 'medium' }
                        />
                    );
                } else {
                    return (
                        <div className = { 'ui-site-header__item'}>
                            <p> { item } </p>
                        </div>
                    );
                }
            } )
        }
        </div>
    );
}