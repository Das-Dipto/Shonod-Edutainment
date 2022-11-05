window.addEventListener('scroll', ()=>{
    var navbar = document.querySelector('nav');
    var scroll = window.scrollY;
        if (scroll < 520) {
            navbar.classList.remove('bgcolor');
        } else {
            navbar.classList.add('bgcolor');
        }
});


let category_menu1 = document.querySelector('.sub1');
let category_menu2 = document.querySelector('.sub2');
let category_menu3 = document.querySelector('.sub3');
let category_menu4 = document.querySelector('.sub4');
let sscContent = document.querySelector('.ssc-content');
let hscContent = document.querySelector('.hsc-content');
let profCRContent = document.querySelector('.profCR-content');
let examPrepContent = document.querySelector('.examPrep-content');
let showcontent = document.querySelector('.show-content');
showcontent.innerHTML = sscContent.innerHTML;

category_menu1.addEventListener('click', function(){
    showcontent.style.display = 'none';
    this.classList.add('per');
    this.classList.remove('bg');
    category_menu2.classList.remove('per');
    category_menu3.classList.remove('per');
    category_menu4.classList.remove('per');
    sscContent.classList.add('vis');
    hscContent.classList.remove('vis');
    profCRContent.classList.remove('vis');
    examPrepContent.classList.remove('vis');
})

category_menu2.addEventListener('click', function(){
    showcontent.style.display = 'none';
    this.classList.add('per');
    category_menu1.classList.remove('bg');
    category_menu1.classList.remove('per');
    category_menu3.classList.remove('per');
    category_menu4.classList.remove('per');
    hscContent.classList.add('vis');
    sscContent.classList.remove('vis');
    profCRContent.classList.remove('vis');
    examPrepContent.classList.remove('vis');
})

category_menu3.addEventListener('click', function(){
    showcontent.style.display = 'none';
    this.classList.add('per');
    category_menu1.classList.remove('bg');
    category_menu1.classList.remove('per');
    category_menu2.classList.remove('per');
    category_menu4.classList.remove('per');
    profCRContent.classList.add('vis');
    sscContent.classList.remove('vis');
    hscContent.classList.remove('vis');
    examPrepContent.classList.remove('vis');
})

category_menu4.addEventListener('click', function(){
    showcontent.style.display = 'none';
    this.classList.add('per');
    category_menu1.classList.remove('bg');
    category_menu1.classList.remove('per');
    category_menu2.classList.remove('per');
    category_menu3.classList.remove('per');
    examPrepContent.classList.add('vis');
    profCRContent.classList.remove('vis');
    sscContent.classList.remove('vis');
    hscContent.classList.remove('vis');
})