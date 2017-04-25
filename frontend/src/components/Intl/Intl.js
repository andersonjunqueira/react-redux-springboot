import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { translate } from './Intl.actions';

class Intl extends Component {
    render() {
      const t = translate;
      return (<span>{t(this.props.str, this.props.params)}</span>);
    }
}

Intl.propTypes = {
    str: PropTypes.string.isRequired,
    params: PropTypes.array
};

Intl.defaultProps = {
    params: []
};

const mapStateToProps = (state) => {
    return {
        language: state.intlReducer.currentLanguage
    }
};

Intl = connect(
    mapStateToProps
)(Intl);

export default Intl;

