const api = 'https://api.kanye.rest/';
fetch(api)
    .then(response => response.json())
    .then(data => {
        document.getElementById('quote').textContent = data.quote;
    })

function quote() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').textContent = data.quote;
        })
}