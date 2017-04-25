import React, { Component, PropTypes } from 'react';

import  { textFunctions } from '../Text';
import  Number, { numberFunctions } from '../Number';

export const cpfFunctions = { 
    applyMask: (value) => {
        let nums = textFunctions.clearMask(value);
        nums = numberFunctions.applyMask(nums);
        return nums.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4");
    },

    validate: (value) => {
        let isValid = true;
        if(value) {
            let cpf = numberFunctions.applyMask(value); 
            if (cpf.length !== 11 ||
                cpf === "00000000000" ||
                cpf === "11111111111" ||
                cpf === "22222222222" ||
                cpf === "33333333333" ||
                cpf === "44444444444" ||
                cpf === "55555555555" ||
                cpf === "66666666666" ||
                cpf === "77777777777" ||
                cpf === "88888888888" ||
                cpf === "99999999999")
                isValid = false;

            let add = 0;
            for (let i = 0; i < 9; i++) {
                add += parseInt(cpf.charAt(i), 10) * (10 - i);
            }
        
            let rev = 11 - (add % 11);
            if (rev === 10 || rev === 11) {
                rev = 0;
            }

            if (rev !== parseInt(cpf.charAt(9), 10)) {
                isValid = false;
            }
            
            add = 0;
            for (let i = 0; i < 10; i++) {
                add += parseInt(cpf.charAt(i), 10) * (11 - i);
            }

            rev = 11 - (add % 11);
            if (rev === 10 || rev === 11) {
                rev = 0;
            }

            if (rev !== parseInt(cpf.charAt(10), 10)) {
                isValid = false;
            }

        }

        return !isValid ? "CPF inválido" : undefined;
    }

}

class CPF extends Component {

    constructor(props) {
        super(props);
        this.getValidators = this.getValidators.bind(this);
        this.normalize = this.normalize.bind(this);
    }

    getValidators() {
        const validators = [];
        validators.push(cpfFunctions.validate);
        return validators;
    }

    normalize(value) {
        return value !== undefined ? cpfFunctions.applyMask(value) : value;
    }

    render() {
        return (
            <Number 
                name={this.props.name}
                label={this.props.label}
                placeholder={this.props.placeholder} 
                help={this.props.help}
                maxLength={14}
                className=""
                required={this.props.required}
                validators={this.getValidators()}
                normalize={this.normalize}
            />
        );
    }
}

CPF.propTypes = {
    label: PropTypes.node,
    placeholder: PropTypes.node,
    help: PropTypes.string,
    required: PropTypes.bool
}

CPF.defaultProps = {
    validators: []
};

export default CPF;