let globalVariable = "Welcome"

/**
 * A 2 deep level nesting function, the goal is to demonstrate how
 * to do it
 */
function outer() {
    alert(globalVariable);
    let course = "Holberton";
    function inner() {
        alert(globalVariable + " " + course);
        let exclamation = "!";
        function inception() {
            alert(globalVariable + course + exclamation);
        }
        inception();
    }
    inner();
}

outer();