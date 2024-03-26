function countPrimeNumbers() {
    let arr = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 1 == 0 && i % i == 0) {
            arr.push(i);
        }
    }
}

now = performance.now()
setTimeout(() => {
    for (let x = 0; x <= 100; x++) {
        countPrimeNumbers();
    }
}, 0);
console.log("Execution time of printing countPrimeNumbers was", performance.now() - now, " milliseconds.");
