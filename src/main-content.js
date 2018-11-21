import React, { Component } from 'react';
import PortfolioElement from "./portfolio-element";
import "./main-content.css"
import PropTypes from 'prop-types';

export default class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                {this.props.data.map((element,index) => <PortfolioElement onClick={this.props.onClick} changeToEdit={this.props.changeToEdit} key={index} {...element} onDelete={this.props.onDelete} />)}
            </div> 
        );
    }
}

MainContent.propTypes = {
    changeToEdit: PropTypes.func,
    data: PropTypes.array,
    onDelete: PropTypes.func,
    onClick: PropTypes.func,
}