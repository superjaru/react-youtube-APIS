import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="p-2 my-3 border border-dark">
        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label>Video Search</label>
            <input
              className="form-control"
              value={this.state.term}
              type="search"
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
