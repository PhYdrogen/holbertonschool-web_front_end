function createElement(data) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = data;
    document.body.append(paragraph);
}

function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true)
    xhr.send();
    xhr.onload = (event) => createElement(event.currentTarget.response);
}


queryWikipedia();
