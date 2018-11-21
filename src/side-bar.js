import React, { Component } from 'react';
import "./side-bar.css";
import PropTypes from 'prop-types';

export default class SideBar extends Component {
    render() {
        return(
            <div className="side-bar">
                <h1>Side bar</h1>
                <div className="container">
                    <button className="menuButton" onClick={this.props.changeToAdd}>Add Portfolio Item</button>
                    <button className="menuButton" onClick={this.props.changeToProptflio}>Watch Portfolio</button>
                    <button className="menuButton" onClick={this.props.changeToAbout}>About</button>
                </div>
                <div>
                    <a href="https://www.facebook.com/" target="_blank"><button className="socialNetworkButton"><i className="fa fa-facebook-f"></i></button></a>
                    <a href="https://twitter.com/" target="_blank"><button className="socialNetworkButton"><i className="fa fa-twitter"></i></button></a>
                    <a href="https://www.linkedin.com/" target="_blank"><button className="socialNetworkButton"><i className="fa fa-linkedin"></i></button></a>
                    <a href="https://www.instagram.com/" target="_blank"><button className="socialNetworkButton"><i className="fa fa-instagram"></i></button></a>
                </div>
            </div>
        );
    }
}
SideBar.propTypes = {
    changeToAdd: PropTypes.func,
    changeToProptflio: PropTypes.func,
    changeToAbout: PropTypes.func
};