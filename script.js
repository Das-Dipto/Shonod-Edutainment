window.addEventListener('scroll', ()=>{
    var navbar = document.querySelector('nav');
    var scroll = window.scrollY;
        if (scroll < 520) {
            navbar.classList.remove('bgcolor');
        } else {
            navbar.classList.add('bgcolor');
        }
});

let sscContent = document.querySelector('.ssc-content');
let showcontent = document.querySelector('.show-content');
showcontent.innerHTML = sscContent.innerHTML;