/**
 * A closure demonstration, it takes all the environnement variable
 * and when it's exiting no more variable is available outside
 * @param {string} fullName 
 */
function welcomeMessage(fullName) {
    {
        alert("Welcome " + fullName)
    }
}
welcomeMessage("Guillaume");
welcomeMessage("Alex");
welcomeMessage("Fred");