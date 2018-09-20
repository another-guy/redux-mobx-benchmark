import React, { Component } from 'react';
import { connect } from 'react-redux';

import Employee from './Employee';
import Timer from './Timer';

import { employeeListReceived, employeeListRequested } from './state-management/actions';

import './App.css';

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

        { this.props.employeeList.length > 0 && <Timer></Timer> }
        {
          this.props.employeeList.map(
            employee => <Employee key={employee.employeeSourceId} id={employee.employeeSourceId} {...this.props} />
          )
        }
        { this.props.employeeList.length > 0 && <Timer></Timer> }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  employeeList: state.employeeReducer.employeeList
});

const mapDispatchToProps = {
  employeeListRequested,
  employeeListReceived,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
