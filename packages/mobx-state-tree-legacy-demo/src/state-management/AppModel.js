import { types } from 'mobx-state-tree';
import EmployeeModel from './EmployeeModel';

const AppModel = types
  .model(
    `App`,
    {
      status: types.string,
      employeeList: types.array(EmployeeModel)
    }
  )
  .actions(
    appModel => ({
      employeeListRequested() {
        appModel.status = 'Loading...';
      },
      employeeListReceived(employeeList) {
        appModel.status = 'Loaded!'
        appModel.employeeList = employeeList;
      }
    })
  );

export default AppModel;
