import { types, getParent } from 'mobx-state-tree';

const toSimpleName = employeeModel => `${employeeModel.firstName} ${employeeModel.lastName}`;

const reverse = input => input.split('').reverse().join('');

const EmployeeModel = types
  .model(
    `Employee`,
    {
      employeeSourceId: types.string,
      firstName: types.string,
      lastName: types.string,
      payEffectiveDate: types.string,
      hireDate: types.string,
      currentPay: types.number,
      prorateRatio: types.number,
      department: types.string,
      businessUnit: types.string,
      country: types.string,
      countryCode: types.string,
      isoCurrencyCode: types.string,
      managerSourceId: types.string,
      baseSalary: types.number,
      hourlyRate: types.number,
      currentPayWithFte: types.number,
      jobCodeKey: types.string,
      promotionId: types.string,
      isHourly: types.boolean,
      hasPromotionRequest: types.boolean,
    }
  )
  .views(
    employeeModel => ({
      getProratedPay: () => (employeeModel.currentPay * employeeModel.prorateRatio).toFixed(2),
      getCurrentPay: () => employeeModel.currentPay.toFixed(2),
      getFullName1: () => `${employeeModel.lastName}, ${employeeModel.firstName}`,
      getFullName2: () => toSimpleName(employeeModel),
      getHireDateHuman: () => new Date(Date.parse(employeeModel.hireDate)).toLocaleDateString(),
      getPayEffectiveDateHuman: () => new Date(Date.parse(employeeModel.payEffectiveDate)).toLocaleDateString(),
      getOrg: () => `${employeeModel.department} > ${employeeModel.businessUnit}`,
      getCountryInfo: () => `${employeeModel.country} (${employeeModel.countryCode}) ${employeeModel.isoCurrencyCode}`,
      getManager: () => `Manager: ${toSimpleName(getParent(employeeModel, 1).find(p => p.employeeSourceId === employeeModel.managerSourceId) || {})}`,
      getPayInfo: () => `Basic pay info: ${JSON.stringify([employeeModel.baseSalary, employeeModel.hourlyRate, employeeModel.currentPayWithFte])}`,
      getOther: () => `${employeeModel.jobCodeKey} - ${employeeModel.promotionId} - ${employeeModel.isHourly} - ${employeeModel.hasPromotionRequest}`,

      getFullName1Rev: () => reverse(employeeModel.getFullName1()),
      getFullName2Rev: () => reverse(employeeModel.getFullName2()),
      getHireDateHumanRev: () => reverse(employeeModel.getHireDateHuman()),
      getPayEffectiveDateHumanRev: () => reverse(employeeModel.getPayEffectiveDateHuman()),
      getCurrentPayRev: () => reverse(employeeModel.getCurrentPay()),
      getProratedPayRev: () => reverse(employeeModel.getProratedPay()),
      getOrgRev: () => reverse(employeeModel.getOrg()),
      getCountryInfoRev: () => reverse(employeeModel.getCountryInfo()),
      getManagerRev: () => reverse(employeeModel.getManager()),
      getPayInfoRev: () => reverse(employeeModel.getPayInfo()),
      getOtherRev: () => reverse(employeeModel.getOther()),
    })
  );

export default EmployeeModel;
