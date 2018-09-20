import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import DevTools from "mobx-react-devtools";

import EmployeeListModel from './state-management/employee-list-model';

const store = new EmployeeListModel();

ReactDOM.render(
  <div>
    <DevTools />
    <App store={store} />
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
