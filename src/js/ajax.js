const btn = document.querySelector('#second');
const main = document.querySelector('main');

btn.addEventListener('click', () => {
    fetch('./second.html')
    .then(resp => resp.text())
    .then(resp => {
        main.innerHTML = resp;
        window.history.pushState({}, '', './second');
    });
});