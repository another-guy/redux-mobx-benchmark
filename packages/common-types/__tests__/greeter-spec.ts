import { testEmployeeList } from '../src/test-employee-list';

test('Should greet with message', () => {
  expect(testEmployeeList.employees.length).toEqual(99);
});
