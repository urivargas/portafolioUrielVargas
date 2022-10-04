let readMore = document.getElementById('read_more');
let readMinus = document.getElementById('read_minus');
let paragraph2 = document.getElementById('about_paragraph2');
paragraph2.style.display = 'none';
readMinus.style.display = 'none';
readMore.style.color = 'darkred';

readMore.addEventListener('click', (e) => {
    e.preventDefault();
    paragraph2.classList.remove('animate__backOutLeft');
    readMore.style.display = 'none'
    paragraph2.style.display = '';
    paragraph2.classList.add('animate__backInLeft');
    readMinus.style.display = '';
    readMinus.style.color = 'darkred';
    
});
readMinus.addEventListener('click', (e) => {
    e.preventDefault();
    paragraph2.classList.remove('animate__backInLeft');
    paragraph2.classList.add('animate__backOutLeft');
    setTimeout(() => {
        readMinus.style.display = 'none';
        paragraph2.style.display = 'none';
        readMore.style.display = '';
    }, 1000);
});