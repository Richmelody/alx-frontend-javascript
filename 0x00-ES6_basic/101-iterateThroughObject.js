export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = [];
  for (const employee of reportWithIterator) {
    employeeNames.push(employee.name);
  }
  return employeeNames.join('|');
}

