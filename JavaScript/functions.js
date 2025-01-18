//with argument with return 
function SECE(dept){
    console.log("The Department is",dept)
    return "The SEction Of the depatment A";
}
console.log(SECE("CSE"))

//  Function with Arguments but No Return Value
function printDepartment(dept) {
    console.log("The Department is", dept);
}

printDepartment("CSE");
// Function with No Arguments but a Return Value

function getDepartment() {
    return "The Section of the department A";
}

console.log(getDepartment());
// Function with No Arguments and No Return Value
function printMessage() {
    console.log("No arguments and no return value");
}

printMessage();
