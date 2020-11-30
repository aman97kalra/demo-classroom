import React from 'react';
import './table.view.scss';
import classnames from 'classnames';
import { isEmpty, map } from 'lodash';

export const TableView = ( props ) => {
    const { columns = [], countries = [], handleSort, columnsHeader } = props;
    if( isEmpty( countries ) ) {
        return (
            <div> No Country Found</div>
        );
    } else {
        return (
            <div className = 'ui-table'>
                <div className = 'ui-table__head'> 
                {
                    map( columnsHeader, ( column, index ) => {
                            return (
                                <div className = 'ui-table__head__cell'>{ column } </div>
                        );
                    } )
                }
                </div>
                <div className = 'ui-table__body'> 
                {
                    map( countries, ( country, index ) => {
                        return (
                            <div className = 'ui-table__body__row'> 
                            {
                                columns.map( ( column, index ) => {
                                    return (
                                    <div className = 'ui-table__body__row__cell'> { country[ column ] }</div>
                                );
                            } )
                            }
                            </div>
                        );
                        
                    })
                }
                </div>
            </div>
        )
    }
};
