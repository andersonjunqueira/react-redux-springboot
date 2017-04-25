import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import  { textFunctions } from '../Text';
import  Number, { numberFunctions } from '../Number';

import  { searchZipcode } from './ZipCode.actions';
import { translate } from '../../components/Intl/Intl.actions';

export const zipcodeFunctions = {  
    applyMask: (value) => {
        let nums = textFunctions.clearMask(value);
        nums = numberFunctions.applyMask(nums);
        return nums.replace(/(\d{2})(\d{3})(\d{3})/g,"$1.$2-$3");
    }
}

class ZipCode extends Component {

    constructor(props) {
        super(props);
        this.normalize = this.normalize.bind(this);
        this.doSearch = this.doSearch.bind(this);
    }

    normalize(value) {
        return value !== undefined ? zipcodeFunctions.applyMask(value) : value;
    }

    doSearch() {
        const { form, callback } = this.props.zipcodeParams;
        let zip = this.props.forms[form].values[this.props.name]
        searchZipcode(zip, callback);
    }

    render() {
        return (
            <Number 
                name={this.props.name}
                label={this.props.label}
                placeholder={this.props.placeholder} 
                help={this.props.help}
                maxLength={10}
                required={this.props.required}
                normalize={this.normalize}
                rightButtonLabel={translate("pesquisar-cep")}
                rightButtonAction={this.doSearch}
                className=""
            />
        )
    }
}

ZipCode.propTypes = {
    label: PropTypes.node,
    placeholder: PropTypes.node,
    help: PropTypes.string,
    required: PropTypes.bool,
    zipcodeParams: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        forms: state.form
    }
};

ZipCode = connect(
    mapStateToProps
)(ZipCode);

export default ZipCode;