import React from 'react';
import './forceScroller.scss';
import { pullAt, cloneDeep, get } from 'lodash';

// import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

const forceScroller  = ( Component ) => {

    class ForceScroller extends React.Component {
        constructor( props ) {
            super( props );
            this.__bind();
            this.state = {
                items: get( this.props, 'items', [] )
            }

        }
        __bind(){
            this.handleMoveBackward = this.handleMoveBackward.bind( this );
			this.handleMoveForward = this.handleMoveForward.bind( this );
        }
        handleMoveBackward( event ) {
            console.log( 'ForceScroller.handleMoveBackward()' );
            const items = cloneDeep( get( this.state, 'items', [] ) );
            const firstElement = items[ 0 ];
            pullAt( items, 0 );
            items.push( firstElement )
            this.setState( {
                items: items
            })

        }
        handleMoveForward() {
            console.log( 'ForceScroller.handleMoveForward()' );
            const items = cloneDeep( get( this.state, 'items', [] ) );
            // last = _.remove(arr, (el,i)=>{
            //     return i === arr.length -1
            // })
            const firstElement = items[ 4 ];
            pullAt( items, 4 );
            items.splice(0, 0, firstElement );  // no insert method is present in lodash yet
            this.setState( {
                items: items
            })
        }

        render() {
            console.log( 'ForceScroller.render()', this.props );
            return (
                <>
                    <div className = { 'ui-force-scroller-container'}>
                        {/* <div className = { 'ui-force-scroller-container-left-arrow'} onClick = { ( event ) => this.handleMoveBackward( event ) }>
                        <FaChevronCircleLeft
                            size = { 50 }
                        />
                        </div> */}
                        <Component
                            { ...this.props }
                            items = { this.state.items }
                            handleMoveBackward = { this.handleMoveBackward }
                            handleMoveForward = { this.handleMoveForward }

                        />
                        {/* <div className = { 'ui-force-scroller-container-right-arrow'}>
                        <FaChevronCircleRight
                            size = { 50 }
                        />
                        </div> */}
                    </div>
                </>
            );
        }
    }
    return ForceScroller;
}

export { forceScroller };

