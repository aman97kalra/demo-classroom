import React, { useState } from 'react';
import classnames from 'classnames';
import { Button } from '../generic/button';

//import './liveClasses.scss';

export const LiveClasses = ( props ) => {

    const { parseString, handleFieldChange, renderNewUrl, url1 = 'https://www.onlinehtmleditor.net/' } = props;
    const iframe = `<iframe is='x-frame-bypass' src=${url1} width='450' height='450'></iframe>`; 
    console.log( iframe );

    return (
        <div className = 'ui-live-classes-container'>
            <input
                className='search-bar__input'
                onChange = { ( event ) => handleFieldChange( event.target.value ) }
                // onChange={ this.setSearchTerm }
                // placeholder={ this.props.labels.searchBarLabel }
                // value={ this.state.queryParam }
                id='searchBarLabel'
            />
            <div className=''>
                    <Button 
                        color = { 'orange' }
                        value = { 'Render' }
                        size  = { 'medium' }
                        onClick = { renderNewUrl }
                    />
                </div>
            <div>
                <div dangerouslySetInnerHTML={ { __html: iframe } } />
            </div>

        </div>
    );
}