import React, { Component } from 'react';
import './Employee.css';

class Employee extends Component {
  renderField(field, index) { return <span key={index} title={field.k}>{field.k} {this.props.value[field.v]}</span>; }

  render() {
    return (
      <div className="employee-card">
        <div>
          <h2>{this.props.value.firstName} {this.props.value.lastName}</h2>
        </div>
        
        <div className="computed">
          <span><strong>Computed</strong></span>|
          <span title="getFullName1()">{this.props.value.getFullName1()}</span>|
          <span title="getFullName2()">{this.props.value.getFullName2()}</span>|
          <span title="getHireDateHuman()">{this.props.value.getHireDateHuman()}</span>|
          <span title="getPayEffectiveDateHuman()">{this.props.value.getPayEffectiveDateHuman()}</span>|
          <span title="getCurrentPay()">{this.props.value.getCurrentPay()}</span>|
          <span title="getProratedPay()">{this.props.value.getProratedPay()}</span>|
          <span title="getOrg()">{this.props.value.getOrg()}</span>|
          <span title="getCountryInfo()">{this.props.value.getCountryInfo()}</span>|
          <span title="getManager()">{this.props.value.getManager()}</span>|
          <span title="getPayInfo()">{this.props.value.getPayInfo()}</span>|
          <span title="getOther()">{this.props.value.getOther()}</span>|
        </div>

        <div className="computed">
          <span><strong>Computed-reversed</strong></span>|
          <span title="getFullName1()">{this.props.value.getFullName1Rev()}</span>|
          <span title="getFullName2()">{this.props.value.getFullName2Rev()}</span>|
          <span title="getHireDateHuman()">{this.props.value.getHireDateHumanRev()}</span>|
          <span title="getPayEffectiveDateHuman()">{this.props.value.getPayEffectiveDateHumanRev()}</span>|
          <span title="getCurrentPay()">{this.props.value.getCurrentPayRev()}</span>|
          <span title="getProratedPay()">{this.props.value.getProratedPayRev()}</span>|
          <span title="getOrg()">{this.props.value.getOrgRev()}</span>|
          <span title="getCountryInfo()">{this.props.value.getCountryInfoRev()}</span>|
          <span title="getManager()">{this.props.value.getManagerRev()}</span>|
          <span title="getPayInfo()">{this.props.value.getPayInfoRev()}</span>|
          <span title="getOther()">{this.props.value.getOtherRev()}</span>|
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
}

export default Employee;