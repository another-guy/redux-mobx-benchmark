import React, { Component } from 'react';
import './Employee.css';

const toSimpleName = employeeModel => `${employeeModel.firstName} ${employeeModel.lastName}`;
const reverse = input => input.split('').reverse().join('');

class Employee extends Component {
  renderField(field, index) { return <span key={index}>{field.k} {this.value[field.v]}</span>; }

  get value() { return this.props.employee; }

  render() {
    return (
      <div className="employee-card">
        <div>
          <h2>{this.value.firstName} {this.value.lastName}</h2>
        </div>
        
        <div className="computed">
          <span><strong>Computed</strong></span>|
          <span title="getFullName1()">{this.getFullName1()}</span>|
          <span title="getFullName2()">{this.getFullName2()}</span>|
          <span title="getHireDateHuman()">{this.getHireDateHuman()}</span>|
          <span title="getPayEffectiveDateHuman()">{this.getPayEffectiveDateHuman()}</span>|
          <span title="getCurrentPay()">{this.getCurrentPay()}</span>|
          <span title="getProratedPay()">{this.getProratedPay()}</span>|
          <span title="getOrg()">{this.getOrg()}</span>|
          <span title="getCountryInfo()">{this.getCountryInfo()}</span>|
          <span title="getManager()">{this.getManager()}</span>|
          <span title="getPayInfo()">{this.getPayInfo()}</span>|
          <span title="getOther()">{this.getOther()}</span>|
        </div>

        <div className="computed">
          <span><strong>Computed-reversed</strong></span>|
          <span title="getFullName1()">{this.getFullName1Rev()}</span>|
          <span title="getFullName2()">{this.getFullName2Rev()}</span>|
          <span title="getHireDateHuman()">{this.getHireDateHumanRev()}</span>|
          <span title="getPayEffectiveDateHuman()">{this.getPayEffectiveDateHumanRev()}</span>|
          <span title="getCurrentPay()">{this.getCurrentPayRev()}</span>|
          <span title="getProratedPay()">{this.getProratedPayRev()}</span>|
          <span title="getOrg()">{this.getOrgRev()}</span>|
          <span title="getCountryInfo()">{this.getCountryInfoRev()}</span>|
          <span title="getManager()">{this.getManagerRev()}</span>|
          <span title="getPayInfo()">{this.getPayInfoRev()}</span>|
          <span title="getOther()">{this.getOtherRev()}</span>|
        </div>

        <div className="rendered">
          <span><strong>Rendered</strong></span>
          {
            [
              { k: 'employeeSourceId', v: 'employeeSourceId' },
              { k: 'firstName', v: 'firstName' },
              { k: 'lastName', v: 'lastName' },
              { k: 'payEffectiveDate', v: 'payEffectiveDate' },
              { k: 'hireDate', v: 'hireDate' },
              { k: 'currentPay', v: 'currentPay' },
              { k: 'prorateRatio', v: 'prorateRatio' },
              { k: 'department', v: 'department' },
              { k: 'businessUnit', v: 'businessUnit' },
              { k: 'country', v: 'country' },
              { k: 'countryCode', v: 'countryCode' },
              { k: 'isoCurrencyCode', v: 'isoCurrencyCode' },
              { k: 'managerSourceId', v: 'managerSourceId' },
              { k: 'baseSalary', v: 'baseSalary' },
              { k: 'hourlyRate', v: 'hourlyRate' },
              { k: 'currentPayWithFte', v: 'currentPayWithFte' },
              { k: 'jobCodeKey', v: 'jobCodeKey' },
              { k: 'promotionId', v: 'promotionId' },
              { k: 'isHourly', v: 'isHourly' },
              { k: 'hasPromotionRequest', v: 'hasPromotionRequest' },
            ].map((field, index) => this.renderField(field, index))
          }
        </div>
      </div>
    );
  }

  getProratedPay() { return (this.value.currentPay * this.value.prorateRatio).toFixed(2); }
  getCurrentPay() { return this.value.currentPay.toFixed(2); }
  getFullName1() { return `${this.value.lastName}, ${this.value.firstName}`; }
  getFullName2() { return toSimpleName(this.value); }
  getHireDateHuman() { return new Date(Date.parse(this.value.hireDate)).toLocaleDateString(); }
  getPayEffectiveDateHuman() { return new Date(Date.parse(this.value.payEffectiveDate)).toLocaleDateString(); }
  getOrg() { return `${this.value.department} > ${this.value.businessUnit}`; }
  getCountryInfo() { return `${this.value.country} (${this.value.countryCode}) ${this.value.isoCurrencyCode}`; }
  getManager() { return `Manager: ${toSimpleName(this.props.employeeList.find(p => p.employeeSourceId === this.value.managerSourceId) || {})}`; }
  getPayInfo() { return `Basic pay info: ${JSON.stringify([this.value.baseSalary, this.value.hourlyRate, this.value.currentPayWithFte])}`; }
  getOther() { return `${this.value.jobCodeKey} - ${this.value.promotionId} - ${this.value.isHourly} - ${this.value.hasPromotionRequest}`; }
  getFullName1Rev() { return reverse(this.getFullName1()); }
  getFullName2Rev() { return reverse(this.getFullName2()); }
  getHireDateHumanRev() { return reverse(this.getHireDateHuman()); }
  getPayEffectiveDateHumanRev() { return reverse(this.getPayEffectiveDateHuman()); }
  getCurrentPayRev() { return reverse(this.getCurrentPay()); }
  getProratedPayRev() { return reverse(this.getProratedPay()); }
  getOrgRev() { return reverse(this.getOrg()); }
  getCountryInfoRev() { return reverse(this.getCountryInfo()); }
  getManagerRev() { return reverse(this.getManager()); }
  getPayInfoRev() { return reverse(this.getPayInfo()); }
  getOtherRev() { return reverse(this.getOther()); }
}

export default Employee;
