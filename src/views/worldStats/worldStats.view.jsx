import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer  } from 'recharts';
import { round } from 'lodash';
import './worldStats.view.scss';

export const WorldStatsView = ( props ) => {
    const { globalData = {} , title, countries } = props;
    const { TotalConfirmed, TotalRecovered, TotalDeaths } = globalData;
    const activeCases = TotalConfirmed - ( TotalRecovered + TotalDeaths );

    // const _chartData = [];
    // chartData.map( ( item ) => {
	// 	_seriesData.push( {
	// 		name: item.label,
	// 		value: toInteger( item.value )
	// 	} );
	// 	colors.push( item.color );
    // } );
    const chartData = [ 
        { 'name': 'Active', value: activeCases, fill: 'blue' },
        { 'name': 'Recovered', value: TotalRecovered, fill: 'green' },
        { 'name': 'Deaths', value: TotalDeaths, fill: 'red' }
     ]

    const renderLabel = ( item ) => {
        // return (
        //     <p> { item.name } </p>
        // );
        const percentage = round( 100 * ( item.value / TotalConfirmed ) );
        const _label = `${ item.name }  ${item.value} ( ${percentage}% )`;
        return _label;
    }
    return(
        <div className = { 'ui-world-stats-view' } >
            <div className = { 'ui-world-stats-view__title' } > { title } </div>
            <div className = { 'ui-world-stats-view__total-patients' }>
                <p className = 'ui-world-stats-view__total-patients__title'> Total Patients </p>
                <p className = 'ui-world-stats-view__total-patients__value'> { TotalConfirmed } </p>
            </div>
            <div className = { 'ui-world-stats-view__stats-container' }>
                <div className = { 'ui-world-stats-view__stats-container__table' }>
                    <div className = { 'ui-world-stats-view__stats-container__table__total-active' }>
                        <div className = 'ui-world-stats-view__stats-container__table__total-active__box'></div>
                        <p> Active </p>
                        {/* <p> { activeCases } </p> */}
                    </div>
                    <div className = { 'ui-world-stats-view__stats-container__table__total-recovered' }>
                        <div className = { 'ui-world-stats-view__stats-container__table__total-recovered__box' }></div>
                        <p> Recovered </p>
                        {/* <p> { TotalRecovered } </p> */}
                    </div>
                    <div className = { 'ui-world-stats-view__stats-container__table__total-deaths' }>
                        <div className = { 'ui-world-stats-view__stats-container__table__total-deaths__box' }></div>
                        <p> Deaths </p>
                        {/* <p> { TotalDeaths } </p> */}
                    </div>
                </div>
                <div className = { 'ui-world-stats-view__stats-container__graph' }>
                    <ResponsiveContainer width="80%" height={250}>
                        <PieChart height={250}>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            innerRadius = { 30 }
                            fill="#8884d8"
                            label = { renderLabel }
                            dataKey="value"     // on the basis of dataKey property chart is generated
                        />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );  
};
