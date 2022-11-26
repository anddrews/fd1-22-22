const btn = document.querySelector('.button.button--primary');
// console.log(btn);

// btn.textContent = '<h3 class="text">Hello world</>'
btn.style.backgroundColor = 'red';
btn.style.fontWeight = 'bold';
btn.style.color = '#fff';

btn.classList.add('some-class');
btn.classList.add('some-class');
btn.classList.add('some-class');
btn.classList.remove('buttonsdgsdfsd');
btn.classList.toggle('buttonsdgsdfsd');

function getContent(param) {
    return '<h1>' + param + '</h1>';
}

const tagP = document.createElement('p');
tagP.textContent = 'New tag p';
tagP.classList.add('tag-p');
tagP.style.backgroundColor = 'green';


btn.append(tagP, tagP.cloneNode(true), tagP.cloneNode(true));
document.body.appendChild(tagP.cloneNode(true));

// btn.remove();
const span = btn.querySelector('span');
btn.insertBefore(tagP, span);

function clicked() {
    console.log('button clicked');
}

function someAction() {
    console.log('some action');
}

function hover(event) {
    event.target.style.backgroundColor = 'blue';
}

function hoverOut(event) {
    event.target.style.backgroundColor = 'red';
}

btn.addEventListener('click', clicked);
btn.addEventListener('click', someAction);
window.btn = btn;
btn.addEventListener('mouseover', hover);
btn.addEventListener('mouseout', hoverOut);

const btn2 = document.querySelector('#second2');

