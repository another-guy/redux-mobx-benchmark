import React, { Component } from 'react';
import './App.css';

import { observer } from 'mobx-react';

import Employee from './Employee';
import Timer from './Timer';

class App extends Component {
  componentDidMount() {
    const { appModel } = this.props;

    appModel.employeeListRequested();

    return fetch(`http://localhost:3001/employees`)
      .then(response => response.json())
      .then(json => {
        appModel.employeeListReceived(json);
      });
  }

  render() {
    const { appModel } = this.props;

    return (
      <div className="App">
        <h1>Mobx-demo</h1>

        STATUS: { appModel.status }

        { appModel.employeeList.length > 0 && <Timer></Timer> }
        {
          appModel.employeeList.map(employee =>
            <Employee key={employee.employeeSourceId} value={employee} />
          )
        }
        { appModel.employeeList.length > 0 && <Timer></Timer> }
      </div>
    );
  }
}

export default observer(App);
