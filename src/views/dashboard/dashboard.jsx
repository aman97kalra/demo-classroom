import React from 'react';
import './dashboard.scss';
import { conceptVideos } from '../conceptVideos';
import { forceScroller } from '../../hoc/forceScroller';
import { LiveClasses } from '../liveClasses';
import { header as Header } from '../header';

export const dashboard = ( props ) => {
    const ConceptVidoesWithScroller = forceScroller( conceptVideos );
    const items  = [ 1, 2 , 3, 4, 5];
    const headerItems = [ 'Live Consultation', 'Buy Plans', 'View Plans', 'Login']

    return (
        <div className = { 'ui-dashboard'}>
            <Header
                items = { headerItems }
            />
            <ConceptVidoesWithScroller
                items = { items }
                heading = { 'Concept Videos' }
                subheading = { 'Select a number' }
            />
            <LiveClasses
                classes = { items }
                heading = { 'Live Classes' }
                subheading = { 'Select a number' }
            />
        </div>
    );

};
