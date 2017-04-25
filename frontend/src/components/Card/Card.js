import React, { Component, PropTypes } from 'react';

class Card extends Component {
  render() {
    let clazz = "card";
    clazz += this.props.className ? " " + this.props.className : "";
    clazz += this.props.inverse ? " card-inverse" : "";
    clazz += this.props.theme ? " card-" + this.props.theme : "";
    clazz += this.props.className ? " " + this.props.className : "";
    return (
      <div className={clazz}>
          {this.props.children}
      </div>
    )
  }
}

Card.propTypes = {
    inverse: PropTypes.bool,
    theme: PropTypes.string,
    className: PropTypes.string
};

export class CardHeader extends Component {
  render() {
    let clazz = "card-header";
    clazz += this.props.className ? " " + this.props.className : "";
    return (
      <div className={clazz}>
        {this.props.children}
      </div>
    )
  }
}

CardHeader.propTypes = {
    className: PropTypes.string
};

export class CardFooter extends Component {
  render() {
    let clazz = "card-footer";
    clazz += this.props.className ? " " + this.props.className : "";
    return (
      <div className={clazz}>
        {this.props.children}
      </div>
    )
  }
}

CardFooter.propTypes = {
    className: PropTypes.string
};

export class CardBody extends Component {
  render() {
    let clazz = "card-block";
    clazz += this.props.className ? " " + this.props.className : "";
    return (
      <div className={clazz}>
        {this.props.children}
      </div>
    )
  }
}

CardBody.propTypes = {
    className: PropTypes.string
};

export class CardGroup extends Component {
  render() {
    let clazz = "card-group ";
    clazz += this.props.className ? " " + this.props.className : "";
    return (
      <div className={clazz}>
        {this.props.children}
      </div>
    )
  }
}

CardGroup.propTypes = {
    className: PropTypes.string
};

export default Card;
