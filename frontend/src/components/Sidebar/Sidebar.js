import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Intl from '../Intl';
import Submenu from './Submenu';
import MenuHeading from './MenuHeading';
import MenuItem from './MenuItem';

import { sidebarMenuLoad } from './Sidebar.actions';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.activeRoute = this.activeRoute.bind(this);
    }

    componentWillMount() {
        this.props.sidebarMenuLoad();
    }

    handleClick(e) {
        e.preventDefault();
        e.target.parentElement.classList.toggle('open');
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    }

    render() {
        const activeRoute = this.activeRoute;
        const handleClick = this.handleClick;
        return (
            <div className="sidebar">
                <nav className="sidebar-nav">
                    <ul className="nav">
                        {this.props.menu.map( (item, index) => {
                            if(item.heading) {
                                return <MenuHeading key={index} item={item} />
                            } else if(item.submenu) {
                                return <Submenu key={index} item={item} activeRoute={activeRoute} handleClick={handleClick} />
                            } else {
                                return <MenuItem key={index} item={item} />
                            }
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}

Sidebar.defaultProps = {
    menu: []
};

const mapStateToProps = (state) => {
    return {
        menu: state.sidebarReducer.sidebarMenu
    }
};

Sidebar = connect(
    mapStateToProps, 
    { sidebarMenuLoad } 
)(Sidebar);

export default Sidebar;
