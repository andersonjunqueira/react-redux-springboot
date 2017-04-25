import React, { Component, PropTypes } from 'react';
import isEmail from 'sane-email-validation';

import Text from '../Text';

export const emailFunctions = {
     validateEmail: min => value => (value && !isEmail(value)) ? "e-mail inválido" : undefined 
}

class Email extends Component {

    constructor(props) {
        super(props);
        this.getValidators = this.getValidators.bind(this);
    }

    getValidators() {
        const validators = [];
        validators.push(emailFunctions.validateEmail(this.props.value));

        this.props.validators.forEach(function(v){
            validators.push(v);
        });

        return validators;
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
            />
        );
    }
}

Email.propTypes = {
    label: PropTypes.node,
    placeholder: PropTypes.node,
    help: PropTypes.string,
    maxLength: PropTypes.number,
    required: PropTypes.bool,
    validators: PropTypes.array
}

Email.defaultProps = {
    validators: []
};

export default Email;