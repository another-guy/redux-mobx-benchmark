import React, { Component } from 'react';
import './App.css';
import Employee from './Employee';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// TODO Move
function employeeListRequested() {
  return {
    type: 'EMPLOYEE_LIST_REQUESTED'
  };
}
function employeeListReceived(employeeList) {
  return {
    type: 'EMPLOYEE_LIST_RECEIVED',
    employeeList
  };
}

class App extends Component {

  componentDidMount() {
    this.props.employeeListRequested();

    return fetch(`http://localhost:3001/employees`)
      .then(response => response.json())
      .then(json => {
        this.props.employeeListReceived(json);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Redux-only-demo</h1>

        { this.props.employeeList.map(employee => <Employee key={employee.employeeSourceId} value={employee} />) }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  employeeList: state.employeeReducer.employeeList
});
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    employeeListRequested,
    employeeListReceived,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
