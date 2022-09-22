const employee = {
    name: 'Jon',
    streetAddress: '7387 W Kentucky Dr'
}
/* function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee};
    newObject[key]=value;
    return newObject;
    };
}*/


//this is a shorthand notation for the function above^^^
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,  //<--asks the function to return a copy of 'employee'
        [key]: value, //<--with a specific KEY, assigned to a new VALUE, all indicated within the function parameters
    };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}
//Unsure if this function can be simplified like the one above that adds key:value pairs...
function deleteFromEmployeeByKey (employee, key) {
    const newObject = {...employee};
    delete newObject[key];
    return newObject; //<--Don't forget to ask for the function to RETURN something!
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}