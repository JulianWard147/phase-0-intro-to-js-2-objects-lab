// Write your solution in this file!

const employee = {name : "Julian", streetAddress: "1234 Dog Street"};

function updateEmployeeWithKeyandValue(employee, key, value) {
    const newRecord = {...employee}
    newRecord[key] = value
    return newRecord
};


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
};

function deleteFromEmployeeByKey(employee, key) {
    const newRecord = {...employee}
    delete newRecord.key
    return newRecord
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.key
};
