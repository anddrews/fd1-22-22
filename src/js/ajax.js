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




$(".slider").slick({
    slidesToShow: window.outerWidth > 500 ? 5 : 1
})


let c;

if (window.outerWidth > 500) {
    c = 5;
} else {
    c = 1;
}