
function countPrimeNumbers() {
    now = performance.now()
    let arr = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 1 == 0 && i % i == 0) {
            arr.push(i);
        }
    }
    console.log("Execution time of printing countPrimeNumbers was", performance.now() - now, " milliseconds.");
}

countPrimeNumbers();