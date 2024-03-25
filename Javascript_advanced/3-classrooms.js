/**
 * create an array of function that return numb + 1
 * @param {number} numbersOfStudents 
 */
function createClassRoom(numbersOfStudents) {

    function studentSeat(seat) {
        return function () {
            return seat;
        }
    }
    let students = []
    for (let i = 0; i <= numbersOfStudents; i++) {
        students.push(studentSeat(i+1));
    }

    return students;
}


let classRoom = createClassRoom(10);
