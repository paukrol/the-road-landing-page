const colors =['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

const selectElementAll = function(element) {
    return document.querySelectorAll(element);
}

const selectElement = function(element) {
    return document.querySelector(element);
}

selectElement('.open-navbar-icon').addEventListener('click', () => {
    selectElement('.container').classList.add('change');
});

selectElement('.close-navbar-icon').addEventListener('click', () => {
    selectElement('.container').classList.remove('change');
});


let i = 0;

selectElementAll('.nav-link').forEach(item => {
    item.style.cssText = `background-color: ${colors[i++]}`;
});

selectElementAll('.navigation-button').forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.classList.toggle('change');
    });
});

