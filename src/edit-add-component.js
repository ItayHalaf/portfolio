import React, { Component } from "react";
import "./edit-add-component.css"
import PropTypes from 'prop-types';

export default class EditAddComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      url: ""
    };
  }

  componentDidMount() {
    if (this.props.isUpdate) this.setEditableInfo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isUpdate !== prevProps.isUpdate) {
      if (this.props.isUpdate) {
        this.setEditableInfo();
      } else {
        this.resetState();
      }
    }
  }

  setEditableInfo() {
    const currentItemValues = this.props.getItemInfo();
    this.setState({
      title: currentItemValues.title || "",
      description: currentItemValues.description || "",
      url: currentItemValues.url || ""
    });
  }
  resetState() {
    this.setState({
      title: "",
      description: "",
      url: ""
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  onSubmit = () => {
    this.props.action(this.state);
  };

  render() {
    const { title, url, description } = this.state;
    return (
      <div className="layoutContainer">
        <label>url: <input id="url" value={url} type="text" onChange={this.handleChange}/></label>
        <label>title: <input id="title" value={title} type="text" onChange={this.handleChange}/></label>
        <label>description: <input id="description" value={description} type="text" onChange={this.handleChange} /></label>
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

EditAddComponent.propTypes = {
  action: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool.isRequired,
  getItemInfo: PropTypes.func.isRequired
}
