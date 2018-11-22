import React, { Component } from 'react';
import "./full-size-component.css"
import PropTypes from 'prop-types';

export default class FullSizeComponent extends Component {
    render() {
        const {url,title,description} = this.props;
        return (
            <div onClick={this.props.onClick} className="full-size">
                <img className="full-image" src={url} alt="" />
                <div>{title}</div>
                <div>{description}</div>
            </div>
        );
    }
}

FullSizeComponent.propTypes= {
    onClick: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}
