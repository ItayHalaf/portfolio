import React, { Component } from 'react';
import "./portfolio-element.css"
import PropTypes from 'prop-types';

export default class PortfolioElement extends Component {
    render() {
        const {url,id,title,onDelete,description} = this.props;
        return (
            <div className="portfolio-element">
                <img onClick={() => this.props.onClick(id)} className="image" src={url} alt="" />
                <div>{title}</div>
                <div>{description}</div>
                <button onClick={() => onDelete(id)} className="button"><i className="fa fa-trash"></i></button>
                <button onClick={()=>this.props.changeToEdit(id)} className="button"><i className="fa fa-edit"></i></button>
            </div>
        );
    }
}

PortfolioElement.propTypes = {
    onClick: PropTypes.func.isRequired,
    changeToEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
