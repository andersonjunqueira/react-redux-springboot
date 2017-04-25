import React, { Component } from 'react';
import { Link } from 'react-router'

import Intl from '../Intl';

class MenuItem extends Component {
    render() {
        const item = this.props.item;
        return (
            <li key={item.id} className="nav-item">
                <Link to={item.url} className="nav-link" activeClassName="active">
                    <i className={item.icon}></i> <Intl str={item.text}></Intl>
                    {item.badge && <span className={item.badgeColor}>{item.badge}</span>}
                </Link>
            </li>  
        );
    }
}

export default MenuItem;

