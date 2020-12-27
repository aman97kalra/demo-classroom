import React from 'react';
import { get, map } from 'lodash';
import './cardWithImage.scss';

export const CardWithImage = ( props ) => {
    const { launch_success = false, mission_name = '', mission_id = '', launch_year, launch_landing = false,  links = {} } = props.item;
    const imageSrc = get( links, 'mission_patch_small', '' );
    const itemsArray = [ 
        { title: 'Mission Ids' , id: 'launch_year', values: [ mission_id ] },
        { title: 'Launch Year' , id: 'launch_success' , values: [ launch_year ] },
        { title: 'Successful Launch' , id: 'land_success', values: [ launch_success ] } 
    ];
    return (
        <div className = 'ui-card-with-image'>
            <div className = 'ui-card-with-image__image' style = { { backgroundImage: `url( ${imageSrc} )`, backgroundColor: '#F0EEED', width: '200px', height: '350px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' } }>
                {/* <img src = { imageSrc } alt = 'space mission' /> */}
            </div>
            <div className = 'ui-card-with-image__content'>
                <div className = 'ui-card-with-image__content__title'>
                    { `${ mission_name }`}
                </div>
                <div className = 'ui-card-with-image__content__items'>
                    {
                        map( itemsArray, ( item, index ) => {
                            return(
                                <div className = 'ui-card-with-image__content__items__item'>
                                    <p className = 'ui-card-with-image__content__items__item__label'> { `${ item.title }: ` }</p>
                                     {
                                         map( item.values , ( value ) => {
                                             return (
                                                <p className = 'ui-card-with-image__content__items__item__value' > { `${ value }` } </p>
                                             );
                                         })
                                     }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};
