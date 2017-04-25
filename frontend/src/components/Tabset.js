//import React, { Component } from 'react'
//
//class Tabset extends Component {
//
//    _getTabClasses(child) {
//        let classes = "";
//        classes += (child.props.active ? "active " : " ");
//        classes += (child.props.disabled ? "disabled " : "");
//        return classes;
//    }
//
//    render() {
//        const children = this.props.children
//
//        return (
//            <div>
//                <ul id={this.props.id} className={"tab-nav tab-nav--icon " + (this.props.justified ? "tab-nav--justified" : "")}>
//                    {React.Children.map(children, (child, i) => {
//                        return (
//                            <li className={this._getTabClasses(child)}>
//                                <a className={child.props.tabclass} href={"#" + child.props.id} data-toggle={!child.props.disabled ? "tab" : ""} aria-expanded={child.props.active}>
//                                    <i className={"tab-nav--icon " + child.props.icon}></i>
//                                    <span className="tab-nav--header-text"> {child.props.header}</span>
//                                </a>
//                            </li>
//                        )
//                    })}
//                </ul>
//                <div className="tab-content">
//                    {React.Children.map(children, (child, i) => {
//                        return child;
//                    })}
//                </div>
//            </div>
//        );
//    }
//}
//
//Tabset.propTypes = {
//    id: React.PropTypes.string.isRequired,
//    justified: React.PropTypes.bool
//}
//
//Tabset.defaultProps = {
//    justified: true
//};
//
//export default Tabset;
//
