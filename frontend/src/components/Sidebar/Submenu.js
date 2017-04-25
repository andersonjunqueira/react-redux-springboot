import React, { Component } from 'react';

import Intl from '../Intl';
import MenuHeading from './MenuHeading';
import MenuItem from './MenuItem';

class Submenu extends Component {
    render() {
        const { activeRoute, handleClick, item } = this.props;
        return (
            <li className={this.props.activeRoute(item.url)}>
                <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.props.handleClick}><i className="icon-puzzle"></i> <Intl str={item.text}></Intl></a>
                <ul className="nav-dropdown-items">
                    {item.submenu.map( (item, index) => {
                        if(item.heading) {
                            return <MenuHeading key={index} item={item} />
                        } else if(item.submenu) {
                            return <Submenu key={index} item={item} activeRoute={activeRoute} handleClick={handleClick} />
                        } else {
                            return <MenuItem key={index} item={item} />
                        }
                    })}
                </ul>
            </li>
        );
    }
}

export default Submenu;
