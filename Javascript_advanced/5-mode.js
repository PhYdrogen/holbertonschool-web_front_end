function changeMode(size, weight, transform, background, color) {
    let root = document.documentElement;
    root.style.fontSize = size;
    root.style.fontWeight = weight;
    root.style.textTransform = transform;
    root.style.backgroundColor = background;
    root.style.color = color;
    console.log(size);
    
}

function main() {
    let spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = () => changeMode(12, "normal", "lowercase", "white", "black");

    let h1 = document.createElement("h1");
    let spo = document.createElement("button");
    let darkm = document.createElement("button");
    let scrm = document.createElement("button");

    h1.innerHTML = "Welcome Holberton!";

    spo.innerHTML = "Spooky";
    spo.onclick = spooky;

    darkm.innerHTML = "Dark Mode";
    darkm.onclick = darkMode;

    scrm.innerHTML = "Scream Mode";
    scrm.onclick= screamMode;

    document.body.append(h1, spo, darkm, scrm);

}

main();