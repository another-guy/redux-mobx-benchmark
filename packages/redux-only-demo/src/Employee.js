import React, { Component } from 'react';
import './Employee.css';

class Employee extends Component {
  renderField(field, index) { return <span key={index}>{field.k} {this.props.value[field.v]}</span>; }

  currentPay(employee) {
    return employee.currentPay.toFixed(2);
  }

  proratedPay(employee) {
    return (employee.currentPay * employee.prorateRatio).toFixed(2);
  }

  render() {
    return (
      <div className="employee-card">
        <div>
          <h4>Last Pay Change {this.props.value.payEffectiveDate}</h4>
          <h2>{this.props.value.firstName} {this.props.value.lastName}</h2>
        </div>
        <div>
          <div>
            <span>Current range {this.currentPay(this.props.value)}</span>
            <span>Prorated {this.proratedPay(this.props.value)}</span>
          </div>
          <div>
          {
            [
              { k: 'Country', v: 'countryCode' },
              { k: 'Location', v: 'jobCodeKey' },
              { k: 'PromotionId', v: 'promotionId' },
            ].map((field, index) => this.renderField(field, index))
          }
          </div>
          <div>
          {
            [
              { k: 'Department', v: 'department' },
              { k: 'businessUnit', v: 'businessUnit' },
              { k: 'Hire Date', v: 'hireDate' },
            ].map((field, index) => this.renderField(field, index))
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Employee;
