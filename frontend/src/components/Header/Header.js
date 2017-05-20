import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Dropdown, DropdownMenu, DropdownItem, Button } from 'reactstrap';

import Intl from '../../components/Intl';

import { logout } from '../../app/App.actions';
import { headerMenuLoad, userMenuLoad } from './Header.actions';
import { changeLanguage } from '../Intl/Intl.actions';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            dropdownOpen: false
        };
    }

    componentWillMount() {
        this.props.headerMenuLoad();
        this.props.userMenuLoad();
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    sidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    mobileSidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    }

    asideToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('aside-menu-hidden');
    }

    logout() {
        this.props.logout(this.props.auth);
    }

    render() {
        const chLang = this.props.changeLanguage;

        return (
            <header className="app-header navbar">
                <button className="navbar-toggler mobile-sidebar-toggler hidden-lg-up" onClick={this.mobileSidebarToggle} type="button">&#9776;</button>
                <a className="navbar-brand" href="#"></a>

                <ul className="nav navbar-nav hidden-md-down">
                    <li className="nav-item">
                        <a className="nav-link navbar-toggler sidebar-toggler" onClick={this.sidebarToggle} href="#">&#9776;</a>
                    </li>

                    {this.props.headerMenu.map(function(item, index){
                        return (
                            <li key={index} className="nav-item px-1">
                                <Link to={item.url} target={item.target ? item.target : "_self"} className="nav-link">
                                    <i className={item.icon}></i> <Intl str={item.text}></Intl>
                                </Link>
                            </li>
                        );
                    })}

                </ul>

                <ul className="nav navbar-nav ml-auto">

                    {this.props.availableLanguages.map( (item, index) => {
                        if(item !== this.props.currentLanguage) {
                            return (
                                <li key={index} className="nav-item nav-flag">
                                    <a onClick={() => chLang(item)} style={{cursor: "pointer"}}>
                                        <i className={"flag flag-" + item}></i>
                                    </a>
                                </li>
                            );
                        } else {
                            return null;
                        }
                    })}

                </ul>
            </header>
        )
    }
}

Header.defaultProps = {
    headerMenu: [],
    userMenu: []
};

const mapStateToProps = (state) => {
    return {
        headerMenu: state.headerReducer.headerMenu,
        userMenu: state.headerReducer.userMenu,
        auth: state.appReducer.auth,
        currentLanguage: state.intlReducer.currentLanguage,
        availableLanguages: state.intlReducer.availableLanguages
    }
};

Header = connect(
    mapStateToProps, 
    { headerMenuLoad, userMenuLoad, logout, changeLanguage } 
)(Header);

export default Header;
