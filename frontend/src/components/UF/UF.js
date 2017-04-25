import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Select from '../Select';

import { loadUfs } from './UF.actions';

class UF extends Component {

    componentWillMount() {
        if(!this.props.ufs) {
            this.props.loadUfs();
        }
    }

    render() { 
        const attrs = { 
            name: this.props.name, 
            label: this.props.label, 
            placeholder: this.props.placeholder, 
            help: this.props.help,
            required: this.props.required,
            undefinedOption: this.props.undefinedOption,
            options: this.props.ufs
        };
        return (
            <Select {...attrs}/>
        );
    }
}

UF.propTypes = {
    label: PropTypes.node,
    placeholder: PropTypes.node,
    help: PropTypes.string,
    required: PropTypes.bool,
    undefinedOption: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = (state) => {
    return {
        ufs: state.ufReducer.ufs
    }
};

UF = connect(
    mapStateToProps, 
    { loadUfs }
)(UF);

export default UF;
