/**
 * A demo of nested function that display an alert with the two args
 * @param {string} firstName 
 * @param {string} lastName 
 */
function welcome(firstName, lastName) {
    let fullname = firstName + ' ' + lastName;
    function displayFullName() {
        alert("Welcome " + fullname + "!");
    }

    displayFullName();
}