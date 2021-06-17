import React, {Component} from 'react';

class Filter extends Component {
  setFilterAll = () => {
    this.props.setFilter('all');
  };
  setFilterActive = () => {
    this.props.setFilter('active');
  };
  setFilterCompleted = () => {
    this.props.setFilter('completed');
  };
  render() {
    const {filter} = this.props;
    return (
      <p>
        Show:{' '}
        <button disabled={filter === "all"} onClick={this.setFilterAll}>All</button>
        <button disabled={filter === "active"} onClick={this.setFilterActive}>Active</button>
        <button disabled={filter === "completed"} onClick={this.setFilterCompleted}>Completed</button>
      </p>
    );
  }
}
export default Filter;
