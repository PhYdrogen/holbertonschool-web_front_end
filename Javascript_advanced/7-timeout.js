console.log("Start of the execution queue");
setTimeout(() => {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
    console.log("End of the loop printing");

    console.log("Final code block to be executed")
}, 0);