import React from 'react';
import './conceptVideos.scss';
import { get } from 'lodash';
import classnames from 'classnames';
import { FaYoutube } from 'react-icons/fa';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

export const conceptVideos = ( props ) => {

    // const image1 = require( '../../images/gogeta.jpg' );
    // const image2 = require( '../../images/goku_blue.png' );
    // const image3 = require( '../../images/goku_red.png' );
    // console.log( 'image1', image1 );
    // final = [ [1,5], [2,4], [3] ];  // 3 different layers
    
    const array = get( props, 'items', [] );

    return (
        <div className = 'ui-concept-videos-container'>
            <div className = 'ui-concept-videos-container__heading'> { props.heading } </div>
            <div className = 'ui-concept-videos-container__sub-heading'> { props.subheading } </div>
            <div className = 'ui-concept-videos-container__carousel'>
                <div className = { 'ui-concept-videos-container__carousel__left-arrow'} onClick = { ( event ) => props.handleMoveBackward( event ) }>
                    <FaChevronCircleLeft
                        size = { 50 }
                    />
                </div>
                {
                    array.map( ( item, index ) => {
                        const className = classnames( 'ui-concept-videos-container__carousel__item', `ui-concept-videos-container__carousel--item${index}` );
                        return (
                            <div className = { className }>
                                <div className = { 'ui-concept-videos-container__carousel__item__content' }>
                                    <div className = { 'ui-concept-videos-container__carousel__item__content__icon' }>
                                        <FaYoutube
                                            size = { '40px' }
                                        />
                                    </div>
                                    <div className = { 'ui-concept-videos-container__carousel__item__content__label' }>
                                        <p> { `Class ${ item }` }</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                <div className = { 'ui-concept-videos-container__carousel__right-arrow'} onClick = { ( event ) => props.handleMoveForward( event ) }>
                    <FaChevronCircleRight
                        size = { 50 }
                    />
                </div>
            </div>
        </div>
    );
}