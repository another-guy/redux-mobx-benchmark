import React, { Component } from 'react';
import './App.css';

import Employee from './Employee';
import Timer from './Timer';

import { observer } from 'mobx-react';

@observer
class App extends Component {
  componentDidMount() {
    this.props.store.employeeListRequested();

    return fetch(`http://localhost:3001/employees`)
      .then(response => response.json())
      .then(json => {
        this.props.store.employeeListReceived(json);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Mobx-demo</h1>

        { this.props.store.employeeList.length > 0 && <Timer></Timer> }
        { this.props.store.employeeList.map(employee => <Employee key={employee.employeeSourceId} value={employee} />) }
        { this.props.store.employeeList.length > 0 && <Timer></Timer> }
      </div>
    );
  }
}

export default App;
