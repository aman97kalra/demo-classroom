import React from 'react';
import { pullAt, cloneDeep, get } from 'lodash';
import { LiveClasses as MainScreen } from '../../views/mainScreen';

export class MainPage extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            fieldValue1: '',
            fieldValue2: '',
            url1: '',
            url2: ''
        }
        // bind methods to this
        this.__bind();

    }

    __bind() {
        this.handleFieldChange = this.handleFieldChange.bind ( this );
        this.renderNewUrl = this.renderNewUrl.bind ( this );
    }

    handleFieldChange( value ) {
        console.log( 'mainPage.handleFieldChange()', value );
        this.setState({
            fieldValue1: value
        });
    }

    renderNewUrl() {
        console.log( 'mainPage.renderNewUrl()' );
        this.setState({
            url1: this.state.fieldValue1
        });
    }


    render() {
        return(
            <MainScreen
                { ...this.props }
                { ...this.state }
                handleFieldChange = { this.handleFieldChange }
                renderNewUrl = { this.renderNewUrl }
            />
        );
    }

}


