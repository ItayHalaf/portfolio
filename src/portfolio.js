import React, { Component } from "react";
import MainContent from "./main-content";
import Data from "./data";
import SideBar from "./side-bar.js";
import "./portfolio.css";
import EditAddComponent from "./edit-add-component";
import _ from "lodash";
import FullSizeComponent from "./full-size-component";
import About from "./about-component";

const ContentTypes = {
  PortfolioItems: "PortfolioItems",
  AddItem: "AddItem",
  EditItem: "EditItem",
  FullSizeItem: "FullSizeItem",
  About: "About"
};

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Data.items,
      contentToShow: ContentTypes.PortfolioItems,
      activeId: null
    };
  }
  deleteItem = key => {
    const newItems = this.state.items.filter(i => i.id !== key.toString());
    this.setState({
      items: newItems
    });
  };

  addItem = item => {
    console.log("add Item", item);
    this.setState(prevState => {
      const newId = +_.maxBy(prevState.items, i => +i.id).id +1
      console.log("newId", newId);
      return {
        items: [...prevState.items, { ...item, id: `${newId}` }]
      };
    });
    this.changeToProptflio();
  };

  editItem = editedItem => {
    const newItems = this.state.items.map(item => {
      if (item.id.toString() === this.state.activeId.toString()) {
        return { ...editedItem, id: item.id };
      }
      return item;
    });

    this.setState({
      items: newItems
    });
    this.changeToProptflio();
  };

  changeToAdd = () => {
    this.setState({
      contentToShow: ContentTypes.AddItem,
      activeId: null
    });
  };

  changeToAbout = () => {
    this.setState({
      contentToShow: ContentTypes.About
    })
  }

  changeToProptflio = () => {
    this.setState({
      contentToShow: ContentTypes.PortfolioItems
    });
  };

  changeToEdit = activeId => {
    this.setState({
      contentToShow: ContentTypes.EditItem,
      activeId: activeId.toString()
    });
  };

  changeToFullSizeMode = activeId => {
    this.setState({
      contentToShow: ContentTypes.FullSizeItem,
      activeId: activeId.toString()
    })
  }

  getItemInfo = () => {
    const result = this.state.items.filter(
      i => i.id.toString() === this.state.activeId
    );
    return result && result.length > 0 ? result[0] : {};
  };

  render() {
    let contentToShow = <div />;

    switch (this.state.contentToShow) {
      case ContentTypes.PortfolioItems:
        contentToShow = (
          <MainContent changeToEdit={this.changeToEdit} data={this.state.items} onDelete={this.deleteItem} onClick={this.changeToFullSizeMode} />
        );
        break;
      case ContentTypes.AddItem:
        contentToShow = <EditAddComponent action={this.addItem} />;
        break;
      case ContentTypes.EditItem:
        contentToShow = (
          <EditAddComponent isUpdate={true} getItemInfo={this.getItemInfo} action={this.editItem} />
        );
        break;
        case ContentTypes.FullSizeItem:
          contentToShow = <FullSizeComponent onClick={this.changeToProptflio} {...this.state.items.filter(item => item.id === this.state.activeId.toString())[0]}/>;
          break;
        case ContentTypes.About:
          contentToShow = <About />;
          break;
    }

    return (
      <div className="portfolio">
        <SideBar changeToAdd={this.changeToAdd} changeToProptflio={this.changeToProptflio} changeToAbout={this.changeToAbout} />
        {contentToShow}
      </div>
    );
  }
}
