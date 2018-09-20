import { observable, computed, action } from 'mobx';

export default class EmployeeListModel {
  @observable status = '';

  @observable employeeList = [];

  @computed get employeeCount() {
    return this.employeeList.length;
  }

  @action employeeListRequested() {
    this.status = 'loading...';
  }

  @action employeeListReceived(employeeList) {
    this.status = 'loaded!';
    this.employeeList = employeeList;
  }
}
