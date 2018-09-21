import { types } from 'mobx-state-tree';

const EmployeeModel = types
  .model(
    `Employee`,
    {
      employeeSourceId: types.number,
      firstName: types.string,
      lastName: types.string,
      payEffectiveDate: types.string,
      currentPay: types.number,
      prorateRatio: types.number
    }
  )
  .views(
    employeeModel => ({

      getProratedPay() {
        return (employeeModel.currentPay * employeeModel.prorateRatio).toFixed(2);
      },
      getCurrentPay() {
        return employeeModel.currentPay.toFixed(2);
      }

    })
  );

export default EmployeeModel;
