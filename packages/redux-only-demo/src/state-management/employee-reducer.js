const defaultStatus = '';
const defaultEmployeeList = [];

const defaultState = {
  status: defaultStatus,
  employeeList: defaultEmployeeList,
};

const employeeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'EMPLOYEE_LIST_REQUESTED':
      return Object.assign({}, state, {
        status: 'loading...',
        employeeList: state.employeeList,
      });

    case 'EMPLOYEE_LIST_RECEIVED':
      return Object.assign({}, state, {
        status: defaultStatus,
        employeeList: action.employeeList,
      });

    default:
      return state;
  }
};

export default employeeReducer;
