import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import AppModel from './state-management/AppModel';

const appModel = AppModel.create({ status: 'Empty', employeeList: [] });

ReactDOM.render(
  <App appModel={appModel} />,
  document.getElementById('root')
);
registerServiceWorker();
