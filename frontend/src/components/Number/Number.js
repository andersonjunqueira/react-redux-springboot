import React, { Component, PropTypes } from 'react';

import Text from '../Text';

export const numberFunctions = { 
    applyMask: (value) => value !== undefined ? value.replace(/[^\d]/g, '') : value,
    minValueValidator: min => value => (value && value < min) ? "Valor mínimo permitido: " + min : undefined,
    maxValueValidator: max => value => (value && value > max) ? "Valor máximo permitido: " + max : undefined
}

class Number extends Component {

    constructor(props) {
        super(props);
        this.getValidators = this.getValidators.bind(this);
        this.normalize = this.normalize.bind(this);
    }

    getValidators() {
        const validators = [];

        if(this.props.minValue) {
            validators.push(numberFunctions.minValueValidator(this.props.minValue));
        }

        if(this.props.maxValue) {
            validators.push(numberFunctions.maxValueValidator(this.props.maxValue));
        }

        this.props.validators.forEach(function(v){
            validators.push(v);
        });

        return validators;
    }

    normalize(value) {
        if(this.props.normalize) {
            return this.props.normalize(value);
        } else {
            return numberFunctions.applyMask(value);
        }
    }

    render() {
        return (
            <Text
                name={this.props.name}
                label={this.props.label}
                placeholder={this.props.placeholder} 
                help={this.props.help}
                maxLength={this.props.maxLength}
                required={this.props.required}
                validators={this.getValidators()}
                normalize={this.normalize}
                className={this.props.className}
                rightButtonLabel={this.props.rightButtonLabel}
                rightButtonAction={this.props.rightButtonAction}
            />
        );
    }
}

//TODO [AJ] INCLUIR COMPORTAMENTO PARA CASAS DECIMAIS

Number.propTypes = {
    label: PropTypes.node,
    className: PropTypes.string,
    placeholder: PropTypes.node,
    help: PropTypes.string,
    maxLength: PropTypes.number,
    required: PropTypes.bool,
    rightButtonLabel: PropTypes.string,
    rightButtonAction: PropTypes.func,

    maxValue: PropTypes.number,
    minValue: PropTypes.number,

    validators: PropTypes.array,
    normalize: PropTypes.func
}

Number.defaultProps = {
    className: "text-align-right ",
    validators: []
};

export default Number;