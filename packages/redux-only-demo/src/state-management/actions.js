export function employeeListRequested() {
  return {
    type: 'EMPLOYEE_LIST_REQUESTED'
  };
}

export function employeeListReceived(employeeList) {
  return {
    type: 'EMPLOYEE_LIST_RECEIVED',
    employeeList
  };
}
