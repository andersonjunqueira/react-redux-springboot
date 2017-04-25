import React, { Component } from 'react';

import Intl from '../Intl';

class MenuHeading extends Component {
    render() {
        const item = this.props.item;
        return (<li key={item.id} className="nav-title"><Intl str={item.text}></Intl></li>);
    }
}

export default MenuHeading;
